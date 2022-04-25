import Background from "./Background";
import me from "./data/hammock.png"
import Navigation from "./Navigation";

export default function About() {
    return (
        <div id="AboutMe">
            <Navigation />
            <div id="Info">
                <img align="top" id="me" src={me} transform="scale(0.5)" />
                <span id="BioText">
                    Matt Blanco is a designer and software engineer who uses design as a lens to look at how people interact with information.
                    He is currently an undergraduate at Northeastern University and a candidate for a BS. in Computer Science and Design.
                    He is affiliated with the <a target="_blank" className="AboutLink" href="http://vis.csail.mit.edu/">Visualization Group</a> at MIT CSAIL and the <a target="_blank" className="AboutLink" href="https://prl.ccs.neu.edu/">Programming Research Lab</a> at Northeastern (NUPLR).
                </span>
            </div>
            <Background />
        </div>
    )
}