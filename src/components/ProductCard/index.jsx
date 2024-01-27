import React from 'react'
import fela_img from '../../assets/images/products/fela_360x.webp'
import ashluxe_black_img from '../../assets/images/products/ashluxe_garden_logo_t-shirt.webp'

const ProductCard = ({ data }) => {
    return (

        <div className="row">
            <div className="col-lg-3 col-md-4 col-6 pb-2">
                <div className="product-item">
                    <span className="product-item__status">
                        <p className="product-item__status-text">Sold Out</p>
                    </span>

                    <div className="product-item__image-container">
                        <img className="product-item__image item__image-1" src={fela_img} alt=""/>
                        
                        <div className='product-item-hover'>
                            <img className="product-item__image item__image-2" src={ashluxe_black_img} alt=""/>
                            <button className="product-item__quick-shop">Quick Shop</button>
                        </div>

                        <div className="product-detail">
                            <div className="product-info">
                                <a href="" className="product-link"><h6 className="product-name">ASHLUXE GraphicsPrint T-shirt - </h6></a>
                                <p className="product-price">$170.00</p>
                            </div>
                            <p className="product-color">Red</p>
                            <div className="color-option">
                                <span className="radio-circle"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>      

        
    )
}

export default ProductCard