import { List } from '../styles';
import { Link } from 'react-router-dom';

const TripCard = (props) => {
  if (props.type === 'km') {
    return (
      <List>
        <h1>{props.trip.name}</h1>
        <Link to={`/details/${props.trip.slug}`}>
          <img src={props.trip.img} />
        </Link>
        <p>{props.trip.difficulty} </p>
        <p>{props.trip.length1} Km</p>
        <p>{props.trip.details}</p>
      </List>
    );
  } else if (props.type === 'mile')
    return (
      <List>
        <h1>{props.trip.name}</h1>
        <Link to={`/details/${props.trip.slug}`}>
          <img src={props.trip.img} />
        </Link>
        <p>{props.trip.difficulty}</p>
        <p>{Math.round(props.trip.length1 * 0.621371)} Mile</p>
        <p>{props.trip.details}</p>
      </List>
    );
};
export default TripCard;
