import star from "../images/star-icon.png";

function Card(props) {
  // console.log(props);
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      <img src={props.coverImg} alt="image" className="card-photo" />
      {badgeText && <button>{badgeText}</button>}
      <div className="text-container">
        <img src={star} alt="star-icon" className="star-icon" />
        <span>{props.stats.rating} </span>
        <span className="gray-text">
          ({props.stats.reviewCount}) • {props.location}
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
