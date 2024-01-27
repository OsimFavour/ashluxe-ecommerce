import React from 'react'
import { Link } from 'react-router-dom'
import { LuUser } from "react-icons/lu"
import { IoIosArrowDown } from "react-icons/io"
import { AiOutlineSearch } from "react-icons/ai"
import { RiLogoutBoxLine } from "react-icons/ri"
import { MdOutlineShoppingCart } from "react-icons/md"
import logo from '../../assets/images/logos/ashluxe_new_logo2.avif'


const Header = () => {
    return (
        <section className="header-section">
            <header className="header container-xxl">
               
                <div className="header__logo">
             
                    <Link to="/">
                        <img src={logo} alt="ASHLUXE logo" className="logo__image" />
                    </Link>
                </div>

             
                <nav className="header__nav">

                    <ul className="nav__list">
                        
                        <li className="nav__item">
                            <Link to="/" className="nav__link">New Arrivals</Link>
                        </li>
                        

                        <li className="dropdown nav__item">
                            <Link className="dropbtn nav__link">Men</Link>
                            <span className='px-2'><IoIosArrowDown /></span>
                            <div className="dropdown-content">
                                <a href="#">Collection</a>
                                <a href="#">Olympiad</a>
                                <a href="#">Summer Essentials</a>
                                <a href="#">Heritage</a>
                                <a href="#">Harmonious Discord</a>
                                <a href="#">Chrome</a>
                            </div>
                        </li>


                        <li className="dropdown nav__item">
                            <Link className="dropbtn nav__link">Women</Link>
                            <span className='px-2'><IoIosArrowDown /></span>
                            <div className="dropdown-content">
                                <a href="#">Collection</a>
                                <a href="#">Olympiad</a>
                                <a href="#">Summer Essentials</a>
                                <a href="#">Heritage</a>
                                <a href="#">Harmonious Discord</a>
                                <a href="#">Chrome</a>
                            </div>
                        </li>

                        <li className="dropdown nav__item">
                            <Link className="dropbtn nav__link">Collection</Link>
                            <span className='px-2'><IoIosArrowDown /></span>
                            <div className="dropdown-content">
                                <a href="#">Collection</a>
                                <a href="#">Olympiad</a>
                                <a href="#">Summer Essentials</a>
                                <a href="#">Heritage</a>
                                <a href="#">Harmonious Discord</a>
                                <a href="#">Chrome</a>
                            </div>
                        </li>

                        
                        <li className="nav__item">
                            <Link to="/" className="nav__link">ASHLUXURY.com</Link>
                        </li>
                    </ul>
                </nav>

                
                <div className="header-font-icons">

                    <Link to="/" className="header__icon-link">
                        <AiOutlineSearch className='fs-6' size='18px'/>
                    </Link>

                    <Link to="/" className="header__icon-link">
                        <LuUser className='fs-6' size='18px'/>
                    </Link>

                    <Link to="/" className="header__icon-link">
                        <RiLogoutBoxLine className='fs-6' size='18px'/>
                    </Link>

                    <Link to="/" className="header__icon-link">
                        <MdOutlineShoppingCart className='fs-6' size='18px'/>
                    </Link>

                    
                </div>

            </header>
        </section>
    )
}

export default Header