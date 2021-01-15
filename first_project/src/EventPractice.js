import React, { Component } from "react";

// this.state는 state를 만들 떄 사용

class EventPractice extends Component { // 클래스, extends는 상속을 의미한
  state = {
    username: "",
    message: " ",
  };

  /*  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick() {
    alert(this.state.message);
    this.setState({
      message: "",
    });
  }*/


  handleChange = (e) => { // 인풋창에 입력한 걸 저장하는 함수
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    // 알림창이 뜨는(alert)
    alert(this.state.username + ":" + this.state.message); // 이부분이 알림창
    this.setState({
      username: "",
      message: "",
    });
  };

  handleKeyPress = (e) => {
    // 엔터키를 누르면 알림창이 뜨게
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    return (
      <div>
        <h1> 이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자이름!" // placeholder: 검색창을 누르기도 전에 떠있는 것 ex) 검색어를 입력하세요
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="입력해주세요!"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>  {/*// 확인버튼 생성해줌*/}
      </div>
    );
  }
}

export default EventPractice;
