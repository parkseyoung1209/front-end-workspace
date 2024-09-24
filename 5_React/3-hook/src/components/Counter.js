import { useState, useEffect, useRef } from "react";

const Btn = (props) => {
  return <button onClick={props.click}>{props.text}</button>;
};
const Counter = () => {
  const [count, setCount] = useState(0);
  const updateCheckRef = useRef(false);
  const plus = () => {
    setCount(count + 10);
  };
  const minus = () => {
    setCount(count - 10);
  };
  const reset = () => {
    setCount(0);
  };

  // 마운트
  useEffect(() => {
    console.log("mount!");
  }, []);

  // 업데이트
  useEffect(() => {
    if (!updateCheckRef.current) {
      updateCheckRef.current = true;
      return;
    } else {
      console.log("update");
    }
  }, [count]); // 배열은 무엇이 바뀌었는가를 명시

  // 언마운트
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  }, []);

  return (
    <div>
      <h1>Total Clicks : {count}</h1>
      <Btn click={plus} text="+10" />
      <Btn click={minus} text="-10" />
      <Btn click={reset} text="reset" />
    </div>
  );
};
export default Counter;
