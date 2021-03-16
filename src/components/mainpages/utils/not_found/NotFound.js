import React from 'react'
import {Link} from 'react-router-dom'
import Search from '../../search/Search';

function NotFound() {
    return (
        <>
            <Search />
            <section>
                <div class="wrapper">
                    <div class="center">
                      <h1>Sorry, we couldn't find the page you requested</h1>
                    </div>
                    <div class="center">
                        <Link to="/">
                            <a class="button">Go back to home</a>
                        </Link>
                        
                    </div>
                </div>
            </section>  
        </>
    )
}

export default NotFound
