import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Home from './Home.js';
import About from './About.js';
import Counseling from './Counseling.js';
import Yoga from './Yoga.js';
import FAQ from './FAQ.js';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/counseling" component={Counseling} />
          <Route path="/yoga" component={Yoga} />
          <Route path="/faq" component={FAQ} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;