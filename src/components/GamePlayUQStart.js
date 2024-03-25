import { useNavigate } from "react-router-dom";

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import * as userService from "../services/userService";

import Popup from './Popup/Popup';

const GamePlayUQStart = () => {

    const { user } = useContext(AuthContext);

    const [points, setPoints] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        userService.getUser(user.email, user.token)
            .then((data) => {
                setPoints(data.points);
            })
    }, [])

    const navigate = useNavigate();

    const toOtherRoom = () => {
        navigate("/rooms")
    }

    const onStartHandler = () => {
        setShowPopup(true);
        setTimeout(() => {
            navigate("/game/room/user-questions-room");
        }, 2150);
    }

    return (
        <div>
            <header id="head" className="secondary"></header>
            <div className="container">
                <ol className="breadcrumb">
                    <li>User Questions Room</li>
                    <li className="active">{user.email}</li>
                    <li className="active">{points} pts.</li>
                </ol>
                <h4>Time: 00</h4>
                <button onClick={toOtherRoom} className="btn btn-default">To other room</button>
            </div>
            <h3 className="start-button">You have 30 second to answer the question...</h3>
            <h5 className="start-button blinking-text">click Start to continue...</h5>
            <div className="start-button">
                <button onClick={onStartHandler} className="btn start-btn">START</button>
                <Popup text="loading questions..." show={showPopup} setShow={setShowPopup} />
            </div>
        </div>
    )
}

export default GamePlayUQStart;