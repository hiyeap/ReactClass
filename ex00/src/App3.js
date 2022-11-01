import Compo1 from "./compo/Compo1";
import Compo2 from "./compo/Compo2";
function App3() {
  const data = "2번";
  return (
    <div>
      {data === "1번" ? <Compo1 /> : <Compo2 />}
    </div>
  );
}

export default App3;
