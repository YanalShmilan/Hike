const TripCard = (props) => {
  return (
    <div>
      <h1>{props.trip.name}</h1>
      <img src={props.trip.img} />
      <p>{props.trip.difficulty}</p>
      <p>{props.trip.length1}</p>
      <p>{props.trip.details}</p>
    </div>
  );
};
export default TripCard;
