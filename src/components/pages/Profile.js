import axios from 'axios';
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Playlist from './Playlist'

const Profile = (props) => {
  const [message, setMessage] = useState('Loading msg...');

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

  if (!props.currentUser) return <Redirect to='/auth' />
  return (
    <div className="container">
      <h1>Welcome to your Playlists</h1>
      <h4>Select one of your playlists to look through your songs.</h4>
      <Playlist />
    </div>
  );
}

export default Profile;