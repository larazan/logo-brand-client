import React, {useState, useContext, useEffect} from 'react'
import axios from 'axios'
import {GlobalState} from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import {useHistory, useParams} from 'react-router-dom'

import './createBrand.css'

const initialState = {
    name: '',
    _id: '',
    category: '',
}

function CreateBrand() {
    const state = useContext(GlobalState)
    const [brand, setBrand] = useState(initialState)
    const [categories] = state.categoriesAPI.categories
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)

    const history = useHistory()
    const param = useParams()

    const [brands] = state.brandsAPI.brands
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.brandsAPI.callback

    useEffect(() => {
        if(param.id){
            setOnEdit(true)
            brands.forEach(brand => {
                if(brand._id === param.id) {
                    setBrand(brand)
                    setImages(brand.images)
                }
            })
        }else{
            setOnEdit(false)
            setBrand(initialState)
            setImages(false)
        }
    }, [param.id, brands])

    const handleUpload = async e =>{
        e.preventDefault()
        try {
            const file = e.target.files[0]
            
            if(!file) return alert("File not exist.")

            if(file.size > 1024 * 1024) // 1mb
                return alert("Size too large!")

            if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/svg+xml') // 1mb
                return alert("File format is incorrect.")

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload', formData, {
                headers: {'content-type': 'multipart/form-data'}
            })
            setLoading(false)
            setImages(res.data)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy = async () => {
        try {
            setLoading(true)
            await axios.post('/api/destroy', {public_id: images.public_id})
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = e =>{
        const {name, value} = e.target
        setBrand({...brand, [name]:value})
    }

    const handleSubmit = async e =>{
        e.preventDefault()
        try {
            if(!images) return alert("No Image Upload")

            if(onEdit){
                await axios.put(`/api/brands/${brand._id}`, {...brand, images})
            }else{
                await axios.post('/api/brands', {...brand, images})
            }
            setCallback(!callback)
            history.push("/")
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }
    return (
        <>
        
            <section className="white">
                <div className="center row__middle2">
                    <div className="wrapper wrapper--dialog wrapper--dialog-m">
                        <div className="account-form">
                            <form onSubmit={handleSubmit}>
                                <h1 className="account-form__title">{onEdit? "Edit" : "Add"} logo</h1>
                                <hr className="account-form__line" />
                                <div className="account-form__form-group">
                                    <label className="account-form__label">
                                        <span className="account-form__label-note">Supported filetype: .svg</span> File
                                    </label>
                                    {/* <div className="dropzone-placeholder dz-clickable">
                                        <div className="dz-message">
                                            <button className="button button--blue" type="button">Choose logo</button>
                                            <p className="dropzone-placeholder__paragraph">Or drag it here</p>
                                        </div>
                                    </div> */}
                                    <div className="upload">
                                        <input type="file" name="file" id="file_up" onChange={handleUpload}/>
                                        {
                                            loading ? <div id="file_img"><Loading /></div>

                                            :<div id="file_img" style={styleUpload}>
                                                <img src={images ? images.url : ''} alt=""/>
                                                <span onClick={handleDestroy}>X</span>
                                            </div>
                                        }
                                        
                                    </div>
                                </div>
                                <input className="js-inputLogoId" type="hidden" name="logo_id" />
                                <div className="account-form__form-group">
                                    <label for="brand_name" className="account-form__label">Brand name</label>
                                    <input tabindex="1" type="text" className="account-form__form-control js-inputBrandName" id="name" name="name" placeholder="For example: Nike, Tesla or Facebook" value={brand.name} onChange={handleChangeInput}
                                        required="required"/>
                                </div>

                                <div className='account-form__form-group'>
                                    <label for="brand_name" className="account-form__label">Category</label>
                                    <select className="account-form__form-control js-inputBrandName" name="category" value={brand.category} onChange={handleChangeInput} >
                                        <option value="">Please select a category</option>
                                        {
                                            categories.map(category => (
                                                <option value={category._id} key={category._id}>
                                                    {category.name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                
                                <div className="account-form__form-group account-form__form-group--last">
                                    <button className="button button--green button--full-width" type="submit">
                                        <svg style={{marginTop: '-2px', marginRight: '4px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 14" width="12" height="14">
                                            <path d="M1,6L6,1.5,11,6" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2"></path>
                                            <path d="M6,10V2" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2"></path>
                                            <path d="M0,13H12" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2"></path>
                                        </svg> {onEdit? "Update" : "Upload"}
                                    </button>
                                </div>
                                <p className="account-form__note">After uploading we will review and publish your logo within 48 hours.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default CreateBrand
