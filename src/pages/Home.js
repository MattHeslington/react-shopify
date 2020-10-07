import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/shopContext'

const Home = () => {

    const { test } = useContext(ShopContext)

    return (
        <div>
            Home
            {test}
        </div>
    )
}

export default Home
