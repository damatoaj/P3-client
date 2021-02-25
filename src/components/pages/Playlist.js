import axios from 'axios';
import SpotifyPlayer from 'react-spotify-player';
import { useEffect,  useState } from 'react';


//useEffect
const getPlaylists = (e) => {
    e.preventDefault();

    axios.get(`${process.env.REACT_APP_SERVER_URL}/playlist`)
    .then(res => {
        console.log(res.data)
    }).catch(err => (console.log(`ERROR GETTING ALL PLAYLISTS 🤬`, err)));
};

const createPlaylist = (e) => {
    e.preventDefault();

    axios.post(
        `${process.env.REACT_APP_SERVER_URL}/playlist`,
        { title }
        ).then(response => {
            console.log(response.data)
        }).catch(err => console.log(`CREATE PLAYLIST ERROR 🤬`, err));
};

//useEffect for on load
const getPlaylist = (e) => {
    e.preventDefault();

    axios.get(`${process.env.REACT_APP_SERVER_URL}/playlist/:id`)
    .then(response => {
        console.log(response.data)
    }).catch(err => console.log(`ERROR GETTING PLAYLIST 😡`, err))
};

const updatePlaylist = (e) => {
    e.preventDefault();

    axios.put(`${process.env.REACT_APP_SERVER_URL}/playlist/:id`, { title, songs })
    .then(response => {
        console.log(response.data)
    }).catch(err => { console.log(`ERROR UPDATING PLAYLIST`, err)})
};

const deletePlaylist = (e) => {
    e.preventDefault();

    axios.delete(`${process.env.REACT_APP_SERVER_URL}/playlist/:id`)
    .then(response => {
        console.log(response.status)
    }).catch(err => console.log(`ERROR DELETING PLAYLIST 😤`, err))
}


const Playlist = (props) => {

    

    // size may also be a plain string using the presets 'large' or 'compact'
    const size = {
        width: '100%',
        height: 300,
    };
    const view = 'list'; // or 'coverart'
    const theme = 'black'; // or 'white'


    return (
        <div>
            <h3>Playlist</h3>
            <ul className="playlist-list">
                <li className="playlist-container">
                    <SpotifyPlayer
                        uri="spotify:track:3jjBPF4NDMCU51psU8JPpR" 
                        size={size}
                        view={view}
                        theme={theme}
                    />
                </li>
            </ul>
        </div>
    );
}

export default Playlist;