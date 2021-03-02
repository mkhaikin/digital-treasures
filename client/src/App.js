import React, {Fragment} from 'react';
import './App.css';

// Components
import Header from './components/Header.jsx';
import Dashboard from './components/Dashboard.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <Fragment>
      <Header/>
      <Dashboard/>
      <Footer/>
    </Fragment>
  )
}

export default App;
