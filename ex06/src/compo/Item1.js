import Item2 from "./Item2";
import { useSelector } from "react-redux";

function Item1(props) {
  const name = useSelector((state) => state.name);
  return (
    <div>
      <h1>Item1 : {name}</h1>
      <Item2></Item2>
      {/* <Item2 num={props.num}></Item2> */}
    </div>
  );
}

export default Item1;
