import React from 'react';

const Question = ({ questionNumber, question }) => {
    return (
        <div className='question'>
            <h4>Pregunta {questionNumber}/10</h4>
            <h3>{question.question}</h3>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUxOZ-Lmk9En0MtjXrS4Ba67WiR2aHH6BTw&s"  /*question.graph*/} alt="grafico de una funcion" />
        </div>
    );
};

export default Question;
