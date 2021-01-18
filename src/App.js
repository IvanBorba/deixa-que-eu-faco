import "./App.css";
import Router from "./router";
import Footer from "./components/footer";
import { useLocation } from "react-router-dom";

const App = () => {
  let location = useLocation();
  let token = localStorage.getItem("authToken");

  return (
    <div className="App">
      <Router />
      {(location.pathname === "/" && <Footer />) || (token && <Footer />)}
    </div>
  );
};

export default App;
