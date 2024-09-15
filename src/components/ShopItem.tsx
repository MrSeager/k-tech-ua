import React, { useRef, FC } from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Row, Col, Card, Form } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ItemsType {
    index: number;
    image: string;
    model: string;
    description: string;
    price: number;
}

interface BasketItemsProps extends ItemsType {
    amount: number;
}

type ShopItemProps = {
    items: ItemsType,
    image: string,
    model: string,
    description: string,
    price: number,
    setBasketItems: (basketItems: any) => void,
    index: number,
}

const ShopItem: FC<ShopItemProps> = ({ items, image, model, description, price, index, setBasketItems }) => {    
    const amountRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleAddToBasket = (item: ItemsType, index: number) => {
        const amount = amountRefs.current[index]?.valueAsNumber || 1;
        setBasketItems((prevBasketItems) => {
            const existingItemIndex = prevBasketItems.findIndex((basketItem: BasketItemsProps) => basketItem.index === item.index);
            
            if (existingItemIndex !== -1) {
                const updatedBasketItems = [...prevBasketItems];
                updatedBasketItems[existingItemIndex].amount += amount;
                return updatedBasketItems;
            } else {
                const newItem: BasketItemsProps = { ...item, amount };
                return [...prevBasketItems, newItem];
            }
        });
    };

    AOS.init({
        mirror: false,
    });

    return (
        <Card data-aos="fade-up" className='gap-3 pb-4 border-0 shadow h-100 justify-content-between cs-card'>
            <Card.Img variant='top' src={image} alt='item' />
            <Card.Text className='px-4 h-100'><b>{model}</b> - {description}</Card.Text>
            <Row className='mx-4 align-items-center'>
                <Col xs={3} className='text-start p-0'>
                    <Card.Text className='h4'>₴{price}</Card.Text>
                </Col>
                <Col xs={4} className='px-1'>
                    <Form.Control 
                        type='number' 
                        className='m-0 w-100 text-center cs-input shadow-none' 
                        min={1} 
                        defaultValue={1}
                        ref={(el) => (amountRefs.current[index] = el)} />
                </Col>
                <Col xs={5} className='px-1'>
                    <Button 
                        className='cs-btn-3 cs-bc cs-bg-3 w-100'
                        onClick={() => handleAddToBasket(items, index)}>ДОДАТИ</Button>
                </Col>
            </Row>
        </Card>
    );
}

export default ShopItem;