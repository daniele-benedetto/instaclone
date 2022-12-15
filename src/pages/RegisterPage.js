import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import { postRegisterService } from '../services/api/auth.service';

import FormRegistration from '../components/FormRegistration';

import Logo from '../components/ui/Logo';

import Container from '../components/layouts/Container';

import LogoImage from '../images/logo.png';
import Link from '../components/ui/Link';

const RegisterPage = () => {

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

  const handleRegister = (formToSend) => {
    postRegisterService(
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
        <h2 className='font-bold text-center mb-5'>Iscriviti per vedere le foto e i video dei tuoi amici.</h2>
        <FormRegistration
          onRegister={(f) => handleRegister(f)}
          error={error}
        />
        <Link href='/login' title="Hai già un account?" />
      </Container>
    </div>
  );
}

export default RegisterPage;