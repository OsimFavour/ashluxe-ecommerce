import { getAllProducts } from '../../features/product/productSlice'
import ProductSection from './ProductSection'
import { useDispatch, useSelector } from 'react-redux'
import SmallBanner from './SmallBanner'
import Banner from './Banner'
import React, { useEffect } from 'react'



const Home = () => {

    const productState = useSelector(state => state.product.products.message)
    console.log('Product State', productState);

    
    useEffect(() => {
        getProducts()
    }, [])

    
    const dispatch = useDispatch()
    const getProducts = () => {
        dispatch(getAllProducts())
    }


    return (
        <>
            <div>Home</div>
            <Banner/>
            <SmallBanner/>
            <ProductSection productState={productState}/>
        </>
    )
}

export default Home