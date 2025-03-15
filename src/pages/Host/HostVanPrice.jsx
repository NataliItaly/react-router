import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Price() {
  const { van } = useOutletContext();
  return (
    <p className="van-price">
      <span>${van.price}</span>/day
    </p>
  );
}
