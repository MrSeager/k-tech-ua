import React, { FC } from 'react';
//Components
import ShopItem from './ShopItem.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';

interface ItemsType {
    index: number;
    image: string;
    model: string;
    description: string;
    price: number;
}

type ShopItemsPanelProps = {
    items: ItemsType[],
    setBasketItems: (basketItems: any) => void,
    selectedModel: string,
}

const ShopItemsPanel: FC<ShopItemsPanelProps> = ({ items, setBasketItems, selectedModel }) => {
    const filteredItems = items.filter(item => 
        selectedModel === 'УСІ РАМИ' || item.model === selectedModel
    );

    return (
        <Container fluid className='px-lg-5 px-xs-2'>
            <Row>
                {filteredItems
                    .map((items, index) => (
                        <Col xl={3} lg={4} md={6} sm={12} xs={12} className='p-3'>
                            <ShopItem 
                                items={items}
                                image={items.image}
                                model={items.model}
                                description={items.description}
                                price={items.price}
                                index={index}
                                setBasketItems={setBasketItems} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default ShopItemsPanel;