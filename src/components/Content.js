import { Route, Redirect } from 'react-router-dom';
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
  

  return (
    <main>
      <Route exact path='/' component={Home} />
      <Route path='/auth' render={(renderProps) => (
        <Auth handleAuth={props.handleAuth} {...renderProps} />
      )} />
      <Route path='/searchresults'
        render={(renderProps) => (
          <SearchResults {...renderProps} content={props.content}/>
        )}

      />
      <PrivateRoute
        path='/playlists'
        component={Profile}
        currentUser={props.currentUser}
        handleAuth={props.handleAuth}
      />
    </main>
  );
}

export default Content;