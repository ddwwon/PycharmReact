/* 클래스형
import React, {Component} from 'react';

class App extends Component{
  render() {
    const name = 'react';
    return <div className="react">{name}</div>;
  }
}*/

import React from 'react';
import MyComponent from "./MyComponent";

function  App(){
  return <MyComponent name = "하도" MyNumber={3} >리액트</MyComponent>;
}

export default App;
