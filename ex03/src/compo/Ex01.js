import { useState, useEffect } from "react";

function Ex01() {
  const [data, setData] = useState(0);
  const [data1, setData1] = useState(0);

  // useEffect : 렌더링 되자마자 이거부터 실행해주세요!
  // --> 상태값이 바뀔때(다시 렌더링 된다)마다 다시 실행시킨다!
  useEffect(function () {
    console.log("TEST");
  }, [data]); // [data]--> data라는 상태값이 바뀌었을 때만 실행시켜주세요
  function add() {
    setData(data + 1);
  }
  function minus() {
    setData(data - 1);
  }
  function add1() {
    setData1(data1 + 1);
  }
  function minus1() {
    setData1(data1 - 1);
  }
  return (
    <>
      <h1>useEffect 첫 번째</h1>
      <button onClick={add}>+</button>
      <span>{data}</span>
      <button onClick={minus}>-</button>
      <br/>
      <button onClick={add1}>+</button>
      <span>{data1}</span>
      <button onClick={minus1}>-</button>
    </>
  );
}

export default Ex01;
