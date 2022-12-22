import React, { useState } from 'react';

import Button from './ui/Button';
import Input from './ui/Input';

const FormRegistration = ({onRegister,error}) => {

  const [form, setForm] = useState({
    email: '',
    fullName: '',
    username: '',
    password: '',
  });

  const [formError, setFormError] = useState({
    email: false,
    fullName: false,
    username: false,
    password: false,
  });

  const handleValidForm = () => {

    let formValid = true;
    let emailValid = true;
    let fullNameValid = true;
    let usernameValid = true;
    let passwordValid = true;

    if(form.email === ""){
        formValid = false;
        emailValid = false;
    }

    if(form.fullName === ""){
      formValid = false;
      fullNameValid = false;
    }

    if(form.username === ""){
      formValid = false;
      usernameValid = false;
    }

    if(form.password === ""){
        formValid = false;
        passwordValid = false;
    }

    setFormError({
        ...formError,
        email: !emailValid,
        fullName: !fullNameValid,
        username: !usernameValid,
        password: !passwordValid
    });

    return formValid;
  };

  const handleRegister = () => {
    if(handleValidForm()){
      onRegister(form)
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
        type='text'
        placeholder="Nome e Cognome"
        id="fullName"
        value={form.fullName}
        onChange={(event) => {
          const val = event.target.value;
          setForm({ ...form, fullName: val });
        }}
        error={formError.fullName}
      />
      <Input
        type='text'
        placeholder="Username"
        id="username"
        value={form.username}
        onChange={(event) => {
          const val = event.target.value;
          setForm({ ...form, username: val });
        }}
        error={formError.username}
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
        onClick={handleRegister}
      />

      {error && <div>{error}</div>}
    </form>
  );
}

export default FormRegistration;
