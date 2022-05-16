import { useState } from 'react';
import axios from 'axios';

function App() {
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const register = () => {
    axios({
      method: 'POST',
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: 'http://localhost:5000/register',
    }).then((response) => console.log(response));
  };
  const login = () => {
    axios({
      method: 'POST',
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: 'http://localhost:5000/login',
    }).then((response) => console.log(response));
  };
  const getUser = () => {
    axios({
      method: 'GET',
      withCredentials: true,
      url: 'http://localhost:5000/user',
    }).then((response) => console.log(response));
  };

  return (
    <div className='App'>
      <section>
        <h3>Register</h3>
        <input
          placeholder='username'
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder='password'
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </section>
      <section>
        <h3>Login</h3>
        <input
          placeholder='username'
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder='password'
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </section>
      <section>
        <h3>Get User</h3>
        <button onClick={getUser}>Submit</button>
      </section>
    </div>
  );
}

export default App;
