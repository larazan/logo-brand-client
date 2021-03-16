import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'

function BtnRender({brand, deleteProduct}) {
    const state = useContext(GlobalState)
   
    return (
        <div className="row_btn">
            {
                <>
                    <Link id="btn_buy" to="#!" 
                    onClick={() =>deleteProduct(brand._id, brand.images.public_id)}>
                        Delete
                    </Link>
                    <Link id="btn_view" to={`/edit_product/${brand._id}`}>
                        Edit
                    </Link>
                    <Link id="btn_view" to={`/detail/${brand._id}`}>
                        View
                    </Link>
                </>
            }
                
        </div>
    )
}

export default BtnRender
