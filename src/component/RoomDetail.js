// import Rooms from "./Rooms";
const RoomDetail = ({fields}) => {
   const [img1, img2, img3, img4] = fields.images;
    return(
        <div className="I-container">
            <div className="detailroomname">
               <div>
                 <p>{fields.name}</p>
               </div>
            </div>
            <img className="imgdetail" src={img1.fields.file.url} alt="" />
            <div className="container-detail">
                <div className="detail-image-container">
                    <img src={img2.fields.file.url} alt="" />
                    <img src={img3.fields.file.url} alt="" />
                    <img src={img4.fields.file.url} alt="" />
                </div>
                <div className="detail-container">
                    <div className="detail-des">
                        <h1>Details</h1>
                        <p>{fields.description}</p>
                    </div>
                    <div class="detail-info">
                        <h1>Info</h1>
                        <li>P r i c e : ${fields.price}</li>
                        <li>S i z e : ${fields.size}</li>
                        <li>M a x  C a p c i t y : ${fields.capacity}</li>
                        <li>{`${fields.pets === false ? "P e t s  N o t  A l l o w e d" : "P e t s   A l l o w e d"}`}</li>
                        <li>{`${fields.breakfast === false ? "F r e e  B r e a k f a s t  I n c l u d e d " : "F r e e  B r e a k f a s e t  N o t  I n c l u d e d"}`}</li>
                    </div>
                </div>
                <div class="extra">
                    <h2>Extra</h2>
                    <ul>
                        {
                            fields.extras.map(extra => (
                                <li>{extra}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default RoomDetail;