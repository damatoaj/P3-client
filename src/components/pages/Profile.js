import axios from 'axios';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PlaylistCard from '../partials/PlaylistCard';


const Profile = (props) => {
  const [playlist, setPlaylist] = useState([])
  let playlistList;
  let title = props.title;

  const [message, setMessage] = useState('Loading msg...');

  const createPlaylist = (e) => {
    e.preventDefault();
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/playlist`,
      { title }
    ).then(response => {
      console.log(response.data)
    }).catch(err => console.log(`CREATE PLAYLIST ERROR 🤬`, err));
    
    axios.get(`${process.env.REACT_APP_SERVER_URL}/playlist`)
      .then(res => {
          console.log(res.data, '🥶')
          setPlaylist(res.data)
      }).catch(err => (console.log(`ERROR GETTING ALL PLAYLISTS 🤬`, err)));
  };


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/private`)
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(err => {
        console.log('🐻 Bad news bears, there is an error:\n', err);
        props.handleAuth(null);
      })
  }, []);

    // useEffect(() => {
    //   axios.get(`${process.env.REACT_APP_SERVER_URL}/playlist`)
    //   .then(res => {
    //       setPlaylist(res.data)
    //   }).catch(err => (console.log(`ERROR GETTING ALL PLAYLISTS 🤬`, err)));
    // })

  // //useEffect for on load
  const getPlaylist = (e) => {
    e.preventDefault();
    axios.get(`${process.env.REACT_APP_SERVER_URL}/playlist/:id`)
    .then(response => {
        console.log(response.data)
    }).catch(err => console.log(`ERROR GETTING PLAYLIST 😡`, err))
  };


  const deletePlaylist = (e) => {
    e.preventDefault();
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/playlist/:id`)
      .then(response => {
        console.log(response.status)
      }).catch(err => console.log(`ERROR DELETING PLAYLIST 😤`, err))
  }
  console.log(playlist.length, '😤')
  console.log(playlist.playlists.length, 'fuck you')


  if (playlist.playlists.length > 0) {
    playlistList = playlist.playlists.map((pl, i) => ( 
        <li className="playlist-card">
            This is the playlist card.
            <h4 key={i}>{pl.title}</h4>
            <button onClick={(e) => deletePlaylist}>Delete Playlist</button>
        </li>
    ))
} 

  if (!props.currentUser) return <Redirect to='/auth' />
  return (
    <div className="container">
      <h1>Welcome to your Playlists</h1>
      <h4>Select one of your playlists to look through your songs.</h4>
      <form onSubmit={createPlaylist}>
        <div className="form-elem">
          <label htmlFor="title">Playlist Title</label>
          <input type="text" name="title" placeholder="Title of your Playlist" onChange={e => props.setTitle(e.target.value)} />
          <input type="submit" value="Create Playlist" />
        </div>
      </form>
      {/* <div className="inner-container">

      </div> */}
        <PlaylistCard
          playlistList={playlistList}
        />
    </div>
  );
}

export default Profile;