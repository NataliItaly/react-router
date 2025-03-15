import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Info() {
  const { van } = useOutletContext();
  console.log("van info", van);
  return (
    <>
      {van ? (
        <section className="host-van-detail-info">
          <h4>
            Name: <span>{van.name}</span>
          </h4>
          <h4>
            Category: <span>{van.type}</span>
          </h4>
          <h4>
            Description: <span>{van.description}</span>
          </h4>
          <h4>
            Visibility: <span>Public</span>
          </h4>
        </section>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
/**
 * <i className={`van-type ${van.type} selected`}>{van.type}</i>
      <p>{van.description}</p>
      <button className="link-button">Rent this van</button>
 */
