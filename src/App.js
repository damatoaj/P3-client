import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Content from './components/Content';
import Header from './components/partials/Header';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [content, setContent] = useState([]);
  const [spotifyToken, setSpotifyToken] = useState('');

  const fetchToken = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/songs/token`)
    .then(response => {
      console.log(response.data)
      setSpotifyToken(response.data)
    })    
  }
  const handleAuth = user => {
    console.log('Handling Authentication...');
    if (user) {
      // Sick add use stuff
      setCurrentUser(user);
      console.log(currentUser)
      setIsAuthenticated(true);
      console.log(isAuthenticated)
      fetchToken();
    } else {
      // Clear it all out
      setCurrentUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('jwtToken');
    }
  }
  return (
    <div className="App">
      {/* TODO Remove div, add styling more intentionally */}
      <Header 
        currentUser={currentUser} 
        fetchToken={fetchToken}
        handleAuth={handleAuth}
        spotifyToken={spotifyToken}
        setSpotifyToken={setSpotifyToken}
        setContent={setContent}
      />
      <Content 
        currentUser={currentUser}
        isAuthenticated={isAuthenticated}
        handleAuth={handleAuth}
        content={content}
      />
    </div>
  );
}
export default App;
