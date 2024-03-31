import React, { useState, useEffect } from 'react';
import "./Popup.css"

const PopupWithoutAnimation = ({ show, setShow, text }) => {
    useEffect(() => {
        if (show) {
            setTimeout(() => {
                setShow(false);
            }, 3000);
        }
    }, [show, setShow]);

    return (
        <>
            {show && (
                <div className="popup">
                    <div className="popup-content">
                        <span>{text}</span>
                    </div>
                </div>
            )}
        </>
    );
}

export default PopupWithoutAnimation;