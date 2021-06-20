
import homecss from "../pages/homepage.css"
import myphoto from "../assets/myphoto.jpg"
import About from "./about"
import { BrowserRouter as Router, Redirect, Route, Switch,Link } from "react-router-dom";
function Homepage(){
    return(<div>
<body>
    <header >
    <ul className="nav justify-content-end">
        <li className="nav-item">
          <Link to="/"><div className="nav-link navtext">About me</div></Link>
        </li>
        <li className="nav-item">
        <Link to="/projects"><div className="nav-link navtext">Projects</div></Link>
        </li>
        <li className="nav-item">
        <Link to="/resume"><div className="nav-link navtext">Resume</div></Link>
        </li>
        <li className="nav-item">
        <Link to="/contactme"><div className="nav-link navtext">Contact Me</div></Link>
        </li>
      </ul>
    
    <div className="jumbo">
        <h1>Zachary Taylor's Portfolio</h1>
    </div>
</header>
</body>

</div>)
}

export default Homepage;