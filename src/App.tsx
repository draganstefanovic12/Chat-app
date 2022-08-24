import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Login } from "./pages/Login";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const App = () => {
  const user = useSelector((user: RootState) => user.user.username);

  return (
    <Router>
      <Routes>
        <Route
          path="/user"
          element={user ? <Navigate to="/" /> : <Login />}
        ></Route>
        <Route
          path="/"
          element={user ? <MainPage /> : <Navigate to="/user" />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
