import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import Search from '../search/Search';
import BrandItem from '../utils/brandItem/BrandItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import {Link} from 'react-router-dom'
import LoadMore from './LoadMore'
import AutoComplete from '../AutoComplete'


function Brands() {
    const state = useContext(GlobalState)
    const [brands, setBrands] = state.brandsAPI.brands
   
    const [callback, setCallback] = state.brandsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const handleCheck = (id) =>{
        brands.forEach(brand => {
            if(brand._id === id) brand.checked = !brand.checked
        })
        setBrands([...brands])
    }

    const deleteBrand = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', {public_id})
            const deleteBrand = axios.delete(`/api/brands/${id}`)

            await destroyImg
            await deleteBrand
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () =>{
        brands.forEach(brand => {
            brand.checked = !isCheck
        })
        setBrands([...brands])
        setIsCheck(!isCheck)
    }

    const deleteAll = () =>{
        brands.forEach(brand => {
            if(brand.checked) deleteBrand(brand._id, brand.images.public_id)
        })
    }

    if(loading) return <div><Loading /></div>
    return (
        <>
        {/* <Search /> */}

        <AutoComplete />

        <div className="top-waldo top-waldo--gray">
            <div id="snhb-worldvectorlogo_top-0"></div>
        </div>    

        <div className="wrapper">
            <section>
                <h2>Random Logos</h2>
                <div className="logos">
                    <div className="grid">
                        
                        {
                            brands.map(brand => (
                                <Link to={`/detail/${brand._id}`} key={brand._id}>
                                    <div className="grid__col">
                                        <a className="logo">
                                            <div className="logo__wrapper">
                                                <div className="logo__container">
                                                    <img className="logo__img" src={brand.images.url} alt={brand.name} />
                                                </div>
                                                <span className="logo__name" style={{textTransform: 'capitalize'}}>{brand.name}</span>
                                            </div>
                                        </a>
                                    </div>
                                </Link>
                            ))
                        }
                            
                        
                    
                    </div>
                </div>
                <LoadMore />
            </section>

        </div>
        
        <div style={{height: '30px', marginBottom: '30px'}}></div>
        

        {/* <LoadMore /> */}
        {brands.length === 0 && <Loading />}
        </>
    )
}

export default Brands
