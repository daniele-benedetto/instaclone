import React, { useState } from 'react';

import Button from './ui/Button';
import TextArea from './ui/TextArea';

const FormAddComment = ({onAddComment,id}) => {

  const [form, setForm] = useState({
    comment: '',
    time: new Date(),
    postId: parseInt(id),
  });

  const [formError, setFormError] = useState({
    comment: false
  });

  const handleValidForm = () => {

    let commentValid = true;
    let formValid = true;

    if(form.comment === ""){
      formValid = false;
      commentValid = false;
    }

    setFormError({
        ...formError,
        comment: !commentValid,
    });

    return formValid;
  };

  const handleComment = () => {
    if(handleValidForm()){
      setForm({...form, comment: ''});
      onAddComment(form);
    }
  }

  return (
    <form className='w-full flex flex-col'>
      <TextArea
        type='text'
        placeholder="Commenta"
        id="comment"
        value={form.comment}
        onChange={(event) => {
          const val = event.target.value;
          setForm({ ...form, comment: val });
        }}
        error={formError.comment}
      />
      <Button
        title="Posta"
        styleBtn="primary"
        onClick={handleComment}
      />
    </form>
  );
}

export default FormAddComment;