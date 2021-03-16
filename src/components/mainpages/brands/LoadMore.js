import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function LoadMore() {
    const state = useContext(GlobalState)
    const [page, setPage] = state.brandsAPI.page
    const [result] = state.brandsAPI.result

    return (
        <div class="center">
            {
                result < page * 9 ? ""
                : <a class="button" onClick={() => setPage(page+1)}>More random logos</a>
            }
            
        </div>

        // <div className="load_more">
        //     {
        //         result < page * 9 ? ""
        //         : <button onClick={() => setPage(page+1)}>Load more</button>
        //     }
        // </div>
    )
}

export default LoadMore
