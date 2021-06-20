
import homecss from "../pages/homepage.css"
import myphoto from "../assets/myphoto.jpg"
import About from "./about"
function Homepage(){
    return(<div>
<body>
    <header >
    <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link navtext" href="/">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navtext" href="/projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navtext" href="/resume">Resume</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navtext" href="/contactme" tabindex="-1" aria-disabled="true">Contact Me</a>
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