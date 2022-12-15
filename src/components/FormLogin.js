import React, { useState } from 'react';

import Button from './ui/Button';
import Input from './ui/Input';

const FormLogin = ({onLogin,error}) => {

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [formError, setFormError] = useState({
    email: false,
    password: false,
  });

  const handleValidForm = () => {

    let formValid = true;
    let emailValid = true;
    let passwordValid = true;

    if(form.email === ""){
        formValid = false;
        emailValid = false;
    }
    if(form.password === ""){
        formValid = false;
        passwordValid = false;
    }

    setFormError({
        ...formError,
        email: !emailValid,
        password: !passwordValid
    });

    return formValid;
  };

  const handleLogin = () => {
    if(handleValidForm()){
      onLogin(form)
    }
  }

  return (
    <form className='w-full flex flex-col'>
      <Input
        type='text'
        placeholder="Email"
        id="email"
        value={form.email}
        onChange={(event) => {
          const val = event.target.value;
          setForm({ ...form, email: val });
        }}
        error={formError.email}
      />
      <Input 
        type='password'
        placeholder="Password"
        id="password"
        value={form.password}
        onChange={(event) => {
          const val = event.target.value;
          setForm({ ...form, password: val });
        }}
        error={formError.password}
      />
      <Button
        title="Accedi"
        styleBtn="primary"
        onClick={handleLogin}
      />

      {error && <div>{error}</div>}
    </form>
  );
}

export default FormLogin;
