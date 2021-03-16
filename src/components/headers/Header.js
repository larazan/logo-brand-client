import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'

import {Link} from 'react-router-dom'
import axios from 'axios'

function Header() {
    const state = useContext(GlobalState)
   
    return (
        <header>
            <div className="header">
                <div className="wrapper clear">
                    <div className="flex-header">
                        <div className="flex-header__item flex-header__item--left"></div>
                        <div className="flex-header__center">
                            <Link to="/">
                            <a className="logo align_left">
                                <img src={"https://worldvectorlogo.com/static/img/logo.svg"} width="214" height="16" alt="Logo Worldvectorlogo" title="Go back to home" />
                            </a>
                            </Link>
                        </div>
                        <div className="flex-header__item flex-header__item--right">
                            <div className="main-nav">
                                
                                <div className="main-nav__container">
                                    
                                    <ul className="main-nav__menu">
                                        <li className="main-nav__item">
                                            <a className="main-nav__link" href="https://worldvectorlogo.com/alphabetical">Alphabetical</a>
                                        </li>
                                        <li className="main-nav__item main-nav__item--mobile-divider">
                                            <a className="main-nav__link" href="https://worldvectorlogo.com/most-downloaded">Most downloaded</a>
                                        </li>
                                       
                                        <li className="main-nav__item main-nav__item--mobile-divider">
                                            <Link to="/create_brand">
                                            <a className="main-nav__button main-nav__button--last-child button button--green button--smaller">
                                                <svg className="button__plus-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                                                    <line x1="6" x2="6" y2="12" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2"></line>
                                                    <line y1="6" x2="12" y2="6" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2"></line>
                                                </svg>
                                                Add logo
                                            </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
