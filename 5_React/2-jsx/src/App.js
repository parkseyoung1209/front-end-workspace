import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const setCounter = (e) => {
    if (e.target.textContent === "+10") {
      setCount(count + 10);
    } else if (e.target.textContent === "-10") {
      setCount(count - 10);
    } else {
      setCount(0);
    }
  };
  return (
    <div>
      <h1>Total Clicks : {count} </h1>
      <button onClick={setCounter}>+10</button>
      <button onClick={setCounter}>-10</button>
      <button onClick={setCounter}>Click!</button>
    </div>
  );
};
export default App;
