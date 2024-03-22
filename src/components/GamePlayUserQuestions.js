import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { useNavigate } from "react-router-dom";

import * as roomService from "../services/roomService";

import { useState, useEffect } from "react";

const GamePlayUserQuestions = () => {

    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    const category = localStorage.getItem("category");

    const [questions, setQuestions] = useState([]);
    const [randomQuestion, setRandomQuestion] = useState([]);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [seconds, setSeconds] = useState(3);
    const [green, setGreen] = useState('');
    const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [timer, setTimer] = useState(null);
    const [timesUp, setTimesUp] = useState(false);

    let question = randomQuestion.question;

    const removeButtonClassNames = () => {
        const buttons = document.querySelectorAll('.value');
        buttons.forEach(button => {
            button.classList.remove("true-answer");
            button.classList.remove("wrong-answer");
        });
    };

    useEffect(() => {
        roomService.getAllQuestionsByCategory(user.token, category)
            .then((data) => {
                setQuestions(data)
            })
    }, []);

    useEffect(() => {
        if (questions.length > 0) {
            chooseNextQuestion();
        }
    }, [questions]);

    const chooseNextQuestion = () => {

        removeButtonClassNames();

        const index = Math.floor(Math.random() * questions.length);
        setRandomQuestion(questions[index]);

        const trueAnswer = randomQuestion ? randomQuestion.trueAnswer : "";
        setGreen(trueAnswer);
        const wrongAnswerOne = randomQuestion ? randomQuestion.wrongAnswerOne : "";
        const wrongAnswerTwo = randomQuestion ? randomQuestion.wrongAnswerTwo : "";
        const wrongAnswerThree = randomQuestion ? randomQuestion.wrongAnswerThree : "";
        const answers = [trueAnswer, wrongAnswerOne, wrongAnswerTwo, wrongAnswerThree];

        setTimesUp(false);
        setShuffledAnswers(answers.sort(() => Math.random() - 0.5));
        setButtonClicked(false);
        setSeconds(3);

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

    const checkForTrueAnswer = (event) => {

        const buttonValue = event.target.value;

        if (buttonValue === green) {
            event.target.classList.add("true-answer");
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


    return (

        <div>
            <header id="head" className="secondary"></header>
            <div className="container">
                <ol className="breadcrumb">
                    <li>User Questions Room</li>
                    <li className="active">{user.email}</li>
                    <li className="active">0 pts.</li>
                </ol>
                <h4>Time: {" "}{seconds}</h4>
                <button onClick={toNextQuestion} className="btn-action">New Question</button>{" "}
                <button onClick={toOtherRoom} className="btn-default">To other room</button>
            </div>
            {timesUp ? <h3 className="start-button blinking-text">...your 30 seconds are up. Go to next question...</h3> : <h3></h3>}
            <div className="jumbotron top-space">
                <div className="container">
                    <h2 className="text-center thin">{question}</h2>

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