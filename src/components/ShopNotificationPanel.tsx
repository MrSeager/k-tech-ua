import React, { useState, useEffect, FC } from 'react';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup, Toast, ToastContainer } from 'react-bootstrap';
//Icons
import { FaTelegramPlane, FaViber, FaInstagram } from "react-icons/fa";

type ShopNotificationPanelProps = {
    showNot: boolean;
    toggleShowNot: (boolean) => void;
}

const ShopNotificationPanel: FC<ShopNotificationPanelProps> = ({ showNot, toggleShowNot }) => {
    return (
        <ToastContainer position='bottom-center' className='mb-3 w-100 px-3'>
            <Toast show={showNot} onClose={toggleShowNot} className='w-100 border-0 shadow cs-bg-2 cs-fc'>
                <Toast.Header className='cs-bg-2 cs-fc'>
                    <strong className="me-auto">K.Tech.UA</strong>
                </Toast.Header>
                <Toast.Body className='text-center'>Надішліть скопійований текст на будь-який месенджер, посилання на які надані нижче</Toast.Body>
                <ButtonGroup className='w-100 pb-3 px-3 gap-1'>
                    <Button className='cs-btn-3 cs-bc cs-bg-3 h-100'>o|x</Button>
                    <Button className='cs-btn-3 cs-bc cs-bg-3 h-100'><FaViber /></Button>
                    <Button className='cs-btn-3 cs-bc cs-bg-3 h-100'><FaTelegramPlane /></Button>
                    <Button className='cs-btn-3 cs-bc cs-bg-3 h-100'><FaInstagram /></Button>
                </ButtonGroup>
            </Toast>
        </ToastContainer>
    );
}

export default ShopNotificationPanel;