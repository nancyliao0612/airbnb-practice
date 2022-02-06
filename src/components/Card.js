// import cardPhoto from "../images/katie-zaferes.png";
import star from "../images/star-icon.png";

function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="image" className="card-photo" />
      <button>SOLD OUT</button>
      <div className="text-container">
        <img src={star} alt="star-icon" className="star-icon" />
        <span>{props.rating} </span>
        <span className="gray-text">
          ({props.reviewCount}) • {props.country}
        </span>
      </div>
      <p>{props.title}</p>
      <p>
        <b>From ${props.price}</b> / person
      </p>
    </div>
  );
}

export default Card;
