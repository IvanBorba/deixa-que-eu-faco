import "./App.css";
import Router from "./router";
import Footer from "./components/footer";
import Header from "./components/header";
import { useLocation } from "react-router-dom";

const App = () => {
  let location = useLocation();
  let token = localStorage.getItem("authToken");

  return (
    <div className="App">
      {(location.pathname === "/" && <Header />) || (token && <Header />)}
      <Router />
      {(location.pathname === "/" && <Footer />) || (token && <Footer />)}
    </div>
  );
};

export default App;
