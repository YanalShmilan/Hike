import { Redirect, useParams } from 'react-router-dom';
import TripCard from './TripCard';

const TripDetail = (props) => {
  const { tripSlug } = useParams();

  let trip = props.trips.find((trip) => trip.slug === tripSlug);
  if (!trip) return <Redirect to="/fourOfour"></Redirect>;

  let recommended = props.trips
    .filter((e) => e.difficulty === trip.difficulty && e.name != trip.name)
    .map((a) => {
      return <TripCard trip={a} type={'km'} />;
    });
  console.log(recommended);

  return (
    <div>
      <h1>{trip.name}</h1>
      <img src={trip.img} alt="" />
      <p>{trip.details}</p>
      <p>{trip.length1}</p>
      <p>{trip.difficulty}</p>

      <h1>recommended Trips</h1>
      {recommended}
    </div>
  );
};

export default TripDetail;
