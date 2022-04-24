import Navigation from "./Navigation"
import accessImg from "./data/ProjectImages/accessVis.png"
import atlastImg from "./data/ProjectImages/atlas-logo.png"
import designVisImg from "./data/ProjectImages/designAcrossTime.JPG"
import excelsiorImg from "./data/ProjectImages/Excelsior2022Cover.png"
import filmIng from "./data/ProjectImages/film.JPG"
import posterImg from "./data/ProjectImages/hopper.png"

import Background from "./Background"


export default function Projects() {

    const cards = [{
        title: "Accessible Visualization Design",
        content: "In collaboration with people with visual disabilities, we explore textual and screen reader modalities for representing data.",
        imgUrl: accessImg,
    },
    {
        title: "Design Across Disciplines",
        content:"A visualization comparing how design language is used in different settings from a computer science academic conference to a design research jorunal.",
        imgUrl: designVisImg
    },
    {
        title: "Project Atlas",
        content: "A Visual Studio Code Extension that aims to visualize Java codebases to increase the learnability of code.",
        imgUrl: atlastImg
    },
    {
        title: "Excelsior 2022",
        content: "Designed the cover and layout of Excelsior. The 2022 installation of Northeastern University Outing Club's premiere magazine recapping stories throughout the past two semesters.",
        imgUrl: excelsiorImg
    },
    {
        title: "Poster a Day (2021)",
        content: "Practicing graphic design skills by creating a unique poster evey day and posting it on my social media.",
        imgUrl: posterImg
    },
    {
        title: "Film Photography",
        content: "A Collection of all the film photos I've taken to hopefully as I've learned more about the craft.",
        imgUrl: filmIng
    }]


    return (
        <div id="Projects">
            <Navigation />
            <h2 id="ProjectsTitle">Projects</h2>
            <div className="cards-container" >
                {
                    cards.map((card) => (
                        <Card title={card.title}
                            content={card.content}
                            imgUrl={card.imgUrl} />
                    ))
                }
            </div>
            <Background />
        </div>
    )
}

function Card(props) {
    return (
        <div className="card">
            <img src={props.imgUrl}
                alt={props.alt || 'Image'} />
            <div className="card-content">
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </div>
        </div>
    )
}