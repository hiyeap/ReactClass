import { useState, useEffect } from "react";

function Ex02() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [ment, setMent] = useState("");

  function onChangeId(e) {
    setId(e.target.value);
  }
  function onChangePw(e) {
    setPw(e.target.value);
  }

  useEffect(function () {
    if (id === "smhrd" && pw === "123") {
      setMent("smhrd님 환영합니다");
    } else {
      setMent("로그인 실패");
    }
  }, [id,pw]);

  return (
    <>
      <input
        onChange={onChangeId}
        value={id}
        placeholder="id를 입력해주세요"
      ></input>
      <br />
      <input
        onChange={onChangePw}
        value={pw}
        placeholder="pw를 입력해주세요"
      ></input>
      <h1>{ment}</h1>
    </>
  );
}

export default Ex02;
