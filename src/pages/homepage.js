
import homecss from "../pages/homepage.css"
import myphoto from "../assets/myphoto.jpg"
import About from "./about"
function Homepage(){
    return(<div>
{/* <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>My Portfolio</title>
</head> */}
<body>
    <header >
    <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link navtext" aria-current="page" href="#Aboutme">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navtext" href="/projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navtext" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link navtext" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    
    <div class="jumbo">
        <h1>Zachary Taylor's Amazing Portfolio</h1>
    </div>
</header>
</body>

</div>)
}

export default Homepage;