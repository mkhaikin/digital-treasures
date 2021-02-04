import React, {Fragment} from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <Dashboard />
      <Footer />
    </Fragment>
  );
}

export default App;
