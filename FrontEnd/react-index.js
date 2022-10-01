//setup stuff
//import everything, set up default variables, etc etc etc.
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './react-style.css';

//testing for initial "is it working" test
const Testing = () => {
  return <div>If you can see this, react is working. Yay!</div>;
};




//Render
ReactDOM.render(<Testing />, document.getElementById('root'));
