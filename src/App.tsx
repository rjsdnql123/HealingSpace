// src/App.js
import React, { useState } from "react";

function App() {
  const [id, setId] = useState("아이디를 입력해 주세요");
  return (
    <div>
      <div>{id}</div>
    </div>
  );
}
export default App;
