import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Final = () => {
    const { score } = useParams();

    return (
        <div className='final-container'>
            <div className='score-container'>
                <h2>Puntuacion: {score} / 10</h2>
                <div>
                    <Link to='/game'>
                        <button className='button'>Jugar de nuevo</button>
                    </Link>
                    <Link to='/'>
                        <button className='button'>Volver al inicio</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Final;
