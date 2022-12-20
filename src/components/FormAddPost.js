import React, { useState } from 'react';

import Button from './ui/Button';
import TextArea from './ui/TextArea';

const FormAddPost = ({onAddPost,error}) => {

  const [form, setForm] = useState({
    caption: '',
    time: new Date(),
    userId: '',
  });

  const [formError, setFormError] = useState({
    caption: false
  });

  const handleValidForm = () => {

    let captionValid = true;
    let formValid = true;



    if(form.caption === ""){
      formValid = false;
      captionValid = false;
    }

    setFormError({
        ...formError,
        camption: !captionValid,
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
      <TextArea
        type='text'
        placeholder="Scrivi una didascalia"
        id="caption"
        value={form.caption}
        onChange={(event) => {
          const val = event.target.value;
          setForm({ ...form, caption: val });
        }}
        error={formError.title}
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

export default FormAddPost;
