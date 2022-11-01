function Ex01(props) {
  // props라는 매개변수로 받아주면 부모컴포넌트에서
  // 속성값으로 넘긴 데이터를 전부 가져올 수 있다
  return (
    <>
      {/* 받아온 myColor를 통해서 첫번째 컴포 글씨 색상을 바꾸어주세요 */}
      <h1 style={{ color: props.myColor }}>첫 번째 컴포</h1>
      <h1>저의 이름은 {props.name}</h1>
      <h1>저의 이름은 {props.ttt}</h1>
    </>
  );
}

export default Ex01;
