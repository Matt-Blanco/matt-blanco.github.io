import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div id="Navigation">
            <ul>
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
                    <Link to="/CV">CV</Link>
                </li>
            </ul>
        </div>
    )
}