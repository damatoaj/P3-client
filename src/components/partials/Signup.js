import { useState } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { Redirect } from 'react-router-dom'

const Signup = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // TODO add form password verification
  const [redirect, setRedirect] = useState(false)

  const handleSubmit = e => {
    e.preventDefault();
    //help
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/api/signup`,
      { name, email, password }
    ).then(response => {
      console.log(response.data);
      // save the token in local storage
      localStorage.setItem('jwtToken', response.data.token);
      // set the token to auth header
      setAuthToken(response.data.token);
      // set user data
      props.handleAuth(response.data.user);
      setRedirect(true);
    }).catch(err => console.log(`⛔️ Rutro:\n`, err));
  }
  if (redirect) return <Redirect to='/playlists' />


  return (
    <section>
      <h2>SIGNUP</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-elem">
          <label htmlFor="name">Name: </label>
          {/* TODO: see if I need an ID for the label to work */}
          <input
            type="text"
            name="name"
            placeholder="Display Name"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="form-elem">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="lovemtns@provider.com"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-elem">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="more long more better"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Signup" />
      </form>
    </section>
  );
}

export default Signup;