import { useState } from "react";
import { Login } from "./pages/Login/Login";
import { Main } from "./pages/Main/Main";

function App() {
  const username = localStorage.getItem("username");
  return <div className="App">{username ? <Main /> : <Login />}</div>;
}

export default App;
