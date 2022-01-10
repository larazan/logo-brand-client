import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'


const Search = () => {
    const state = useContext(GlobalState)
    const [search, setSearch] = state.brandsAPI.search

    return (
        <>
            <section className="search smaller">
                <div id="search_form">
                    <div className="search_holder">
                        <div className="search_position">
                            
                            <input type="submit" value="Search" className="search_button" title="Search" />
                            <div className="search_input_field">
                                <input type="text" value={search} id="search_field" placeholder="For example: Facebook, Tesla or Coca Cola"
                                onChange={e => setSearch(e.target.value.toLowerCase())} />
                                <div id="search_suggestions" className="hide"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Search
