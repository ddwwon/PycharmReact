/* 클래스형
import React, {Component} from 'react';

class App extends Component{
  render() {
    const name = 'react';
    return <div className="react">{name}</div>;
  }
}*/

import React from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Hi from "./Hi";
import EventPractice from "./EventPractice";

function App() {
  return <Hi />;
}

export default App;
