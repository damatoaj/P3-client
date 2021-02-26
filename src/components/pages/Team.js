import Arthur from '../../Headshots/arthur.png';
import Austin from '../../Headshots/austin.jpg';
import Edgard from '../../Headshots/edgard.jpeg';
import Hui from '../../Headshots/hui.png';

const Team = (props) => {
    return (
        <div className="team-container">
            <div className="portraits">
                <h2>Arthur</h2><img src={Arthur} />
                <h2>Austin</h2><img src={Austin} />
            </div>
            <div className="portraits">
                <h2>Edgard</h2><img src={Edgard} />
                <h2>Hui</h2><img src={Hui} />
            </div>
        </div>
    );
}

export default Team