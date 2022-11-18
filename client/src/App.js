import { Routes, Route } from "react-router-dom";
import { Container } from "./components/Container";
import Nav from "./components/Nav/Nav";
import Home from "./views/Home/Home";
import Login from "./views/Login/Login";
import Records from "./views/Records/Records";
import SignUp from "./views/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Nav />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/records" element={<Records />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
