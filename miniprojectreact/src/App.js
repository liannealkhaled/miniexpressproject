import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      HELLO
      <Routes>
        <Route path="/" Component={Home}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
