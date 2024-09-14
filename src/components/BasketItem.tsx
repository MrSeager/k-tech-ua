import React, { FC } from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';

interface BasketItemsProps {
    index: number;
    image: string;
    model: string;
    description: string;
    price: number;
    amount: number;
}

type BasketItemProp = {
    image: string;
    model: string;
    price: number;
    amount: number; 
    description: string; 
    setBasketItems:(BasketItemsProps) => void; 
    index: number;
}

const BasketItem: FC<BasketItemProp> = ({ image, model, price, amount, description, setBasketItems, index }) => {    
    const handleRemoveFromBasket = (index: number) => {
        setBasketItems((prevBasketItems) => prevBasketItems.filter((items, i) => i !== index));
    };

    return (
        <Container fluid className='border-top border-bottom py-3 text-container'>
            <Row className='align-items-stretch'>
                <Col xs={3} className='d-flex flex-column justify-content-between'>
                    <Image fluid rounded src={image} alt='item' className='mb-3 w-100' />
                    <Button onClick={() => handleRemoveFromBasket(index)} className='w-100 cs-btn-2 border-2 bg-transparent cs-fc px-0'>X</Button>
                </Col>
                <Col xs={6} className='flex-grow-1 overflow-auto fixed-height cs-scroll'>
                    <p className='cs-fs'><b>{model}</b> - {description}</p>
                </Col>
                <Col xs={3} className='d-flex flex-column justify-content-between'>
                    <h2 className='h5'>₴{price * amount}</h2>
                    <h2 className='h5'>{amount} шт.</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default BasketItem;