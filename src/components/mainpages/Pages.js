import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Brands from './brands/Brands'
import DetailBrand from './detailBrand/DetailBrand'

import NotFound from './utils/not_found/NotFound'
import CreateBrand from './createBrand/CreateBrand'


function Pages() {

    return (
        <main>
        <Switch>
            <Route path="/" exact component={Brands} />
            <Route path="/detail/:id" exact component={DetailBrand} />

            <Route path="/create_brand" exact component={CreateBrand} />
            <Route path="/edit/:id" exact component={CreateBrand} />

            <Route path="*" exact component={NotFound} />
        </Switch>
        </main>
    )
}

export default Pages
