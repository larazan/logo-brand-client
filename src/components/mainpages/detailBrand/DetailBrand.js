import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link, useHistory} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import BrandItem from '../utils/brandItem/BrandItem'
import Search from '../search/Search';
import Item from '../utils/brandItem/Item';
import axios from 'axios'


function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [brands] = state.brandsAPI.brands
    const [detailBrand, setDetailBrand] = useState([])
    const [callback, setCallback] = state.brandsAPI.callback
    const [loading, setLoading] = useState(false)

    const history = useHistory();


    const deleteBrand = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', {public_id})
            const deleteBrand = axios.delete(`/api/brands/${id}`)

            await destroyImg
            await deleteBrand
            setCallback(!callback)
            setLoading(false)
            history.push('/')
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    useEffect(() =>{
        if(params.id){

            brands.forEach(brand => {
                if(brand._id === params.id) setDetailBrand(brand)
            })
        }
    },[params.id, brands])

    if(detailBrand.length === 0) return null;

    return (
        <>
            <Search />

            <section className="white">
                <div className="wrapper">
                    <h1 className="center">
                        <div className="brand" style={{textTransform: 'capitalize'}}>{detailBrand.name}</div>
                    </h1>
                    <div className="center">
                        <img className="larger" src={detailBrand.images.url} alt="" />
                    </div>
                    <div className="center">
                        <a id="download" className="button margin" target="_blank" href="https://worldvectorlogo.com/download/adidas-8.svg" rel="nofollow" data-redirect="https://worldvectorlogo.com/downloaded/adidas-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">
                                <g stroke="#fff" fill="none" stroke-width="2" stroke-miterlimit="10">
                                    <path d="M11,5L6,9,1,5"></path>
                                    <path d="M6,9V0"></path>
                                    <path d="m0 13h12"></path>
                                </g>
                            </svg> Download SVG
                        </a>
                        <p className="terms">
                            By downloading adidas vector logo you agree with our <a href="https://worldvectorlogo.com/terms-of-use">terms of use</a>.
                        </p>
                    </div>
                    <div className="meta__container">
                        <ul className="meta__tags">
                            
                            <li className="meta__tag">
                                <Link to={`/edit/${detailBrand._id}`}>
                                <a className="button" rel="nofollow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Edit Logo
                                </a>
                                </Link>
                            </li>
                            <li className="meta__tag">
                                
                                <div className="button button--error" rel="nofollow" onClick={() =>deleteBrand(detailBrand._id, detailBrand.images.public_id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Delete Logo
                                </div>
                                
                            </li>
                        </ul>
                        <div className="meta__profile-overview">
                            <div className="profile-overview__container">
                                <div className="profile-overview__title">
                                    Uploaded by
                                </div>
                                <a className="profile-overview__avatar" href="https://worldvectorlogo.com/profile/benoit-contardo">
                                    AD
                                </a>
                                <div className="profile-overview__name-rank">
                                    <a className="profile-overview__name" href="https://worldvectorlogo.com/profile/benoit-contardo">
                                        administrator
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="meta__downloads">
                            <span className="meta__downloads-value">2,244</span> times downloaded
                        </div>
                    </div>
                </div>
            </section>

            <Item brands={brands} />
          
        </>
    )
}

export default DetailProduct
