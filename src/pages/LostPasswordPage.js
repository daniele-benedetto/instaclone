import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import FormLostPassword from '../components/FormLostPassword';

import Link from '../components/ui/Link';
import Logo from '../components/ui/Logo';

import FormContainer from '../components/layouts/FormContainer';

import LogoImage from '../images/logo.png';

import { getUserService, patchTokenService } from '../services/api/auth.service';

const LoginPage = () => {


  const navigate = useNavigate();

  const [message,setMessage] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if(auth){
      redirect();
    }

  },[]);

  const redirect = (path) => {
    navigate(path)
  }

  const generateTokenData = () => {
    const token = () => {
      return Math.random().toString(36).substr(2);
    };
  
    const generateToken = () => {
      return token() + token(); 
    };

    const tokenData = () => {
      return { "token" : generateToken()}
    }
  
    return tokenData(); 
  };

  const sendEmail = (token) => {
    //IMPLEMENTARE INVIO EMAIL CON TOKEN
    console.log(token);
  }

  const sendResetPassword = (id) => {
    const token = generateTokenData();
    patchTokenService(id, token);
    sendEmail(token);
    redirect('/reset-password')
  }

  const handleLostPassword = async (formToSend) => {
    setMessage('');
		const data = await getUserService('email', formToSend);
    console.log(data);
    if(data.length > 0) {
      sendResetPassword(data[0].id);
    } else {
      setMessage('Nessun utente corrisponde a questa email');
    }
  }

  return (
    <div className="LoginPage">
      <FormContainer>
        <Logo src={LogoImage}/>
        <h2 className='text-center font-bold mb-3'>Problemi di accesso?</h2>
        <p className='text-center text-xs mb-3'>Inserisci il tuo indirizzo e-mail, il numero di telefono o il nome utente e ti invieremo un link per accedere di nuovo al tuo account.</p>
        <FormLostPassword
          onLostPassword={(f) => handleLostPassword(f)}
          message={message}  
        />
      </FormContainer>
      <FormContainer>
        <Link 
          title='Crea un nuovo account'
          href='/register'
          styleLink='default'
        />
        <span className='flex justify-center'>o</span>
        <Link 
          title='Torna alla pagina di accesso'
          href='/login'
          styleLink='default'
        />         
      </FormContainer>
    </div>
  );
}

export default LoginPage;