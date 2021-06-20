import homecss from "../pages/homepage.css"
import myResume from "../assets/resume.png"
function Resume(){
    return(
    <div>
    <h2>Resume</h2>
    <img className="res"src={myResume} width="700" height="700"alt="myphoto"/>
    </div>
    )
}
export default Resume