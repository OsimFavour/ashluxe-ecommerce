import { getAllProducts } from '../../features/product/productSlice'
import ProductSection from './ProductSection'
import { useDispatch, useSelector } from 'react-redux'
import SmallBanner from './SmallBanner'
import Banner from './Banner'
import React, { useEffect } from 'react'



const Home = () => {

    const productState = useSelector(state => state.product.product)
    console.log(productState);

    const dispatch = useDispatch()
    const getProducts = () => {
        dispatch(getAllProducts())
    }

    useEffect(() => {
        getProducts()
    }, [])


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