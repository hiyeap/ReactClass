import logo from "./logo.svg";
import "./App.css";
import Ex01 from "./compo/Ex01";
import Ex02 from "./compo/Ex02";
import Ex03 from "./compo/Ex03";
import Ex04 from "./compo/Ex04";
import Home from "./compo/Home";
import About from "./compo/About";
import Header from "./compo/Header";
import { Routes, Route } from "react-router-dom";
// Routes : 여러개의 페이지(컴포넌트)에 대한 정보를 가지고 있는 태그
// Route : 페이지(컴포넌트)에 경로(주소)를 부여해줄 수 있는 역할

function App() {
  // App : 부모 컴포넌트
  // Ex01 : 자식 컴포넌트

  // props : 속성값 전달(부모컴포넌트가 자식컴포넌트에 값을 넘길 때 사용)
  const name = "예나";
  const myColor = "red";
  return (
    // <Ex01 name={name} ttt="111" myColor={myColor}></Ex01>; // <Ex02></Ex02>
    // <Ex03></Ex03>
    <>
    <Header></Header>
      <Routes>
        <Route path="/login" element={<Ex04></Ex04>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </>
  );
}

export default App;
