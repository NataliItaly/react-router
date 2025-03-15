import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../api";

export default function Vans() {
  const [allVans, setAllVans] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const filteredType = searchParams.get("type");

  React.useEffect(function () {
    /*fetch("../api/vans")
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.vans);
        setAllVans(data.vans);
      });*/

    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        console.log("data ", data);
        if (data) {
          setAllVans(data);
          console.log("vans from try: ", allVans);
        } else {
          setError(true);
          // error catching doesn't work
        }
      } catch (err) {
        console.log("Error from catch: ", error);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  if (loading) {
    return <h1 aria-live="polite">Loading ...</h1>;
  }

  if (error) {
    console.log("error ", error);
    return <h1 aria-live="assertive">There was an error: {error.message}</h1>;
  }

  if (allVans) {
    const filteredVans = filteredType
      ? allVans.filter((van) => van.type === filteredType)
      : allVans;

    const vans = filteredVans.map((van) => (
      <div key={van.id}>
        <Link
          to={`${van.id}`}
          state={{ search: searchParams.toString(), type: filteredType }}
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

    function handleFilterChange(key, value) {
      setSearchParams((prevParams) => {
        if (value === null) {
          prevParams.delete(key);
        } else {
          prevParams.set(key, value);
        }
        return prevParams;
      });
    }

    return (
      <>
        <h1>Vans page goes here 🚐</h1>
        <div>
          <button
            className={`van-type simple ${
              filteredType === "simple" ? "selected" : ""
            }`}
            onClick={() => handleFilterChange("type", "simple")}
          >
            simple
          </button>
          <button
            className={`van-type luxury ${
              filteredType === "luxury" ? "selected" : ""
            }`}
            onClick={() => handleFilterChange("type", "luxury")}
          >
            luxury
          </button>
          <button
            className={`van-type rugged ${
              filteredType === "rugged" ? "selected" : ""
            }`}
            onClick={() => handleFilterChange("type", "rugged")}
          >
            rugged
          </button>
          {filteredType && (
            <button onClick={() => handleFilterChange("type", null)}>
              clear filter
            </button>
          )}
        </div>
        <div>{vans ? vans : null}</div>
      </>
    );
  }
}
