import "./Card.css"
const Card = (props) => {

    return (
        <div className="card-container">
            <img src={props.img} className="card-img" />
            <div className="card-container__text">
                <span className="card-location">{props.location}</span>
                <a href={props.googleMapUrl} className="card-map-url">View On Google Map</a>
                <h3 className="card-title">{props.title}</h3>
                <p className="card-date">{props.startDate} - {props.endDate}</p>
                <p className="card-description">{props.description}</p>

            </div>
        </div>
    )
}

export default Card;
