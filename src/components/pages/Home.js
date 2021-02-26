import Intro from "./Intro";
import Team from "./Team";



const Home = (props) => {
    return (
        <div className="container">
            <h1>Home page</h1>
            <Intro />
            <div className="team">
            <h1 className="dev-team">The Development Team</h1>
                <Team />
            </div>
        </div>
    );
}

export default Home