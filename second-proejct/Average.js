// 훅들
import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

// 커스텀 훅을 만들수 있다

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  // 등록버튼을 눌렀을 때 포커스가 인풋으로 가도고
  const inputEl = useRef(null);

  // 빈배열은 한번만 부르는거
  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  // 호출될 때만 부르게
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus();
  }, [number, list]);

  const avg = useMemo(()=>getAverage(list), [list])

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div><b>평균값:</b>{avg}</div>
    </div>
  );
};

export default Average;