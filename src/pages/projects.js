import homecss from "../pages/homepage.css"
import TT from "../assets/Screenshot (21).png"
import planner from "../assets/screenshotDP.png"
import expense from "../assets/expenseimg.png"
import chad from "../assets/chadchat.png"
function Projects(){
    return (<div>
        <h2>Projects:</h2>
            <figure>
            <a href="https://haydenabeck.github.io/Project-1-App/"><img
                                    src={TT} className="figure-img img-fluid rounded" alt="..."
                                    width="500" height="500" class="proj"/></a>
                <figcaption>Washington Blueline Tracker</figcaption>
            </figure>
            <figure>
            <a href="https://taylor67469.github.io/PlannerHW/"><img
                                    src={planner} className="figure-img img-fluid rounded" alt="..."
                                    width="500" height="500"class="proj"/></a>
                <figcaption>Workday Daily Planner</figcaption>
            </figure>
            <figure>
            <a href="https://expense-tracker-7000.herokuapp.com/"><img
                                    src={expense} className="figure-img img-fluid rounded" alt="..."
                                    width="500" height="500"class="proj"/></a>
                <figcaption>Expense Tracker 7000</figcaption>
            </figure>
            <figure>
            <a href="https://chadchat1234.herokuapp.com/"><img
                                    src={chad} className="figure-img img-fluid rounded" alt="..."
                                    width="500" height="500"class="proj"/></a>
                <figcaption>Chad Chat</figcaption>
            </figure>
        </div>)
}
export default Projects;