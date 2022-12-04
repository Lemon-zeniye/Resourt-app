import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Service from "./Service";

const Services = () => {
const services = [
        {
           icon:<FaCocktail/>,
           title: "Free Cocktails",
           description: "Lorem ipsum dolor sit amet consecterue adipiscing eilt. magni, corporisi"
        },
    {
        icon: <FaHiking />,
           title: "Endless Hiking",
           description: "Lorem ipsum dolor sit amet consecterue adipiscing eilt. magni, corporisi"
    },
    {
        icon: <FaShuttleVan />,
           title: "Free Shuttle",
           description: "Lorem ipsum dolor sit amet consecterue adipiscing eilt. magni, corporisi"
    },
    {
        icon: <FaBeer />,
           title: "Strongest Beer",
           description: "Lorem ipsum dolor sit amet consecterue adipiscing eilt. magni, corporisi"
    }
    ];
    
   
    return (
        <div className="service-big">
            <div className="service-bit2">
                <h1 className="service-h1">Services</h1>
                <hr className="horizontal"/>
            </div>
            <div  className="servicelist">
            {
               services.map((service, index) => <Service key={index} service={service}/>)
           }
            </div>
         
        </div>
    )
}
export default Services;