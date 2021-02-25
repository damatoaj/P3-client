import axios from 'axios';
import { useState } from 'react';

const SongSearch = (props) => {

    const [title, setTitle] = useState('');
    const [song, setSong] = useState('');


    // const updatePlaylist = (e) => {
    //     e.preventDefault();
    //     axios.put(`${process.env.REACT_APP_SERVER_URL}/playlist/:id`, {title, song} )
    //         .then(response => {
    //             console.log(response.data)
    //         }).catch(err => { console.log(`ERROR UPDATING PLAYLIST`, err) })
    // };


    return (
            <li>{props.songList}</li>
    );
}

export default SongSearch;