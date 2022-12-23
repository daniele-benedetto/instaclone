import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { postRegisterService } from '../services/api/auth.service';

import FormRegistration from '../components/FormRegistration';

import Logo from '../components/ui/Logo';
import Link from '../components/ui/Link';

import FormContainer from '../components/layouts/FormContainer';

import LogoImage from '../images/logo.png';

const RegisterPage = () => {

  const navigate = useNavigate();

  const [error,setError] = useState(null);

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if(auth){
      redirect();
    }

  },[]);

  const saveData = (auth, id) => {
    localStorage.setItem("auth",auth);
    localStorage.setItem("id", id);
  }

  const redirect = () => {
    navigate("/")
  }

  const getError = (message) => {

    switch(message) {

      case 'Email already exists': {
        setError('Email già in uso');
        break;
      }

      default: {
        setError(message);
      }
    }
  }

  const handleRegister = (formToSend) => {
    postRegisterService(
        formToSend
    ).then((data)=> {
        const accessToken = data.accessToken;
        const userId = data.user.id;
        console.log(data)
        saveData(accessToken, userId);
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
        <h2 className='font-bold text-center mb-5'>Iscriviti per vedere le foto e i video dei tuoi amici.</h2>
        <FormRegistration
          onRegister={(f) => handleRegister(f)}
          error={error}
        />
        <Link href='/login' title="Hai già un account?" />
      </FormContainer>
    </div>
  );
}

export default RegisterPage;