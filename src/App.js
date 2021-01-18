import "./App.css";
import Router from "./router";

const App = () => {
  return (
    <div className="App">
      <Router />
      {/* {(location.pathname === "/" && <Footer />) || (token && <Footer />)} */}
    </div>
  );
};

export default App;
