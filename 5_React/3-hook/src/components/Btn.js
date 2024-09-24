const Btn = (props) => {
  return (
    <button onClick={props.click} id={props.id}>
      {props.text}
    </button>
  );
};
export default Btn;
