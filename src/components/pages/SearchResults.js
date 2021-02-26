import SongSearch from '../partials/SongSearch';
import axios from 'axios';
import { useState } from 'react';


const SearchResults = (props) => {
    const [playlist, setPlaylist] = useState('')
    let songList;

    const addSongPL = (song, playlist) => {
        console.log(song)
        axios.post(
          `${process.env.REACT_APP_SERVER_URL}/songs`,
          { playlist:playlist, name:song.name, uri:song.uri, spotify_id:song.id}
        ).then(response => {
          console.log(response.data)
        }).catch(err => console.log(`UPDATE PLAYLIST ERROR 🤬`, err));
      };
  

    if (props.content.length > 0) {
        songList = props.content.map((song, i) => (
            <li className="song-card">
                <form>
                    <select onChange={e => setPlaylist(e.target.value)}>
                    {props.playlist.playlists.map((p, i) => {
                        // console.log(p._id)
                        return <option key={i} value={p._id}>{p.title}</option>
                    })};
                    </select>
                </form>
                <h4 key={i}>{song.name}</h4>
                <button type="submit" onClick={() => addSongPL(song, playlist)}>Add to your playlist</button >
            </li>
        ))
    } else {
        <h1>Loading</h1>
    }

    return (
        <div className="container">
            {/* <h1>THIS IS WHERE YOUR SEARCH RESULTS WILL BE</h1> */}
            <div className="inner-container">
                <h1>THIS IS WHAT WE COULD FIND</h1>
                {/* <li className="song-card">This is the song card.</li> */}
                {/* <PlaylistCard songList={songList} /> */}
                <SongSearch songList={songList} />
            </div>
            {/* <SongSearch songList={songList} /> */}
        </div>
    );
}

export default SearchResults;