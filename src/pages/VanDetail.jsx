import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  console.log(params.id);

  const location = useLocation();

  const [van, setVan] = React.useState(null);

  React.useEffect(
    function () {
      fetch(`../api/vans/${params.id}`).then((response) =>
        response.json().then((data) => {
          setVan(data.vans);
        })
      );
    },
    [params.id]
  );
  const backPath = location.state?.search || "";
  const backPathType = location.state.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..?${backPath}`} relative="path" className="back-button">
        &larr; <span>Back to {backPathType} vans</span>
      </Link>

      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
