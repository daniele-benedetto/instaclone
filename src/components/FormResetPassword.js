import React, { useState } from 'react';

import Button from './ui/Button';
import Input from './ui/Input';

const FormResetPassword = ({onResetPassword,error,message}) => {

  const [form, setForm] = useState({
    token: '',
    password: '',
  });

  const [formError, setFormError] = useState({
    token: false,
    password: false,
  });

  const handleValidForm = () => {

    let formValid = true;
    let tokenValid = true;
    let passwordValid = true;

    if(form.token === ""){
        formValid = false;
        tokenValid = false;
    }

    if(form.password === ""){
      formValid = false;
      passwordValid = false;
  }

    setFormError({
        ...formError,
        token: !tokenValid,
        password: !passwordValid,
    });

    return formValid;
  };

  const handleResetPassword = () => {
    if(handleValidForm()){
      onResetPassword(form);
    }
  }

  return (
    <form className='w-full flex flex-col'>
      <Input
        type='text'
        placeholder="Token"
        id="token"
        value={form.token}
        onChange={(event) => {
          const val = event.target.value;
          setForm({ ...form, token: val });
        }}
        error={formError.token}
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
        onClick={handleResetPassword}
      />
      {error && <div>{error}</div>}
      {message && <div>{message}</div>}
    </form>
  );
}

export default FormResetPassword;