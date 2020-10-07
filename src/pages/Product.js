import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { Button, Text, Div, Row, Col, Container } from 'atomize'

const Product = () => {

    let { id } = useParams();
    const { fetchProductWithId, addItem, product, openCart } = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithId(id)
        return () => {

        }
    }, [fetchProductWithId, id])

    if(!product.title) return <div>loading</div>
    return (
        <Container>
            <Row>
                <Col>
                    <Div
                        bgImg={product.images[0].src}
                        bgSize="cover"
                        bgPosition="center center"
                        h="40rem"
                    />
                </Col>
                <Col>
                    <Text>{product.title}</Text>
                    <Text>{product.variants[0].price}</Text>
                    <Button onClick={() => {
                        addItem(product.variants[0].id, 1)
                        openCart()
                    }}>Add to cart</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Product
