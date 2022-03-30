import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UseStateValue } from '../../Context/StateProvider';
import { auth } from '../../firebase';
import './LoginPage.css';


//---------------------FN COMPO-----------------------------
export default function LoginPage() {

  const navigate = useNavigate();

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  
  
  
  //signIn
  const signInUser = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(emailInput, passwordInput)
    .then(() => {
      navigate('/');
    })
    .catch((err) => alert(err.message));
  }

 
  //create user acc
  const createUserAccount = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(emailInput, passwordInput)
    .then(() => {
      navigate('/');
    })
    .catch((err) => err.message);
  }




  //-------------------------------RETURN---------------------------------
  return (
    <div className='LoginPage'>
      <Link to="/">
        <img
            className='LoginPage__logo' 
            // src="https://upload.wikimedia.org/wikipedia/donate/f/fd/Amazon-logo-white.svg" //wh 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" //bl
            alt="logo" 
        />
      </Link>

      <form className='LoginPage__signInForm'>
        <h5>E-mail</h5>
        <input type="text" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
        <h5>Password</h5>
        <input type="text" value={passwordInput} onChange={(e) => setPasswordInput(e.target.value) } />
        <button type='submit' onClick={signInUser} className='LoginPage__signInBtn'>Sign In</button>
        <p>If you don't have an account, create first!</p>
        <button onClick={createUserAccount} className='LoginPage__createBtn'>Create account</button>
      </form>

    </div>
  )
}
