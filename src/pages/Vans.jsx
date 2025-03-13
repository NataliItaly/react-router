import React from "react";
import { Link } from "react-router-dom";
import VanDetail from "./VanDetail";

export default function Vans() {
  const [allVans, setAllVans] = React.useState([]);

  React.useEffect(function () {
    fetch("../api/vans")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.vans);
        setAllVans(data.vans);
      });
  }, []);

  const vans = allVans.map((van) => (
    <div key={van.id}>
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name},
                             priced at $${van.price} per day`}
      >
        <img src={van.imageUrl} alt="" />
        <h3>{van.name}</h3>
        <p>{van.price}</p>
        <p>{van.description}</p>
      </Link>
    </div>
  ));

  return (
    <>
      <h1>Vans page goes here 🚐</h1>
      <div>{vans ? vans : null}</div>
    </>
  );
}
