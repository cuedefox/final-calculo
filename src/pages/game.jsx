import React, { useState } from 'react';
import Question from '../components/question';

const Game = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Opción seleccionada:', selectedOption);
    };

    return (
        <>
            <div className='game-container'>
                <Question />
                <div className='options'>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <input
                                type="radio"
                                name="option"
                                value="opcion1"
                                checked={selectedOption === 'opcion1'}
                                onChange={handleOptionChange}
                            />
                            Opción 1
                        </label>
                        <br />
                        <label>
                            <input
                                type="radio"
                                name="option"
                                value="opcion2"
                                checked={selectedOption === 'opcion2'}
                                onChange={handleOptionChange}
                            />
                            Opción 2
                        </label>
                        <br />
                        <label>
                            <input
                                type="radio"
                                name="option"
                                value="opcion3"
                                checked={selectedOption === 'opcion3'}
                                onChange={handleOptionChange}
                            />
                            Opción 3
                        </label>
                        <br />
                        <label>
                            <input
                                type="radio"
                                name="option"
                                value="opcion4"
                                checked={selectedOption === 'opcion4'}
                                onChange={handleOptionChange}
                            />
                            Opción 4
                        </label>
                        <br />
                        <input type="submit" value="Subir" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Game;
