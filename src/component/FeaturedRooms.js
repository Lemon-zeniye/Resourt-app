import { useContext } from "react";
import Rooms from "./Rooms";
import {DataContext} from "./DataContext";

const FeaturedRooms = () => {
    const [datas, setDatas] = useContext(DataContext);
   

    return(
        <div>
            <div className="featured-room">
                <h1>Featured Rooms</h1>
                <hr />
            </div>
            <div className="big-rooms" >
            {
                datas.map(data=> {
                    const {sys, fields} = data;
                    if(fields.featured === true){
                       return  <Rooms key={sys.id} data={data}/>
                    }
                })
            }
            </div>
        </div>
    )
}
export default FeaturedRooms;