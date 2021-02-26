import { Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import SearchResults from './pages/SearchResults';


const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('jwtToken');
  return <Route {...rest} render={(renderProps) => (
    token ?
      <Component {...rest} {...renderProps} /> :
      <Redirect to='/auth' />
  )} />
}

const Content = (props) => {
  const [title, setTitle] = useState('');
  const [playlist, setPlaylist] = useState([])

  {console.log('AAAAAAAAAAAAAA',props.content)}
  return (
    <main>
      <Route exact path='/' component={Home} />
      <Route path='/auth' render={(renderProps) => (
        <Auth handleAuth={props.handleAuth} {...renderProps} />
      )} />
      <Route path='/searchresults'
        render={(renderProps) => (
          <SearchResults  {...renderProps} content={props.content} playlist={playlist}/>
        )}

      />
      <PrivateRoute
        path='/playlists'
        
        component={Profile}
        playlist={playlist}
        setPlaylist={setPlaylist}
        currentUser={props.currentUser}
        handleAuth={props.handleAuth}
        setTitle={setTitle}
        title={title}
      />
    </main>
  );
}

export default Content;