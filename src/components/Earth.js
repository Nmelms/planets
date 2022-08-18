import React from "react";
import planetImg from "../assets/planet-earth.svg";
import internalImg from "../assets/planet-earth-internal.svg";
import surfaceImg from "../assets/geology-earth.png";
import Layout from "./Layout.js";

export default function Earth({ data }) {
  return (
    <Layout
      surfaceImg={surfaceImg}
      internalImg={internalImg}
      planetImg={planetImg}
      data={data}
    />
  );
}
