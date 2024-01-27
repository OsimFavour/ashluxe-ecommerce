import React from 'react'
import banner from '../../assets/images/banner/ashluxe-banner.webp'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <section>
            <div className="banner-container">
                <div className="banner">
                    <img src={banner} className='img-fluid' alt='banner' />
                    
                    <div className='banner-text'>
                        <h2>New In</h2>
                        <div>
                            <p className="">Explore Olympiad V2</p>
                        </div>
                        <div>
                            <Link className='button'>
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner