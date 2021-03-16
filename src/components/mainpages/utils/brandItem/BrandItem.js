import React from 'react'
import BtnRender from './BtnRender'

function BrandItem({brand, deleteProduct, handleCheck}) {

    return (
        <div className="product_card">
           {
                <input type="checkbox" checked={brand.checked}
                onChange={() => handleCheck(brand._id)} />
            }
            <img src={brand.images.url} alt="" />

            <div className="product_box">
                <h2 title={brand.name}>{brand.name}</h2>
            </div>

            
            <BtnRender brand={brand} deleteProduct={deleteProduct} />
        </div>
    )
}

export default BrandItem
