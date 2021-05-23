import React from 'react'
import Footer from '../../../components/Footer'
import NavBar from '../../../components/NavBar'
import FormSignIn from '../../../components/FormSignIn'

import { SectionComponent } from './styles'

const Login: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <SectionComponent>
          <h1>Login</h1>
          <FormSignIn />
        </SectionComponent>
      </div>
      
      <Footer />
    </>
  );
}

export default Login;