import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'

const Home = () => {

    const { fetchProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchProducts()
        return () => {

        };
    }, [fetchProducts])

    if(!products) return <div>loading</div>
    return (
        <div>
            we have products
        </div>
    )
}

export default Home
