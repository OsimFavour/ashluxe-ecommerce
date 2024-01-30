import React from 'react'
import fela_img from '../../assets/images/products/fela_360x.webp'
import ashluxe_black_img from '../../assets/images/products/ashluxe_garden_logo_t-shirt.webp'
import { productService } from '../../features/product/productService'
import { Link } from 'react-router-dom'

const ProductCard = ({ data }) => {

    // const imagesArray = JSON.parse(data.product_images)

    // console.log('JSON Image', 'https://api.techpem.com' + imagesArray[0])

    const convertToAbsoluteURL = (relativeURL) => {
        const baseURL = 'https://api.techpem.com'
        
        const imagesArray = JSON.parse(relativeURL)
        const parsedURL = imagesArray[0]
        const result = `${baseURL}${parsedURL}`
        console.log('Result:', result)
        return result
    }

    // console.log('Convert to Print', convertToAbsoluteURL(data.product_images));
    // console.log(convertToAbsoluteURL('Convert Print', data.product_images)[0]);

    return (

        <div className="row">
            
            <div className="col-lg-3 col-md-4 col-6 pb-2">
                <div className="product-item">
                    <span className="product-item__status">
                        <p className="product-item__status-text">Sold Out</p>
                    </span>

                    <div className="product-item__image-container mx-0">
                        <img className="product-item__image item__image-1" src={convertToAbsoluteURL(data.product_images)} alt=""/>
                        
                        <div className='product-item-hover'>
                            <img className="product-item__image item__image-2" src={convertToAbsoluteURL(data.product_images)} alt=""/>
                            <button className="product-item__quick-shop">Quick Shop</button>
                        </div>


                    </div>

                    <div className="product-detail">
                        <div className="product-info">
                            <Link to="/" className="product-name"><h6>{data?.product_name}</h6></Link>
                            <p className="product-price">${data?.product_price}</p>
                        </div>
                        <div className="product-colors">
                            <p className="product-color">Red</p>
                        </div>
                        <div className="product_sizes">
                            M L XL 2XL
                        </div>
                        <div className="color-option">
                            <span className="radio-circle"></span>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>      

        
    )
}

export default ProductCard