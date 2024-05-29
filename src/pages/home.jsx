import { Link } from "react-router-dom";

const Home = () => {
    return <>
        <div className="home-container">
            <div>
                <h1>Funciones Graficas Quiz</h1>
                <Link to={'/game'}>
                    <button className="button">Comenzar</button>
                </Link>
            </div>
        </div>
    </>
}

export default Home;