import {Link} from "react-router-dom";
const Header = () => {
    return (
            <nav>
                <div className="nav">
                    <h1>Beach Resort</h1>
                    <div>
                        <Link style={{textDecoration: 'none' }} to="/">
                            <li>Home</li>
                        </Link>
                        <Link style={{textDecoration: 'none' }} to="/rooms">
                            <li>Roomes</li>
                        </Link>
                    </div>
                </div>
            </nav>  
    )
}
export default Header;