import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import FormResetPassword from '../components/FormResetPassword';
import Link from '../components/ui/Link';
import Logo from '../components/ui/Logo';
import FormContainer from '../components/layouts/FormContainer';

import LogoImage from '../images/logo.png';

import { getUserService, patchTokenService } from '../services/api/auth.service';

const ResetPasswordPage = () => {


  const navigate = useNavigate();

  const [message,setMessage] = useState('');

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if(auth){
      redirect('/');
    }

  },[]);

  const redirect = (path) => {
    navigate(path)
  }

  const resetPassword = (data, password) => {

    const userObj = {
      "password" : `${password}`,
      "token" : ''
    }

    patchTokenService(data, userObj);
    redirect("/login")
  }  

  const onResetPassword = async (formToSend) => {
    setMessage('');
		const data = await getUserService('token', formToSend.token);
    if(data.length > 0) {
      const bcrypt = require('bcryptjs');
      const hash = bcrypt.hashSync(formToSend.password, 6);
      resetPassword(data[0].id, hash);
    } else {
      setMessage('Nessun utente corrisponde a questa email');
    }
  }

  return (
    <div className="LoginPage">
      <FormContainer>
        <Logo src={LogoImage}/>
        <h2 className='text-center font-bold mb-3'>Inserisci il tuo token</h2>
        <p className='text-center text-xs mb-3'>Inserisci il tuo indirizzo e-mail, il numero di telefono o il nome utente e ti invieremo un link per accedere di nuovo al tuo account.</p>
        <FormResetPassword
          onResetPassword={(f) => onResetPassword(f)}
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

export default ResetPasswordPage;