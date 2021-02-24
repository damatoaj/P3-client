import { Link } from 'react-router-dom'
import { useState } from 'react';

import axios from 'axios';
import Content from '../Content';

const Header = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [spotifyToken, setSpotifyToken] = useState('')

    const handleSearch = () => {
        
        axios.get(
            `${process.env.REACT_APP_SERVER_URL}/songs`,
            ({ params: searchQuery}))
            .then(response => {
                console.log('🐸', response);
                
                props.setContent(response);
            }).catch(err => console.log(`💩 oh pooh, there’s a search error:\n`, err))
    }
    

    let style = {
        backgroundColor: 'gray',
        borderBottom: ' 3px solid black',
        color: 'red',
        margin: 0,
        padding: '1em 0'
    }


    let conditionalLinks = props.currentUser ?
        <nav>
            <Link className="nav-link" to='/'>Home</Link>{' | '}
            <Link className="nav-link" to='/playlists'>Playlists</Link>{' | '}
            <span className="search-container">
                <input type="text" onChange={e => setSearchQuery(e.target.value)} placeholder="search for music" />
                <Link className="search-btn" onClick={handleSearch} to='/searchresults'>Search</Link>
            </span>{' | '}
            <span className="nav-link" onClick={e => props.handleAuth(null)}> Logout</span>
        </nav> :
        <nav>
            <Link className="nav-link" to='/'>Home</Link>{' | '}
            <Link className="nav-link" to='/auth'>Login or Signup to Search for Music!</Link>
        </nav>

    return (
        <header style={style}>
            <h2> Its a website!</h2>
            {conditionalLinks}
        </header>
    );
}

export default Header