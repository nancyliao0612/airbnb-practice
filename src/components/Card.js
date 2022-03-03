import star from "../images/star-icon.png";

function Card(props) {
  const { openSpots, coverImg, stats, location, price, title } = props;

  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      <img src={coverImg} alt="image" className="card-photo" />
      {badgeText && <button>{badgeText}</button>}
      <div className="text-container">
        <img src={star} alt="star-icon" className="star-icon" />
        <span>{stats.rating} </span>
        <span className="gray-text">
          ({stats.reviewCount}) • {location}
        </span>
      </div>
      <p>{title}</p>
      <p>
        <b>From ${price}</b> / person
      </p>
    </div>
  );
}

export default Card;
