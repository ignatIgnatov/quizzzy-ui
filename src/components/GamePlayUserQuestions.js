import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import * as roomService from "../services/roomService";
import * as userService from "../services/userService";

import Popup from './Popup/Popup';
import PopupWithoutAnimation from "./Popup/PopupWithoutAnimation";

const GamePlayUserQuestions = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const category = localStorage.getItem("category");

    const [questions, setQuestions] = useState([]);
    const [randomQuestion, setRandomQuestion] = useState([]);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [seconds, setSeconds] = useState(30);
    const [green, setGreen] = useState('');
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [timer, setTimer] = useState(null);
    const [timesUp, setTimesUp] = useState(false);
    const [points, setPoints] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [noQuestions, setNoQuestions] = useState(false);
    const [questionIndex, setQuestionIndex] = useState('');

    const removeButtonClassNames = () => {
        const buttons = document.querySelectorAll('.value');
        buttons.forEach(button => {
            button.classList.remove("true-answer");
            button.classList.remove("wrong-answer");
        });
    };

    useEffect(() => {
        userService.getUser(user.email, user.token)
            .then((data) => {
                setPoints(data.points);
            })
            .catch(() => navigate("/error"));

        roomService.getAllQuestionsByCategory(user.token, category)
            .then((data) => {
                setQuestions(data)
            })
            .catch(() => navigate("/error"));
    }, []);

    useEffect(() => {
        if (questions.length > 0) {
            chooseNextQuestion();
        }
    }, [questions]);

    const chooseNextQuestion = () => {

        removeButtonClassNames();

        if (questions.length === 0) {
            setNoQuestions(true);
        } else {
            const index = Math.floor(Math.random() * questions.length);
            setQuestionIndex(index);
            setRandomQuestion(questions[index].question);

            const trueAnswer = questions[index] ? questions[index].trueAnswer : "...";
            setGreen(trueAnswer);

            const wrongAnswerOne = questions[index] ? questions[index].wrongAnswerOne : "...";
            const wrongAnswerTwo = questions[index] ? questions[index].wrongAnswerTwo : "...";
            const wrongAnswerThree = questions[index] ? questions[index].wrongAnswerThree : "...";
            const answers = [trueAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree];

            setTimesUp(false);
            setShuffledAnswers(answers.sort(() => Math.random() - 0.5));
            setButtonClicked(false);
            setSeconds(30);

            const newTimer = setInterval(() => {

                setSeconds(prev => {
                    if (prev > 0) {
                        return prev - 1;
                    } else {
                        clearInterval(newTimer)
                        setButtonClicked(true);
                        setTimesUp(true);
                        return prev;
                    }
                })
            }, 1000);

            setTimer(newTimer);
            clearInterval(timer);
        }
    }

    const checkForTrueAnswer = (event) => {

        const buttonValue = event.target.value;

        if (buttonValue === green) {
            setPoints(p => p + 1);
            event.target.classList.add("true-answer");

            questions.splice(questionIndex, 1);
            setQuestions(questions);
        } else {
            event.target.classList.add("wrong-answer");
        }

        setButtonClicked(true);
        setSeconds(30);
        clearInterval(timer);
    }

    const toNextQuestion = () => {
        chooseNextQuestion();
    }

    const toOtherRoom = () => {
        localStorage.removeItem("category");
        navigate("/rooms");
    }

    const savePoints = () => {

        userService.savePoints(user.email, points, user.token)
            .then(() => {
                setShowPopup(true);
            })
            .catch(() => navigate("/error"))
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
                <h4>Time: {" "}{seconds}</h4>
                <button onClick={toNextQuestion} className="btn btn-success">Next Question</button>{" "}
                <button onClick={toOtherRoom} className="btn btn-action">To other room</button>{" "}
                <button onClick={savePoints} className="btn btn-danger">Save Your Points</button>
                <Popup text="saving points..." show={showPopup} setShow={setShowPopup} />
                <PopupWithoutAnimation text="No more questions. Please try again later..." show={noQuestions} setShow={setNoQuestions} />
            </div>
            {timesUp ? <h3 className="start-button blinking-text">...your 30 seconds are up. Go to next question...</h3> : <h3></h3>}
            <div className="jumbotron top-space">
                <div className="container">
                    <h2 className="text-center thin">{randomQuestion}</h2>

                    <div className="game-play">
                        <div className="up">
                            <button disabled={buttonClicked} className="value" value={shuffledAnswers[0]} onClick={checkForTrueAnswer}>{shuffledAnswers[0]}</button>
                            <button disabled={buttonClicked} className="value" value={shuffledAnswers[1]} onClick={checkForTrueAnswer}>{shuffledAnswers[1]}</button>
                        </div>
                        <div className="down">
                            <button disabled={buttonClicked} className="value" value={shuffledAnswers[2]} onClick={checkForTrueAnswer}>{shuffledAnswers[2]}</button>
                            <button disabled={buttonClicked} className="value" value={shuffledAnswers[3]} onClick={checkForTrueAnswer}>{shuffledAnswers[3]}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePlayUserQuestions;