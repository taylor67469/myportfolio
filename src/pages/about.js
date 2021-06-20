import myphoto from "../assets/myphoto.jpg"
import homecss from "../pages/homepage.css"
import coding from "../assets/322430.jpg"
import four from "../assets/404.png"
function About(){
    return(
    <div>
    <h2>About me:</h2>
    <img className="myPhoto"src={myphoto} width="400" height="400"alt="myphoto"/>
    
    <section>
My name is Zachary Taylor. I am a young, aspiring web-developer!
I hope to get a job in web-developing and I love to code!
Ever since I was in highschool, I have always wanted to become a programmer. <br/>
I love how everyday is different in the world of coding. 
I like challenging myself and becoming stronger. </section>
</div>)
}

export default About;