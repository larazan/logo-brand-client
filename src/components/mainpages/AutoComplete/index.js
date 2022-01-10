import React, { useState, useEffect, useContext, useRef, useMemo } from 'react'
import {GlobalState} from '../../../GlobalState'
import AutoCompleteItem from './AutoCompleteItem'

import {Link} from 'react-router-dom'

import './auto.css'

const AutoComplete = () => {
    const state = useContext(GlobalState)
    const [brands, setBrands] = state.brandsAPI.brands
    const [text, setText] = state.searchAPI.text
    const [visible, setVisible] = useState(false)
    const [search, setSearch] = useState("")
    const [cursor, setCursor] = useState(-1)
    
    const searchContainer = useRef(null)
    const searchResultRef = useRef(null)

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);

    const suggestions = useMemo(() => {
        if (!search) return text

        return text.filter(item => item.name.toString().toLowerCase().includes(search.toString().toLowerCase()))
    }, [text, search])

    const handleClickOutside = event => {
        if (searchContainer.current && !searchContainer.current.contains(event.target)) {
            hideSuggestion()
        }
    }

    const showSuggestion = () => setVisible(true)
    const hideSuggestion = () => setVisible(false)

    console.log(brands);
    console.log(suggestions);
    console.log(text);

    return (
        <>
        <section className="search smaller">
            <div id="search_form" ref={searchContainer}>
                <div className="search_holder">
                    <div className="search_position">
                        <input type="submit" value="Search" className="search_button" title="Search" />
                        <div className="search_input_field">
                            <input 
                                type="text" 
                                value={search} 
                                id="search_field" 
                                placeholder="For example: Facebook, Tesla or Coca Cola"
                                onChange={e => setSearch(e.target.value.toLowerCase())} 
                                autoComplete="off"
                                onClick={showSuggestion}
                            />
                            <div id="search_suggestions" className={` ${visible ? "" : "hide"}`}>
                                <ul ref={searchResultRef}>
                                {
                                    suggestions.slice(0, 15).map( brand => (
                                        <li >
                                            <Link to={`/detail/${brand._id}`} key={brand._id} className="res-sug">
                                            <div>{brand.name}</div> 
                                            <div className="img-brand">
                                                <img src={brand.images.url} />
                                            </div>
                                            </Link>
                                        </li>
                                    ))
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        
        </>
    )
}

export default AutoComplete
