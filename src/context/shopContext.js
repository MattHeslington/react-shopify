import React, { Component } from 'react'
import Client from 'shopify-buy'

const ShopContext = React.createContext()

const client = Client.buildClient({
    storefrontAccessToken: 'e0a6a71985b484c0204a2637d29eebb7',
    domain: 'react-example.myshopify.com'
})

class ShopProvider extends Component {

    state = {
        products: [],
        product: {},
        checkout: {},
        isCartOpen: false,
        test: 'test'
    }

    createCheckout = async () => {

    }

    addItem = async (variantId, quantity) => {

    }

    fetchProducts = async () => {

    }

    fetchProductWithId = async () => {

    }

    closeCart = async () => {

    }

    openCart = async () => {

    }

    render() {
        return (
            <ShopContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </ShopContext.Provider>
        );
    }
}

const ShopConsumer = ShopContext.Consumer;
export { ShopConsumer, ShopContext };

export default ShopProvider;
