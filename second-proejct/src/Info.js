/*
import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  // 특정작업 수행하게 useeffect
  // 처음 렌더링 할때만 실행되게: 빈배열을 만들어주면, 마운트
  // 배열에 name을 넣으면 name만 보이게
  useEffect(() => {
    // console.log("렌더링 완료");
    // console.log({ name, nickName });
    // console.log("마운트 될 때만 실행");
    // console.log(name);
    console.log("effect");
    console.log(name);
    return () => {
      console.log("clean ");
      console.log(name);
    };
    // }, [name]);
  }, [name]);
  // 배열에 넣으면 뒷정리함수가 unmount 될때만 나옴(위에 마지막 줄)

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickName(e.target.value);
  };

  // b태그: 진하게
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickName} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info;
*/

import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
  const { name, nickname } = state;
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onchange} />
        <input name="nickname" value={nickname} onChange={onchange} />
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
      </div>
      <div>
        <div>
          <b>닉네임: </b> {nickName}
        </div>
      </div>
    </div>
  );
};

export default Info;
