import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { postLoginService } from '../services/api/auth.service';

import FormLogin from '../components/FormLogin';

import Link from '../components/ui/Link';
import Logo from '../components/ui/Logo';

import Container from '../components/layouts/Container';

import LogoImage from '../images/logo.png';

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

  const handleLogin = (formToSend) => {
    postLoginService(
        formToSend
    ).then((data)=> {
        const accessToken = data.accessToken;
        saveData(accessToken);
        redirect();
    }).catch((response) => {
        const message = response.data;
        setError(message)
    })
  }

  return (
    <div className="LoginPage">
      <Container>
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
      </Container>
      <Container>
        <Link 
          title='Non hai un account? Iscriviti'
          href='/register'
          styleLink='default'
        />      
      </Container>
    </div>
  );
}

export default LoginPage;

