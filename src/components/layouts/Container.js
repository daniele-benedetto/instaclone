import React from 'react';

const Container = ({children}) => {
  return (
    <section className="w-full d-flex flex-col align-center mb-20 mt-20 border max-w-md mx-auto bg-white p-5">
      {children}
    </section>
  );
}

export default Container;