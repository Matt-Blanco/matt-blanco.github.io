import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div id="Navigation">
            <ul>
                <li className="NavLink">
                    <Link to="/">Home</Link>
                </li>
                <li className="NavLink">
                    <Link to="/Test">About</Link>
                </li>
                <li className="NavLink">
                    <Link to="/Test">Projects</Link>
                </li>
                <li className="NavLink">
                    <Link to="/Test">CV</Link>
                </li>
            </ul>
        </div>
    )
}