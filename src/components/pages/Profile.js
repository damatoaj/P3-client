import axios from 'axios';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PlaylistCard from '../partials/PlaylistCard';


const Profile = (props) => {

  let title = props.title

  const [message, setMessage] = useState('Loading msg...');

  const createPlaylist = (e) => {
    e.preventDefault();
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/playlist`,
      { title }
    ).then(response => {
      console.log(response.data)
    }).catch(err => console.log(`CREATE PLAYLIST ERROR 🤬`, err));
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


  //   //useEffect
  // const getPlaylists = (e) => {
  //   e.preventDefault();
  //   axios.get(`${process.env.REACT_APP_SERVER_URL}/playlist`)
  //   .then(res => {
  //       console.log(res.data)
  //   }).catch(err => (console.log(`ERROR GETTING ALL PLAYLISTS 🤬`, err)));
  // };
  // const createPlaylist = (e) => {
  //   e.preventDefault();
  //   axios.post(
  //     `${process.env.REACT_APP_SERVER_URL}/playlist`,
  //     { title }
  //   ).then(response => {
  //     console.log(response.data)
  //   }).catch(err => console.log(`CREATE PLAYLIST ERROR 🤬`, err));
  // };
  // //useEffect for on load
  // const getPlaylist = (e) => {
  //   e.preventDefault();
  //   axios.get(`${process.env.REACT_APP_SERVER_URL}/playlist/:id`)
  //   .then(response => {
  //       console.log(response.data)
  //   }).catch(err => console.log(`ERROR GETTING PLAYLIST 😡`, err))
  // };


  const deletePlaylist = (e) => {
    e.preventDefault();
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/playlist/:id`)
      .then(response => {
        console.log(response.status)
      }).catch(err => console.log(`ERROR DELETING PLAYLIST 😤`, err))
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
      <div className="inner-container">
        <PlaylistCard
          deletePlaylist={deletePlaylist} />
      </div>
    </div>
  );
}

export default Profile;