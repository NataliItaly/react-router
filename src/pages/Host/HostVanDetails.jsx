import React from "react";
import { useParams, NavLink, Link, Outlet } from "react-router-dom";

export default function HostVanDetail() {
  const { id } = useParams();
  const [van, setVan] = React.useState(null);
  console.log(id);
  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data.vans[0]);
        setVan(data.vans[0]);
      });
  }, []);

  console.log(van);
  return (
    <>
      <div className="van-detail-container">
        <Link to=".." relative="path">
          back to all vans
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
      <nav>
        <NavLink
          to="."
          end
          className={({ isActive }) => (isActive ? "active-small" : null)}
        >
          Details
        </NavLink>
        <NavLink
          to="photo"
          className={({ isActive }) => (isActive ? "active-small" : null)}
        >
          Photos
        </NavLink>
        <NavLink
          to="price"
          className={({ isActive }) => (isActive ? "active-small" : null)}
        >
          Price
        </NavLink>
      </nav>
      <Outlet context={{ van }} />
    </>
  );
}
