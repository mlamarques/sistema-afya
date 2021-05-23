import React from 'react';
import NavBar from '../../../components/NavBar';
import Footer from '../../../components/Footer';

const Dash: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1>Voce esta autenticado!</h1>
      </div>
      <Footer />
    </>
  );
}

export default Dash;