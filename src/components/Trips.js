const Trips = (props) => {
  let trips = props.data.map((trip) => {
    return (
      <div>
        <h1>{trip.name}</h1>
        <img src={trip.img} />
        <p>{trip.difficulty}</p>
        <p>{trip.length1}</p>
        <p>{trip.details}</p>
      </div>
    );
  });

  return <div>{trips}</div>;
};
export default Trips;
