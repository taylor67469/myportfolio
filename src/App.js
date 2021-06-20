import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage"
import About from "./pages/about"
function App() {
  return (
  <Router>
  <Homepage>
  </Homepage>
  <About/>
  </Router>
  );
}

export default App;
