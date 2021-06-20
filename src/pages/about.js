import myphoto from "../assets/myphoto.jpg"
import homecss from "../pages/homepage.css"
function About(){
    return(
    <div>
    <h2>About me:</h2>
    <img src={myphoto} width="400" height="400"alt="myphoto"/>
    <h3></h3>
    <p>
My name is Zachary Taylor. I am a young, aspiring web-developer!
I hope to get a job in web-developing and I love to code!
Ever since I was in highschool, I have always wanted to become a programmer. <br/>
I love how everyday is different in the world of coding. 
I like challenging myself and becoming stronger.  </p> 
</div>)
}

export default About;