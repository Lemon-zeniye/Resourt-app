import { useContext } from "react";
import { DataContext } from "./DataContext";
import RoomDetail from "./RoomDetail";
const RoomsDetail = ({match}) => {
    const [datas]= useContext(DataContext);
    const id = match.params.id;
    return(
        <>
         {
             datas.map(data => {
                const  {sys, fields} = data;    
                if(id === sys.id){
                    return <RoomDetail fields={fields} />
                }
              })
         }

         <p></p>
        </>
    )
}
export default RoomsDetail;