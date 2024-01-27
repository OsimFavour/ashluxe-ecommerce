import React from 'react'
import logo from '../../assets/images/logos/ashluxe_new_logo2.avif'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <section className="header-section">
            <header className="header container-xxl">
               
                <div className="header__logo">
             
                    <Link href="#">
                        <img src={logo} alt="ASHLUXE logo" className="logo__image" />
                    </Link>
                </div>

             
                <nav className="header__nav">

                    <ul className="nav__list">
                        <li className="nav__item">
                            <select name="collection" id="collection" className="nav__select">
                                <option value="">Collection</option>
                                <option value="">Olympiad</option>
                                <option value="">Summer Essentials</option>
                                <option value="">Heritage</option>
                                <option value="">Harmonious Discord</option>
                                <option value="">Chrome</option>
                            </select>
                        </li>
                        <li className="nav__item">
                            <Link href="#" className="nav__link">New Arrivals</Link>
                        </li>
                        <li className="nav__item"><Link href="#" className="nav__link">Men</Link></li>
                        <li className="nav__item"><Link href="#" className="nav__link">Women</Link></li>
                        <li className="nav__item">
                            <Link href="#" className="nav__link">ASHLUXURY.com</Link>
                        </li>
                    </ul>
                </nav>

                
                <div className="header__font-icons">
                    <Link href="#" className="header__icon-link">
                        <i className="fa fa-search header-icon" style={{ fontSize: '24px' }}></i>
                    </Link>
                    <Link href="#" className="header__icon-link">
                        <i className="fa fa-user header-icon" style={{ fontSize: '24px' }}></i>
                    </Link>
                    <Link href="#" className="header__icon-link">
                        <i className="fa fa-shopping-cart header-icon" style={{ fontSize: '24px' }}></i>
                    </Link>
                </div>
            </header>
        </section>
    )
}

export default Header