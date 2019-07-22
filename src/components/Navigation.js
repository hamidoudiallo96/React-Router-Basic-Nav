import React from 'react';
import {Link} from 'react-router-dom';
import About from './About'
import Contact from './Contact'


const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to ="/">Home</Link>
        </div>
        <div>
          <Link to = "navigation/about">About</Link>
        </div>
        <div>
          <Link to = "navigation/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
