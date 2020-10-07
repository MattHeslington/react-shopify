import React, { Component } from 'react'
import Client from 'shopify-buy'

const ShopContext = React.createContext()

const client = Client.buildClient({
  storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
  domain: "graphql.myshopify.com",
});

class ShopProvider extends Component {

    state = {
        products: [],
        product: {},
        checkout: {},
        isCartOpen: false,
        test: 'test'
    }

    componentDidMount() {
        this.createCheckout()
    }

    createCheckout = async () => {
        const checkout = await client.checkout.create()
        this.setState({ checkout: checkout })
    }

    addItem = async (variantId, quantity) => {
        const lineItemsToAdd = [{
            variantId,
            quantity: parseInt(quantity, 10)
        }]

        const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemsToAdd)
        this.setState({ checkout: checkout })
    }

    fetchProducts = async () => {
        const products = await client.product.fetchAll()
        this.setState({ products: products })
    }

    fetchProductWithId = async (id) => {
        const product = await client.product.fetch(id);
        this.setState({ product: product })
    }

    closeCart = async () => {
        this.setState({ isCartOpen: false })
    }

    openCart = async () => {
        this.setState({ isCartOpen: true })
    }

    render() {
        return (
            <ShopContext.Provider value={{
                ...this.state,
                fetchProducts: this.fetchProducts,
                fetchProductWithId: this.fetchProductWithId,
                closeCart: this.closeCart,
                openCart: this.openCart,
                addItem: this.addItem
            }}>
                {this.props.children}
            </ShopContext.Provider>
        );
    }
}

const ShopConsumer = ShopContext.Consumer;
export { ShopConsumer, ShopContext };

export default ShopProvider;
