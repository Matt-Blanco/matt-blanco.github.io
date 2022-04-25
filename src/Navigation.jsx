import { Link } from 'react-router-dom';
import resume from "./data/Resume.pdf"

export default function Navigation() {
    return (
            <ul id="Navigation">
                <li className="NavLink">
                    <Link to="/">Home</Link>
                </li>
                <li className="NavLink">
                    <Link to="/About">About</Link>
                </li>
                <li className="NavLink">
                    <Link to="/Projects">Projects</Link>
                </li>
                <li className="NavLink">
                    <a target="_blank" href={resume}>CV</a>
                </li>
            </ul>
    )
}