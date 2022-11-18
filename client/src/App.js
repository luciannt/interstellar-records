import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import SignUp from "./views/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
