import React from 'react'
import fela_img from '../../assets/images/products/fela_360x.webp'
import ashluxe_black_img from '../../assets/images/products/ashluxe_garden_logo_t-shirt.webp'
import ashluxe_white_img from '../../assets/images/products/Ashluxe_Garden_LogoT-Shirt-White_360x.webp'
import jeans_img from '../../assets/images/products/Ashluxetemplate_360x.webp'
import ProductCard from '../../components/ProductCard'

const ProductSection = ({ productState }) => {
  return (


    <section className="product-overall">
        <div className="product-container">

            <div className="product-section-heading">
              <h2 className='d-flex justify-content-start'>New Arrival</h2>
            </div>

            <div className="product-list__items mx-auto">
            
                {productState?.map((productItem, index) => (
                  <ProductCard key={index} data={productItem}/>
                ))}

            
            </div>
        </div>

    </section>

  )
}

export default ProductSection