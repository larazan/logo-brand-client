import React, {createContext, useState, useEffect} from 'react';
import BrandsAPI from './api/brandsAPI';
import CategoriesAPI from './api/categoriesAPI'
import SearchAPI from './api/searchAPI'


export const GlobalState = createContext();

export const DataProvider = ({children}) => {
    const state = { 
        brandsAPI: BrandsAPI(),
        categoriesAPI: CategoriesAPI(),
        searchAPI: SearchAPI()
    }

    console.log(state);
    
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}

