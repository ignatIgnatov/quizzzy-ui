import { useNavigate } from "react-router-dom";

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import * as userService from "../services/userService";

const GamePlayUQStart = () => {

    const { user } = useContext(AuthContext);

    const [points, setPoints] = useState('');

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
        navigate("/game/room/user-questions-room");
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
            </div>
        </div>
    )
}

export default GamePlayUQStart;