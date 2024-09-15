import React, { useState, useEffect, FC } from 'react';
//Components
import './ShopMain.css'
import ShopFooter from './ShopFooter.tsx';
import ShopNavBar from './ShopNavBar.tsx';
import ShopItemsPanel from './ShopItemsPanel.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Dropdown, ToastContainer, Toast } from 'react-bootstrap';
//Axios
import axios from 'axios';
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

const ShopMain: FC = () => {
    const [items, setItems] = useState<ItemsType[]>([]);
    const [basketItems, setBasketItems] = useState<BasketItemsProps[]>([]);
    const [selectedModel, setSelectedModel] = useState<string>('УСІ РАМИ');

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/MrSeager/k-tech-ua/main/src/data.json').then((response) => {
            setItems(response.data.items);
        });
    }, []);

    return (
        <Container fluid className='p-0 cs-bg min-vh-100 d-flex flex-column justify-content-between pt-5'>
            <ShopNavBar  
                basketItems={basketItems}
                setBasketItems={setBasketItems} />
            <Container fluid className='px-5 py-3 mt-5 d-flex flex-row justify-content-end'>
                <Dropdown className='shadow cs-w border' title='Model'>
                    <Dropdown.Toggle className='cs-dropdown-btn rounded-0 rounded-top w-100 border-0 cs-bg-2 cs-fc'>{selectedModel}</Dropdown.Toggle>
                    <Dropdown.Menu className='w-100 shadow border-0 text-center rounded-0 rounded-bottom'>
                        <Dropdown.Item onClick={() => setSelectedModel('УСІ РАМИ')} className='cs-drop-item'>УСІ РАМИ</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSelectedModel('Mark4 7')} className='cs-drop-item'>MARK4 7</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSelectedModel('Mark4 7V2/8/9/10')} className='cs-drop-item'>MARK4 7V2/8/9/10</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSelectedModel('Apex 7/8/9/10')} className='cs-drop-item'>APEX 7/8/9/10</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
            <ShopItemsPanel 
                items={items}
                setBasketItems={setBasketItems}
                selectedModel={selectedModel} />
            <ShopFooter />
        </Container>
    );
}

export default ShopMain;