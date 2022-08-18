import React from "react";
import planetImg from "../assets/planet-jupiter.svg";
import internalImg from "../assets/planet-jupiter-internal.svg";
import surfaceImg from "../assets/geology-jupiter.png";
import Layout from "./Layout.js";

export default function Jupiter({ data }) {
  return (
    <Layout
      surfaceImg={surfaceImg}
      internalImg={internalImg}
      planetImg={planetImg}
      data={data}
    />
  );
}
