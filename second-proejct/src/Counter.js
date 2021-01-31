/*
import React, { useState } from "react";

const Counter = () => {
  //  useState: 한번에 하나의 상태만 저장가능
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>
        현재 카운터의 값은 <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;*/
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.valeu - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  //  dispatch: 액션을 발생시키는 함수
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운터의 값은 <b>{state.value}</b>
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
