import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setCounter((counter) => counter + 1);
  const onChange = (event) => setKeyword(event.target.value);

  console.log("I run all the time.");

  useEffect(() => {
    console.log("Call the API...");
  }, []);

  // keyword가 변할 때에만 실행된다.
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Seacrh here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me!</button>
    </div>
  );
}

export default App;
