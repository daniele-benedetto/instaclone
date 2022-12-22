import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { postLoginService } from '../services/api/auth.service';

import FormLogin from '../components/FormLogin';

import Link from '../components/ui/Link';
import Logo from '../components/ui/Logo';

import LogoImage from '../images/logo.png';
import FormContainer from '../components/layouts/FormContainer';

const LoginPage = () => {

  const navigate = useNavigate();

  const [error,setError] = useState(null);

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if(auth){
      redirect();
    }

  },[]);

  const saveData = (data) => {
    localStorage.setItem("auth",data);
  }

  const redirect = () => {
    navigate("/")
  }

  const getError = (message) => {

    switch(message) {

      case 'Cannot find user': {
        setError('Nessun utente trovato');
        break;
      }

      case 'Incorrect password': {
        setError('Password non corretta');
        break;
      }

      default: {
        setError(message);
      }
    }
  }

  const handleLogin = (formToSend) => {
    postLoginService(
        formToSend
    ).then((data)=> {
        const accessToken = data.accessToken;
        saveData(accessToken);
        redirect();
    }).catch((response) => {
        const message = response.data;
        getError(message);
    })
  }

  return (
    <div className="LoginPage">
      <FormContainer>
        <Logo src={LogoImage}/>
        <FormLogin 
          onLogin={(f) => handleLogin(f)}
          error={error}
        />
        <Link 
          title='Password dimenticata?'
          href='/lost-password'
          styleLink='default'
        />
      </FormContainer>
      <FormContainer>
        <Link 
          title='Non hai un account? Iscriviti'
          href='/register'
          styleLink='default'
        />      
      </FormContainer>
    </div>
  );
}

export default LoginPage;

