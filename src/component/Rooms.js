import {Link } from "react-router-dom";
const Rooms = ({data}) => {
    const {sys, fields} = data;
    const [img1] = fields.images;

    return(
        <div className="rooms" >
            <p>$ {fields.price}<br/> <small>per night</small></p>
            <Link to={`/rooms/${sys.id}`}>
                <img src={img1.fields.file.url} alt="" />
            </Link>
                <div className="title-img">{fields.name}</div>
        </div>
    )
}
export default Rooms;