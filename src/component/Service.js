const Service = ({service}) => {
    return(
        <div className="service-div" style={{display: "flex"}}>
            <div className="service">
                <span>{service.icon}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </div>
        </div>
    )
}
export default Service;