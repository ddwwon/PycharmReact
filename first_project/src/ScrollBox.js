import React, { Component } from "react";

class ScrollBox extends Component {

  scrollToBottom = () => {
    const {scrollHeight, clientHeight} = this.box; // sh: 650px, 전체 스크롤바 길이, cl:300px, 움직이는 스크롤바 길이
    this.box.scrollTop = scrollHeight - clientHeight // 스크롤바가 아래로 이동하게
  }



  render() {
    const style = {
      // 스크롤박스
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto", // 스크롤되게 하는 장치
      position: "relative", // 스크롤되게 하는 장치
    };

    const innerStyle = {
      // 스크롤박스 안에
      width: "100%", // 부모요소의 백퍼센트 만큼
      height: "650px", // 슬라이드 할 수 있게 하려고
      background: "linear-gradient(white, blue)", // 그라데이션 되게
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle} />
      </div>
    );
  }
}

export default ScrollBox;