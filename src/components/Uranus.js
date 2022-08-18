import React from "react";
import planetImg from "../assets/planet-uranus.svg";
import internalImg from "../assets/planet-uranus-internal.svg";
import surfaceImg from "../assets/geology-uranus.png";
import Layout from "./Layout";

export default function Saturn({ data }) {
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
