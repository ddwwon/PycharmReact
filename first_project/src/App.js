/* 클래스형
import React, {Component} from 'react';

class App extends Component{
  render() {
    const name = 'react';
    return <div className="react">{name}</div>;
  }
}*/

import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Hi from "./Hi";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";

class App extends Component {
  // 레퍼런스는 클래스에서만 사용 가능
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />{" "}
        {/*스크롤 박스를 레퍼런스로 지정해줘야 함*/}
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        {/*그래서 앱 제이에스에서 사용 가능*/}
      </div>
    );
  }
}

/*function  App(){
  return <ValidationSample/>;
}*/

export default App;
