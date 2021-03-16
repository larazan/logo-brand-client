import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)

    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    

    return (
        <div className="filter_menu">
            

           
        </div>
    )
}

export default Filters
