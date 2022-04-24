import Background from "./Background";
import me from "./data/hammock.JPG"
import Navigation from "./Navigation";

export default function About() {
    return (
        <div id="AboutMe">
            <Navigation />
            <div id="Info">
                <div id="clip">
                    <img id="me" src={me} transform="scale(0.5)" />
                    <svg id="myPic" viewBox="0 0 900 350" transform="scale(0.1)">
                        <defs>
                            <clipPath id="meClipPath">
                                <path id="p1" transform="scale(1)"
                                    d="M127.9,0C167.686,0,277,23.934,301.1,52.205c68.679,107.658-101.125,208.82-173.2,208.82a130.32,130.32,0,0,1-96.093-42.2c-21.291-23.051-29.547-88.665,35.419-99.8C165.6,85.616,55.817,0,127.9,0Z" />
                            </clipPath>
                        </defs>
                        <path id="p2" opacity="0"
                            d="M127.9,0C167.686,0,277,23.934,301.1,52.205c33.034,51.784,50.553,101.026-29.057,140.353-148.733-14.3-106.738,68.467-144.148,68.467a130.32,130.32,0,0,1-96.093-42.2C10.513,195.778-3.371-4.732,127.9,0Z" />
                    </svg>
                </div>
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