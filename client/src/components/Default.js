import React from 'react';
import bug from '../img/bug.png';

const Default = () => {
  return (
    <section>
      <div id='bug'>
        <img src={bug} />
      </div>
      <div className='container'>
        <h1 className='my-3 x-large text-primary'>404</h1>
        <h1 className='large'>Page not found</h1>
        <p className=''>
          We're sorry, the page you requested could not be found.
        </p>
      </div>
    </section>
  );
};

export default Default;
