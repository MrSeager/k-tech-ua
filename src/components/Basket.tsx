import React, { useState, useEffect, FC } from 'react';
//Components
import BasketItem from './BasketItem.tsx';
import ShopNotificationPanel from './ShopNotificationPanel.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Offcanvas, Row, Col } from 'react-bootstrap';
//Icons
import { MdOutlineShoppingCart, MdOutlineDeleteForever } from "react-icons/md";

interface BasketItemsProps {
    index: number;
    image: string;
    model: string;
    description: string;
    price: number;
    amount: number;
}

type BasketProps = {
    basketItems: BasketItemsProps[];
    setBasketItems: (basketItems: BasketItemsProps[]) => void;
    handleClose: () => void; 
    show: boolean;
}

const Basket: FC<BasketProps> = ({ basketItems, setBasketItems, handleClose, show }) => {
    const [sum, setSum] = useState(0);
    const [showNot, setShowNot] = useState(false);

    const toggleShowNot = () => setShowNot(!showNot);

    const handleCopy = () => {
        const containers = document.querySelectorAll('.text-container');
        let textToCopy = '';
    
        containers.forEach(container => {
            const modelDescription = (container.querySelector('p.cs-fs') as HTMLElement)?.innerText + ' ' || '';
            const amount = 'Кількість: ' + (container.querySelector('h2.h5:nth-of-type(2)') as HTMLElement)?.innerText + ' ' || '';
            const price = 'Ціна: ' + (container.querySelector('h2.h5:nth-of-type(1)') as HTMLElement)?.innerText + '. ' || '';
    
            textToCopy += `${modelDescription}\n${amount}\n${price}\n\n`;
    });

    navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setShowNot(true);
            //alert('Надішліть скопійований текст на пошту або будь-який месенджер, посилання на які надані нижче ');
        })
            .catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    useEffect(() => {
        const calculateSum = () => {
            const total = basketItems.reduce((acc, item) => acc + item.amount * item.price, 0);
            setSum(total);
        };
        calculateSum();
    }, [basketItems]);

    const clearBasket = () => {
        setBasketItems([]);
    };

    return (
        <Offcanvas show={show} onHide={handleClose} placement='end' className='cs-bg-2 p-4 cs-fc gap-3'>            
            <Offcanvas.Header closeButton className='py-1 cs-offcanvas-header'>
                <Offcanvas.Title><MdOutlineShoppingCart /></Offcanvas.Title>
            </Offcanvas.Header>
            <Container fluid className='h-100 overflow-auto cs-scroll border-top border-bottom'>
                {basketItems.length !== 0 ? (
                    basketItems
                    .map((basketItems, index) => (
                        <BasketItem
                            image={basketItems.image} 
                            model={basketItems.model} 
                            price={basketItems.price} 
                            amount={basketItems.amount} 
                            description={basketItems.description} 
                            setBasketItems={setBasketItems} 
                            index={index} />
                ))) : <h4 className='h5 text-center py-5 cs-fc-2'>Яка прикрість, нічого нема</h4>}
            </Container>
            <Row>
                <Col xs={9}>
                    <h3>₴{sum}</h3>
                </Col>
                <Col xs={3}>
                    <Button disabled={basketItems.length === 0} onClick={clearBasket} className='h-100 cs-btn-3 w-100 cs-bc cs-bg-3'><MdOutlineDeleteForever size={25} /></Button>
                </Col>
                <Col xs={12} className='mt-3'>
                    <Button disabled={basketItems.length === 0} onClick={handleCopy} className='cs-btn-3 py-3 h-100 w-100 cs-fs cs-bc cs-bg-3'>СКОПІЮВАТИ СПИСОК У БУФЕР ОБМІНУ</Button>
                </Col>
            </Row>
            <ShopNotificationPanel 
                showNot={showNot} 
                toggleShowNot={toggleShowNot} />
        </Offcanvas>
    );
}

export default Basket;