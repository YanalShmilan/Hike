import { useState } from "react";
import TripCard from "./TripCard";
import Select from "react-select";
import Switch from "react-switch";
import { Tooltip } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Trips = (props) => {
  let [query, setQuery] = useState("");
  let [diff, setDiff] = useState("");
  let [length1, setLength1] = useState("20");
  let [kmOrMile, setkmOrMile] = useState("km");
  const history = useHistory();

  const diffOp = [
    { value: undefined, label: "None" },
    { value: "hard", label: "Hard" },
    { value: "moderate", label: "Moderate" },
    { value: "easy", label: "Easy" },
  ];
  let lengthOp = [
    { value: undefined, label: "None" },
    { value: "10", label: "10Km" },
    { value: "20", label: "20Km" },
    { value: "30", label: "30Km" },
  ];
  if (kmOrMile === "mile") {
    lengthOp = [
      { value: undefined, label: "None" },
      { value: "10", label: "6.2 Miles" },
      { value: "20", label: "12.4 Miles" },
      { value: "30", label: "18.6 Miles" },
    ];
  }

  let trips = props.data;

  if (diff) {
    trips = trips.filter((trip) => trip.difficulty == diff);
    history.push({
      pathname: "/trips/",
      search: diff,
    });
  }
  if (length1) {
    trips = trips.filter((trip) => trip.length1 <= length1);
  }
  trips = trips
    .filter(
      (trip) =>
        trip.name.toLowerCase().includes(query) ||
        trip.city.toLowerCase().includes(query)
    )
    .map((trip) => {
      return (
        <div>
          <TripCard trip={trip} type={kmOrMile} />
        </div>
      );
    });

  return (
    <div>
      <Select
        className="selc"
        options={diffOp}
        onChange={(e) => setDiff(e.value)}
      />
      <div className="conent">
        <div className="swi">
          mile
          <Switch
            onChange={() =>
              kmOrMile === "km" ? setkmOrMile("mile") : setkmOrMile("km")
            }
            checked={kmOrMile === "km" ? true : false}
          />
          Km
        </div>
        <div className="tool">
          <Tooltip>
            <input
              type="range"
              min="10"
              max="30"
              step="10"
              value={length1}
              onChange={(event) => setLength1(event.target.value)}
              class="slider"
              id="myRange"
            />
          </Tooltip>
        </div>
        <div className="sear">
          <input
            className="ch"
            placeholder="search"
            onChange={(event) => {
              setQuery(event.target.value.toLowerCase());
            }}
          ></input>
        </div>
      </div>
      {trips}
    </div>
  );
};
export default Trips;
