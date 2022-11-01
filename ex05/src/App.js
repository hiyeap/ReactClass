import Join from "./compo/Join";
import { Routes, Route } from "react-router-dom";
import Login from "./compo/Login";
import Home from "./compo/Home";
import { createStore } from "redux";
import { Provider } from "react-redux";

function reducer(currentState, action) {
  // currentState : 현재 state 값
  // action : 컴포넌트에서 넘긴 message

  // currentState 기본값 설정
  if (currentState === undefined) {
    return {
      id: "Test",
      pw: "0000",
      nick: "Hello",
    };
  }
  // action에 있는 값을 (message)를 가져와서 State 변경로직
  if (action.type == "join") {
    currentState.id = action.id;
    currentState.pw = action.pw;
    currentState.nick = action.nick;
  } else if (action.type == "login") {
  }

  // 변경후-> 반환
  return { ...createState };
}
const store = createStore(reducer);

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Join></Join>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/Home" element={<Home></Home>}></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
