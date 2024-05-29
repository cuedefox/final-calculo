import React, { useState, useEffect } from 'react';
import questionsData from '../db/questions.json';
import { useNavigate } from 'react-router-dom';
import Question from '../components/question';

const Game = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setQuestions(shuffleArray(questionsData));
    }, []);

    const shuffleArray = (array) => {
        const shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const verifyAnswer = () => {
        const currentQuestion = questions[currentQuestionIndex];
        const selectedAnswer = currentQuestion.answers.find(answer => answer.text === selectedOption);
        if (selectedAnswer && selectedAnswer.isCorrect) {
            setScore(score + 1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Opción seleccionada:', selectedOption);
        verifyAnswer();
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < 10) {
            setCurrentQuestionIndex(nextQuestionIndex);
            setSelectedOption('');
        } else {
            navigate('/final' + score);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    if (!currentQuestion) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <div className='game-container'>
                <Question question={currentQuestion} questionNumber={currentQuestionIndex + 1} />
                <div className='options'>
                    <form onSubmit={handleSubmit}>
                        {currentQuestion.answers.map((answer, index) => (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name="option"
                                    value={answer.text}
                                    checked={selectedOption === answer.text}
                                    onChange={handleOptionChange}
                                />
                                {answer.text}
                            </label>
                        ))}
                        <br />
                        <input type="submit" value="Subir" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Game;
