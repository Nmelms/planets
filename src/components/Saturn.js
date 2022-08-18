import React from "react";
import planetImg from "../assets/planet-saturn.svg";
import internalImg from "../assets/planet-saturn-internal.svg";
import surfaceImg from "../assets/geology-saturn.png";
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
