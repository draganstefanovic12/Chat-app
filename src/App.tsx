import "./App.css";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useUser } from "./context/UserContext";
import { MainPage } from "./pages/MainPage";
import { Login } from "./pages/Login";

const App = () => {
  const { user } = useUser();

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
