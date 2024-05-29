import { Link } from "react-router-dom";

const Final = () => {
    return <>
        <div>
            <h2>Puntuacion:</h2>
            <div>
                <Link to='/game'>
                    <button>Jugar de nuevo</button>
                </Link>
                <Link to='/'>
                    <button>Volver al inicio</button>
                </Link>
            </div>
        </div>
    </>
}

export default Final;