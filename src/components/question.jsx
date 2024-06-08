import React from 'react';

const Question = ({ questionNumber, question }) => {
    return (
        <div className='question'>
            <h4>Pregunta {questionNumber}/10</h4>
            <h3>{question.question}</h3>
            <img src={question.graph} alt="grafico de una funcion" />
        </div>
    );
};

export default Question;
