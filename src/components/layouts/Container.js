import React from 'react'

const Container = ({children}) => {
  return (
    <section className='max-w-sm mx-auto my-20 p-5 bg-white border'>
      {children}
    </section>
  );
}

export default Container;
