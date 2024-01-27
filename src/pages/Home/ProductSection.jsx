import React from 'react'
import fela_img from '../../assets/images/products/fela_360x.webp'
import ashluxe_black_img from '../../assets/images/products/ashluxe_garden_logo_t-shirt.webp'
import ashluxe_white_img from '../../assets/images/products/Ashluxe_Garden_LogoT-Shirt-White_360x.webp'
import jeans_img from '../../assets/images/products/Ashluxetemplate_360x.webp'
import ProductCard from '../../components/ProductCard'

const ProductSection = () => {
  return (


    <section class="product-overall">
        <div class="product-container">
            <div class="product-list__items">
            
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>

            
            </div>
        </div>

    </section>

  )
}

export default ProductSection