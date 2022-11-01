import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1>머릿글</h1>
      <Link to="/">메인페이지 이동</Link>
      <br></br>
    </>
  );
}

export default Header;
