import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './Assets/css/default.min.css'
import Header from './components/headerComponent/header'
import Footer from './components/footerComponent/footer'
import HomePage from './components/pages/homePage'
import About from './components/pages/about'
import Contact from './components/pages/contact'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact}/>
      <Footer />
      </div>
      </Router>
  );
}

export default App;
