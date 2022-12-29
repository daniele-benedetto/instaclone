import React, { useState } from 'react';

import Button from './ui/Button';
import TextArea from './ui/TextArea';
import Position from './ui/Position';
import { File } from './ui/Files/File';

const FormAddPost = ({onAddPost,error}) => {

  const [form, setForm] = useState({
    caption: '',
    position: '',
    image: '',
    time: new Date(),
  });

  const [formError, setFormError] = useState({
    caption: false
  });

  const handleValidForm = () => {

    let captionValid = true;
    let imageValid = true;
    let formValid = true;

    if(form.caption === ""){
      formValid = false;
      captionValid = false;
    }

    if(form.image === ""){
      formValid = false;
      imageValid = false;
    }

    setFormError({
        ...formError,
        caption: !captionValid,
    });

    return formValid;
  };

  const handlePost = () => {
    if(handleValidForm()){
      onAddPost(form);
    }
  }

  return (
    <form className='w-full flex flex-col'>
      <TextArea
        type='text'
        placeholder="Scrivi una didascalia"
        id="caption"
        value={form.caption}
        onChange={(event) => {
          const val = event.target.value;
          setForm({ ...form, caption: val });
        }}
        error={formError.caption}
      />
      <Position setForm={setForm} form={form} />
      <File
        id="image"
        onAddFile={(image) => {
          setForm({ ...form, image: image[0] });
        }}
      />
      <Button
        title="Posta"
        styleBtn="primary"
        onClick={handlePost}
      />
      {error && <div>{error}</div>}
    </form>
  );
}

export default FormAddPost;
