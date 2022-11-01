import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Ex04() {
  const nav = useNavigate();
  // useNavigate --> 주소경로를 입력받아 요청해줄 수 있는 Hook

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nick, setNick] = useState("");

  // 일반 변수는 화면이 렌더링될때 -> 다시 맨처음 초기값으로 돌아간다!
  // 화면이 다시 렌더링 된다 ==> 상태값이 바뀔때

  const [ment, setMent] = useState("로그인을 해주세요!");

  function onChangeId(e) {
    setId(e.target.value);
  }
  function onChangePw(e) {
    setPw(e.target.value);
  }

  useEffect(
    function Login(params) {
      if (id === "smhrd" && pw === "123") {
        setMent("smhrd님 환영합니다");
        nav("/about?id=smhrd&nick="+nick);
      } else {
        setMent("로그인 실패");
      }
    },
  [nick]
  );
  return (
    <>
      ID : <input onChange={onChangeId} value={id}></input>
      <br />
      PW : <input onChange={onChangePw} value={pw}></input>
      <br />
      NICK :
      <input onChange={(e) => setNick(e.target.value)} value={nick}></input>
      {/* <button onClick={Login}>로그인</button> */}
      <Link to="/">메인 페이지로 이동</Link>
      <h1>{ment}</h1>
    </>
  );
}

export default Ex04;
