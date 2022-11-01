import { useState } from "react";
// useState : react에서 기본적으로 제공하는 기능(Hooks)
// --> 상태값을 만들 수 있는 기능제공!
// 상태값 : 화면에 보여진 후에도, 값이 바뀌면 화면도 바뀔 수 있는 값
let result = "칼퇴!!";
function Ex02() {
  const [result2, setResult2] = useState("야근"); //useState("초기값")
  // result2 --> 상태값을 나타낼 수 있는 값
  // setResult2 --> 상태값을 바꿀 수 있는 함수
  // 비구조 할당 방법

  function chResult() {
    console.log("1 : " + result);
    setResult2("칼퇴"); // 함수 내에서 가장 마지막 순서로 실행되어짐
    console.log("2 : " + result2);
  }

  return (
    <>
      <h1>두 번째 컴포 useState</h1>
      <h1>오늘은 {result2}</h1>
      <button onClick={chResult}>바꾸기</button>
    </>
  );
}

export default Ex02;
