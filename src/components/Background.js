import AboutMe from "./AboutMe"
import Hobbies from "./Hobbies"
import Motivations from "./Motivations"
import Objectives from "./Objectives"
import Skills from "./Skills"

function Background(){
    return(
        <div className = "background">
            <div className="left">
                 <AboutMe />
            </div>
            <div className="right">
              <Objectives />
              <Motivations />
              <Hobbies />
              
            </div>
            
        </div>
    )
}

export default Background