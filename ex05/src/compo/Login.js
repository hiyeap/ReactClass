import { useState, useRef, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
// useSearchParams : 주소값에 있는 쿼리스트링 데이터를 꺼내올 수 있게 만들어줌!

// redux 사용하려면?
import { useDispatch, useSelector } from "react-redux";

function Login() {
const joinId = useSelector((state)=>state.id);
const joinPw = useSelector((state)=>state.pw);
const joinNick = useSelector((state)=>state.nick);
const dispatch = useDispatch();

  // params : 이전 컴포넌트에서 보낸 쿼리스트링 데이터를 객체로 가지고 있음
  // ex) id=Test&pw=123&nick=냉면
  const [params, setParams] = useSearchParams();
  const saveId = params.get("id");
  const savePw = params.get("pw");
  const saveNick = params.get("nick");

  const useId = useRef("");
  const nav = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [ment, setMent] = useState("");

  // const tryLogin = function () {
  //   if (saveId === id && savePw === pw) {
  //     console.log(id + "님 환영합니다");
  //     console.log("닉네임은 " + saveNick);
  //     nav("/Home?&nick=" + saveNick);
  //   } else {
  //     setMent("로그인 실패!");
  //   }
  // };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <form action={"Home?nick='" + saveNick + "'"}>
        ID :
        <input
          name="id"
          onChange={(e) => setId(e.target.value)}
          value={id}
          ref={useId}
          id="test"
        />
        <br />
        PW :{" "}
        <input name="pw" onChange={(e) => setPw(e.target.value)} value={pw} />
        <br />
        <input name="nick" value={saveNick} style={{ display: "none" }} />
        <br />
        {/* <button onClick={tryLogin}>로그인시도</button> */}
        <button type="submit">로그인!</button>
        <h1>{ment != null ? ment : null}</h1>
      </form>
    </div>
  );
}

export default Login;
