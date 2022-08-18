import React from "react";
import planetImg from "../assets/planet-mercury.svg";
import internalImg from "../assets/planet-mercury-internal.svg";
import surfaceImg from "../assets/geology-mercury.png";
import Layout from "./Layout";

export default function Mercury({ data }) {
  return (
    <Layout
      surfaceImg={surfaceImg}
      internalImg={internalImg}
      planetImg={planetImg}
      data={data}
    />
  );
}
