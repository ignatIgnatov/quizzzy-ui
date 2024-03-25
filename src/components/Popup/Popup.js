import React, { useState, useEffect } from 'react';
import "./Popup.css"

const Popup = ({ show, setShow, text }) => {

    useEffect(() => {
        if (show) {
            setTimeout(() => {
                setShow(false);
            }, 2000);
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

export default Popup;