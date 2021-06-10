import { List } from '../styles';
const TripCard = (props) => {
  return (
    <List>
      <h1>{props.trip.name}</h1>
      <img src={props.trip.img} />
      <p>{props.trip.difficulty}</p>
      <p>{props.trip.length1}</p>
      <p>{props.trip.details}</p>
    </List>
  );
};
export default TripCard;
