import React, { useState } from 'react';

import Button from './ui/Button';
import Input from './ui/Input';

const FormPost = ({onAddPost,error}) => {

  const [form, setForm] = useState({
    title: '',
    content: '',
    position: '',
    image: '',
    time: new Date(),
    userId: '',
  });

  const [formError, setFormError] = useState({
    title: false,
    content: false,
    image: false,
  });

  const handleValidForm = () => {

    let titleValid = true;
    let contentValid = true;
    let imageValid = true;
    let formValid = true;

    if(form.title === ""){
        formValid = false;
        titleValid = false;
    }

    if(form.content === ""){
      formValid = false;
      contentValid = false;
    }

    if(form.image === ""){
      formValid = false;
      imageValid = false;
    }

    setFormError({
        ...formError,
        content: !contentValid,
        title: !titleValid,
        image: !imageValid,
    });

    return formValid;
  };

  const handlePost = () => {
    if(handleValidForm()){
      onAddPost(form)
    }
  }

  return (
    <form className='w-full flex flex-col'>
      <Input
        type='text'
        placeholder="Titolo"
        id="title"
        value={form.title}
        onChange={(event) => {
          const val = event.target.value;
          setForm({ ...form, title: val });
        }}
        error={formError.title}
      />
      <Input
        type='text'
        placeholder="Contenuto del post"
        id="content"
        value={form.content}
        onChange={(event) => {
          const val = event.target.value;
          setForm({ ...form, content: val });
        }}
        error={formError.content}
      />
      <Input
        type='text'
        placeholder="Aggiungi immagine"
        id="image"
        value={form.image}
        onChange={(event) => {
          const val = event.target.value;
          setForm({ ...form, image: val });
        }}
        error={formError.image}
      />
      <Button
        title="Accedi"
        styleBtn="primary"
        onClick={handlePost}
      />

      {error && <div>{error}</div>}
    </form>
  );
}

export default FormPost;
