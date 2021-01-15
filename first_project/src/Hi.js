import React, { useState } from "react";

const Hi = () => {
  const [message, setMessage] = useState("인사"); // 배열비구조와 할당 사용, 처음화면에 보이는거, default 화면
  const onClickEnter = () => setMessage("안뇽!");
  const onClickLeave = () => setMessage("바이!");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button> {/*// 입장 버튼 누르면 안뇽이라는 말이 나옴*/}
      <button onClick={onClickLeave}>퇴장</button> {/*// 퇴장 버튼 누르면 바이라는 말이 나옴*/}
      <h1 style={{ color }}>{message}</h1>
      <button onClick={() => setColor("red")}>빨간색</button> {/*각각의 빨간색, 초록색, 파란색 버튼을 누르면 글자색이 바뀐다*/}
      <button onClick={() => setColor("green")}>초록색</button>
      <button onClick={() => setColor("blue")}>파란색</button>
    </div>
  );
};

export default Hi;
