import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../services/productService'

export default function ProductDetail() {
    let { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        let productService = new ProductService()
        productService.getProductById(id).then(result => setProduct(result.data)).catch(error => (console.error("Error fetching products:", error)))
    }, [id])

    return (
        <>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            size="large"
                            src={product.thumbnail}
                        />
                        <Card.Header style={{ marginTop: "0.5em" }}>{product.title}</Card.Header>
                        <Card.Meta>{product.category}</Card.Meta>
                        <Card.Meta>{product.price}</Card.Meta>
                        <Card.Description>
                            {product.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className="ui two buttons">
                            <Button basic color="green">
                                Approve
                            </Button>
                            <Button basic color="red">
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </>
    )
}