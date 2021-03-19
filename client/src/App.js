import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import './App.css';

// Components
import Header from './components/Header.jsx';
import SignIn from './components/SignIn.jsx';
import Dashboard from './components/Dashboard.jsx';
import Footer from './components/Footer.jsx';

function App() {

  const auth = useSelector((state) => state.auth)
  const loggedIn = auth.loggedIn;
  return (
    <Fragment>
      <Header/>
      { loggedIn ? <Dashboard/>
        : <SignIn/>
      }
      
      <Footer/>
    </Fragment>
  )
}

export default App;
