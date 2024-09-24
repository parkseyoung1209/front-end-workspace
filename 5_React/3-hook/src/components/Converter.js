import { useState, useRef, useEffect } from "react";

const Converter = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mnh, setMnh] = useState("Minutes => Hours");
  const [title, setTitle] = useState(["Minutes", "Hours"]);
  const [logic, setLogic] = useState(true);

  const write = (event) => {
    setInput(event.target.value);
    if (logic == true) {
      setOutput(parseInt(event.target.value * 60));
    } else {
      setOutput(parseInt(event.target.value / 60));
    }
  };
  const reset = () => {
    setInput("");
    setOutput("");
  };
  const myfunc = () => {
    setLogic(false);
    setInput(output);
    setOutput(input);
    const newTitle = [...title];
    [newTitle[0], newTitle[1]] = [newTitle[1], newTitle[0]];
    setTitle(newTitle);
  };
  const change = () => {
    if (logic == true) {
      setMnh("Hours => Minutes");
      myfunc();
    } else {
      setMnh("Minutes => Hours");
      myfunc();
    }
  };
  return (
    <>
      <h1>Time Converter</h1>
      <p>
        {title[0]} :<input value={output} disabled />
      </p>
      <p>
        {title[1]} :<input onChange={write} value={input} />
      </p>

      <button onClick={reset}>reset</button>

      <button onClick={change}>{mnh}</button>
    </>
  );
};

export default Converter;
