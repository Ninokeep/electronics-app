import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header";
import Home from "./views/home/home";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
