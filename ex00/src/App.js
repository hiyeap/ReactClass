import logo from "./logo.svg";
import "./App.css";
import './test.css';  // 외부 css 파일 import
import App2 from './App2';

function App() {
  const name = "예나";

  // return 안에 사용자 정의 태그를 사용할 수 있다!
  return (
    // JSX 문법-> Javascript와 HTML을 같이 사용할 수 있는 문법!
    // 규칙1: 꼭 html 구조는 한가지 태그로 묶여 있어야 한다
    // 규칙2: 모든 태그는 여는 태그와 닫는 태그 둘다 존재하여야만 한다
    //        <h1>HELLO REACT <br></br>월요일 파이팅!</h1>
    // 규칙3: JSX 문법 안에서는 사용할 수 있는 Javascript 문법이 제한되어 있다
    //        삼항 연산자는 가능하다
    // 규칙4: class를 지정해줄때는 className이라는 키워드를 사용한다
    
    // 빈태그(Fragment)로도 묶어서 사용이 가능하다
    <div>
      <h1>HELLO REACT</h1>
      <h1 id="test" style={{color:"red"}}>월요일 파이팅!</h1>
      {/* Ctrl+/   -> 주석
      변수를 사용할 때는 {변수명}으로 사용한다 */}
      {/* name에 있는 값이 "예나"-> 나의 이름은 예나
       다른 내용이라면 나의 이름은 ?? */}
      <h1 className="test">나의 이름은 {name === "예나" ? name : "??"}</h1>
      <App2></App2>
    </div>
  );
}

// 위에서 만들어놓은 사용자 정의태그를 내보내겠습니다!
export default App;
