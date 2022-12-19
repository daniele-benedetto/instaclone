import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import FormLostPassword from '../components/FormLostPassword';

import Link from '../components/ui/Link';
import Logo from '../components/ui/Logo';

import FormContainer from '../components/layouts/FormContainer';

import LogoImage from '../images/logo.png';

const LoginPage = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if(auth){
      redirect();
    }

  },[]);

  const redirect = () => {
    navigate("/")
  }

  const handleLostPassword = (formToSend) => {
    //Recupera l'id dalla email
    //https://buglessir.medium.com/update-an-user-in-json-server-auth-a3d2d07d3234
    //Genera un codice univuoco da legare all'utente (primo update dell'utente)
    //Invia per mail link esempio localhost:3000/change-password/asdf1234
    //Il codice univoco deve permettere l'invio di un form per il cambio password (secondo update e login)
    console.log('form inviato')
  }

  return (
    <div className="LoginPage">
      <FormContainer>
        <Logo src={LogoImage}/>
        <h2 className='text-center font-bold mb-3'>Problemi di accesso?</h2>
        <p className='text-center text-xs mb-3'>Inserisci il tuo indirizzo e-mail, il numero di telefono o il nome utente e ti invieremo un link per accedere di nuovo al tuo account.</p>
        <FormLostPassword
          onLostPassword={(f) => handleLostPassword(f)}
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