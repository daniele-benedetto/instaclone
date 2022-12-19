import React from 'react'

const FormContainer = ({children}) => {
  return (
    <section className='max-w-xs mx-auto my-20 p-5 bg-white border'>
      {children}
    </section>
  );
}

export default FormContainer;
