// src/App.js
import React, { useState } from "react";

function App() {
  const [id, setId] = useState<any>("아이디를 입력해 주세요");

  const click = () => {
    let a = [1, 2, 3].map((n) => n ** n);
    console.log(a);
    setId(a[0]);
  };
  return (
    <div>
      <div>{id}</div>
      <button onClick={click}></button>
    </div>
  );
}
export default App;
