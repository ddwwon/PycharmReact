// rsc + enter: 초기 구조 자동완성
// import React, { useState } from "react";
// import Counter from "./Counter";
// import Info from "./Info";

// 뒷정리함수: 업데이트 직전의 값을 보여주는 거
/*const App = () => {
  const [visible, setvisible] = useState(false);
  // return <Info/>;
  return (
    <div>
      <button
        onClick={() => {
          setvisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
};

export default App;*/

import React from "react";
import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";

const App = () => {
  return <Average/>;
};

export default App;

