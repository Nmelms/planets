import React from "react";
import planetImg from "../assets/planet-neptune.svg";
import internalImg from "../assets/planet-neptune-internal.svg";
import surfaceImg from "../assets/geology-neptune.png";
import Layout from "./Layout";

export default function Neptune({ data }) {
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
