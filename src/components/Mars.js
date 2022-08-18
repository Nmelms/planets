import React from "react";
import planetImg from "../assets/planet-mars.svg";
import internalImg from "../assets/planet-mars-internal.svg";
import surfaceImg from "../assets/geology-mars.png";
import Layout from "./Layout.js";

export default function Mars({ data }) {
  return (
    <div>
      <Layout
        surfaceImg={surfaceImg}
        internalImg={internalImg}
        planetImg={planetImg}
        data={data}
      />
    </div>
  );
}
