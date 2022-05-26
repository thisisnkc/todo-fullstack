import "./App.scss";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from "./components/signup/signup";
import Login from "./components/login/login";
import Home from "./components/home/home";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
