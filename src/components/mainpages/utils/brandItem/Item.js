import React from 'react'
import {Link} from 'react-router-dom'

const Item = ({brands}) => {
    return (
        <>
            <section>
                <div class="wrapper">
                    <h2>Logos related</h2>
                    <div class="logos">
                        <div class="grid">
                            {
                                brands.map(brand => (
                                    <div class="grid__col" key={brand._id}>
                                        <Link to={`/detail/${brand._id}`}>
                                            <a class="logo">
                                                <div class="logo__wrapper">
                                                    <div class="logo__container">
                                                        <img class="logo__img" src={brand.images.url} alt={brand.name} />
                                                    </div>
                                                    <span class="logo__name" style={{textTransform: 'capitalize'}}>{brand.name}</span>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                ))
                            }
                            
                            
                        </div>
                    </div>
                </div>
            </section>

            
        </>
    )
}

export default Item
