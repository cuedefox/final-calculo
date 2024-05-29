import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Final = () => {
    const { score } = useParams();

    return (
        <div>
            <h2>Puntuacion: {score} / 10</h2>
            <div>
                <Link to='/game'>
                    <button>Jugar de nuevo</button>
                </Link>
                <Link to='/'>
                    <button>Volver al inicio</button>
                </Link>
            </div>
        </div>
    );
};

export default Final;
