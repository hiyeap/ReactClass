import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>Main Page</p>
      {/* React에서 라우터를 통한 페이지 이동을 할 때는
      a태그보다 Link태그를 사용하자 */}
      <a href="./login">로그인 페이지로 이동</a>
      <br />
      <Link to="./login">로그인 페이지로 이동2</Link>
      <br />
      <Link to="./about">소개 페이지로 이동</Link>
    </>
  );
}

export default Home;
