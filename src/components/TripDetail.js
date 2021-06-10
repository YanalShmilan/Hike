import { Redirect, useParams } from 'react-router-dom';

const TripDetail = (props) => {
  const { tripSlug } = useParams();
  let trip = props.trips.find((trip) => trip.slug === tripSlug);
  //   if (!trip) return <Redirect to="/"></Redirect>;
  return (
    <div>
      <h1>{trip.name}</h1>
      <img src={trip.img} alt="" />
      <p>{trip.details}</p>
      <p>{trip.length1}</p>
      <p>{trip.difficulty}</p>
    </div>
  );
};

export default TripDetail;
