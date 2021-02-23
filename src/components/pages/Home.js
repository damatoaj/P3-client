import Intro from "./Intro";
import Team from "./Team";



const Home = (props) => {
    return (
        <div className="container">
            <h1>Home page</h1>
            <Intro />
            <div className="team">
                <Team />
            </div>
        </div>
    );
}

export default Home