import { Link, useSearchParams } from "react-router-dom";

function About() {

  const [paramsId, setParamsId] = useSearchParams();
  // 쿼리스트링으로 넘긴 데이터는 paramsId에 저장되어있다
  const id = paramsId.get("id");

  const [paramsNick, setParamsNick] =useSearchParams();
  const nick = paramsNick.get("nick");
  return (
    <>
      <h1>{id} 소개 페이지입니다.</h1>
      <Link to="/">메인 페이지로 이동</Link>
    </>
  );
}

export default About;
