import React from "react";
import planetImg from "../assets/planet-venus.svg";
import internalImg from "../assets/planet-venus-internal.svg";
import surfaceImg from "../assets/geology-venus.png";
import Layout from "./Layout";

export default function Saturn({ data }) {
  return (
    <Layout
      surfaceImg={surfaceImg}
      internalImg={internalImg}
      planetImg={planetImg}
      data={data}
    />
  );
}
