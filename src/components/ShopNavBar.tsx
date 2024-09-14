import React, { useState, FC } from 'react';
//Components
import Basket from './Basket.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Navbar, Image } from 'react-bootstrap';
//Icons
import { MdOutlineShoppingCart } from "react-icons/md";
//Images
import ImgLogo from '../Images/Logo_56dp.svg';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';

interface BasketItemsProps {
    index: number;
    image: string;
    model: string;
    description: string;
    price: number;
    amount: number;
}

type ShopNavBarProps = {
    basketItems: BasketItemsProps[];
    setBasketItems: (basketItems: BasketItemsProps[]) => void;
    setShowNot: (showNot: boolean) => void;
}

const ShopNavBar: FC<ShopNavBarProps> = ({ basketItems, setBasketItems, setShowNot }) => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    AOS.init();

    return (
        <Navbar data-aos="fade-down" fixed='top' className='shadow cs-bg-2 w-100 d-flex flex-lg-row flex-md-row flex-column align-items-center justify-content-between px-md-5 px-xs-2 py-md-4 py-xs-2 cs-pos'>
            <Navbar.Brand href='#home' className='cs-fw-600 ms-5 d-flex flex-row align-items-center justify-content-md-start justify-content-center'><Image fluid src={ImgLogo} alt='logo' className='cs-img me-2' />K.TECH.UA</Navbar.Brand>
            <Container className='me-5 d-flex flex-row justify-content-lg-end justify-content-md-end justify-content-center'>
                <Navbar.Text>м. Київ, +38(068)548-94-58</Navbar.Text>
                <Button onClick={handleShow} className='cs-btn rounded-1 d-flex flex-row align-items-center gap-1 cs-fc ms-5 border-0 bg-transparent'>{basketItems.length} <MdOutlineShoppingCart /></Button>
            </Container>
            <Basket 
                basketItems={basketItems} 
                setBasketItems={setBasketItems}
                handleClose={handleClose}
                show={show}
                setShowNot={setShowNot} />
        </Navbar>
    );
}

export default ShopNavBar;