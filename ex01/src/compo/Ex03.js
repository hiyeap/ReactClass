import { useState } from "react";

function Ex03() {
  const [inputData, setInputData] = useState("");

  let data = "";

  function getData(e){
    // e--> 이벤트 객체 이벤트가 일어나는 전반적인 정보를 가지고 있음
    // e.target ---> 이벤트를 실행시킨 주체가 나옴(input)
    console.log(e.target.value);
    data = e.target.value;
    setInputData(e.target.value);
  }

  function chData(){
    setInputData(data);
  }
  return (
    <>
      <input onChange={getData}/>
      <button onClick={chData}>상태값 바꾸기</button>
      <h1>{inputData}</h1>
    </>
  );
}

export default Ex03;
