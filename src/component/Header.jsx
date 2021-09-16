import {Link} from "react-router-dom";
const Header = () => {
    return (
            <nav>
                <div className="nav">
                    <h1>Beach Resort</h1>
                    <div>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/rooms">
                            <li>Roomes</li>
                        </Link>
                    </div>
                </div>
            </nav>
    )
}
export default Header;