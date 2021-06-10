import { useState } from 'react';
import TripCard from './TripCard';

const Trips = (props) => {
  let [query, setQuery] = useState('');

  let trips = props.data
    .filter((trip) => trip.name.toLowerCase().includes(query))
    .map((trip) => {
      return (
        <div>
          <TripCard trip={trip} />
        </div>
      );
    });

  return (
    <div>
      <input
        placeholder="search"
        onChange={(event) => {
          setQuery(event.target.value.toLowerCase());
        }}
      ></input>
      {trips}
    </div>
  );
};
export default Trips;
