import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage"
import About from "./pages/about"
import Projects from "./pages/projects"
import Resume from "./pages/resume"
import Contact from "./pages/contactme"
function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
          <About />
        </Route>
        <Route exact path="/projects">
          <Homepage />
          <Projects />
        </Route>
        <Route exact path="/resume">
          <Homepage />
          <Resume />
        </Route>
        <Route exact path="/contactme">
        <Homepage />
          <Contact/>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
