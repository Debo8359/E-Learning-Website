import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Tech } from "./Tech";
import { Nontech } from "./Nontech";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/tech"
          exact
          element={
            <>
              <Tech />
            </>
          }
        />
        <Route
          path="/nontech"
          exact
          element={
            <>
              <Nontech />
            </>
          }
        />
        <Route
          path="/login"
          exact
          element={
            <>
              <Login />
            </>
          }
        />
        <Route
          path="/register"
          exact
          element={
            <>
              <Register />
            </>
          }
        />
        <Route
          path="/reset"
          exact
          element={
            <>
              <Reset />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
