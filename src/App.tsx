import React from 'react'
import Routes from './routes'
import GlobalStyles from './assets/GlobalStyles'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes />
      <GlobalStyles />
      <ToastContainer />
    </div>
  );
}

export default App;
