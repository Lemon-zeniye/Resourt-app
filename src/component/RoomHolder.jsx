import { useContext, useState, useEffect } from "react";
import { DataContext } from "./DataContext";
import Rooms from "./Rooms";
const RoomHolder = () => {
    const [datas] = useContext(DataContext);
    const [filterData, setFilterData] = useState(datas);
    const [status, setStatus] = useState("all");

    const {fields} = datas[0];
    const [img1] = fields.images;

    const filterOne = () => {
        switch(status) {
             case "double" :
                 setFilterData(
                    datas.filter(data => data.fields.type === "double")
                 );
            break
            case "family" :
                setFilterData(
                    datas.filter(data => data.fields.type === "family")
                )
            break
            case "single" :
                setFilterData(
                    datas.filter(data => data.fields.type === "single")
                )
            break
            case "all" :
                setFilterData(
                    datas.map(data => data)
                )
            break;
            default :
                console.log("there is an error");
            break;

        }
    }
    useEffect(() => {
        filterOne()
    }, [status])
 
 
    return (
        <> 
            <div className="detailroomname">
               <div>
                 <p>{fields.name}</p>
               </div>
            </div>
            <img className="imgdetail" src={img1.fields.file.url} alt="" />
            <div>
                <div className="featured-room search-room">
                    <h1>Search Rooms</h1>
                    <hr />
                </div>
                <div className="filter">
                    <h3>Room Type</h3>
                    <select onChange={(e) => setStatus(e.target.value)}>
                        <option value="all">All</option>
                        <option value="family">Family</option>
                        <option value="double">Double</option>
                        <option value="single">Single</option>
                    </select>
                </div>
            </div>
            <div className="room-rooms-container">
                <div className="room-rooms">
                    {
                        filterData.map(data => (
                            <Rooms data={data} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default RoomHolder;