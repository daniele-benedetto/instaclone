import React, { useState } from 'react';

import Button from './ui/Button';
import Input from './ui/Input';

const FormLostPassword = ({onLostPassword,error}) => {

  const [form, setForm] = useState({
    email: '',
  });

  const [formError, setFormError] = useState({
    email: false,
  });

  const handleValidForm = () => {

    let formValid = true;
    let emailValid = true;

    if(form.email === ""){
        formValid = false;
        emailValid = false;
    }

    setFormError({
        ...formError,
        email: !emailValid,
    });

    return formValid;
  };

  const handleLostPassword = () => {
    if(handleValidForm()){
      onLostPassword(form)
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
      <Button
        title="Accedi"
        styleBtn="primary"
        onClick={handleLostPassword}
      />

      {error && <div>{error}</div>}
    </form>
  );
}

export default FormLostPassword;