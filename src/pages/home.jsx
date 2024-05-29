import { Link } from "react-router-dom";

const Home = () => {
    return <>
        <div>
            <h1>Funciones Graficas Quiz</h1>
            <Link to={'/game'}>
                <button>Comenzar</button>
            </Link>
        </div>
    </>
}

export default Home;