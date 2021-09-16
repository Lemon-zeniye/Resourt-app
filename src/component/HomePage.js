import {Link} from "react-router-dom";
const HomePage = () => {
    return(
        <div className="home-page">
            <div className="upper-page">
                <p className="title">Luxuirous Rooms</p>
                <hr />
                <p>Deluxe Rooms Starting At $299</p>
                <Link to="/rooms">
                   <button>OUR ROOMS</button>
                </Link>
            </div>
        </div>
    )
}
export default HomePage;