import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import Content from '../Content';
const Header = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    console.log(props.spotifyToken)
    const handleSearch = () => {
        console.log('Inside the function', props.spotifyToken)
        if (!props.spotifyToken) {
            console.log('no token friend')
            props.fetchToken();
        }
        let token = props.spotifyToken
        let query = { params: { searchQuery, token } }
        axios.get(
            `${process.env.REACT_APP_SERVER_URL}/songs`,
            query)
            .then(response => {
                props.setContent(response.data.song);
                console.log('🐸', response.data.song);
            }).catch(err => console.log(`💩 oh pooh, there's a search error:\n`, err))
    }
    // let style = {
    //     borderBottom: ' 3px solid black',
    //     color: 'black',
    //     margin: 0,
    //     padding: '1em 0'
    // }
    let conditionalLinks = props.currentUser ?
        <nav>
            <Link className="nav-link" to='/'>Home</Link>{' | '}
            <Link className="nav-link" to='/playlists'>Playlists</Link>{' | '}
            <span className="search-container">
                <input type="text" className="input-bar" onChange={e => setSearchQuery(e.target.value)} placeholder="search for music" />
                <Link className="search-btn" onClick={handleSearch} to='/searchresults'>Search</Link>
            </span>{' | '}
            <span className="nav-link" onClick={e => props.handleAuth(null)}> Logout</span>
        </nav> :
        <nav>
            <Link className="nav-link" to='/'>Home</Link>{' | '}
            <Link className="nav-link" to='/auth'>Login or Signup to Search for Music!</Link>
        </nav>
    return (
        <header className="header">
            <h2 className="site-title">Find Your Song</h2>
            <div className="nav-link-bar">
                {conditionalLinks}
            </div>
        </header>
    );
}
export default Header