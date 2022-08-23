import React, { useState } from "react";
import srcIcon from "../assets/icon-source.svg";

export default function Layout({ data, planetImg, internalImg, surfaceImg }) {
  const [description, setDescription] = useState(data.overview.content);
  const [source, setSource] = useState(data.overview.source);
  const [activeElement, setActiveElement] = useState("overview");

  const handleClick = (content, source, id) => {
    setDescription(content);
    setSource(source);
    setActiveElement(`${id}`);
  };

  const mouseOver = (e) => {
    e.target.style.background = `${data.color}`;
    console.log("over");
  };
  const mouseLeave = (e) => {
    e.target.style.background = "none";
  };

  return (
    <div className="wrapper">
      <div className="infoSelect">
        <div className="infoSelectItem">
          <button
            onMouseLeave={(e) => mouseLeave(e)}
            onMouseOver={(e) => mouseOver(e)}
            style={{
              color: activeElement === "overview" ? `white` : "",
              borderBottom:
                activeElement === "overview" ? `2px solid ${data.color}` : "",
            }}
            onClick={() =>
              handleClick(
                data.overview.content,
                data.overview.source,
                "overview"
              )
            }
            id="overview"
          >
            OVERVIEW
          </button>
        </div>
        <div className="infoSelectItem">
          <button
            onMouseLeave={(e) => mouseLeave(e)}
            onMouseOver={(e) => mouseOver(e)}
            style={{
              color: activeElement === "structure" ? `white` : "",
              borderBottom:
                activeElement === "structure" ? `2px solid ${data.color}` : "",
            }}
            onClick={() =>
              handleClick(
                data.structure.content,
                data.structure.source,
                "structure"
              )
            }
            id="structure"
          >
            {" "}
            STRUCTURE
          </button>
        </div>
        <div className="infoSelectItem">
          <button
            onMouseLeave={(e) => mouseLeave(e)}
            onMouseOver={(e) => mouseOver(e)}
            style={{
              color: activeElement === "surface" ? "white" : "",
              borderBottom:
                activeElement === "surface" ? `2px solid ${data.color}` : "",
            }}
            onClick={() =>
              handleClick(data.geology.content, data.geology.source, "surface")
            }
            id="surface"
          >
            SURFACE
          </button>
        </div>
      </div>

      <div style={{ display: "none" }} className="navBar">
        <h2>Planets</h2>
        <div className="linkList">
          <button>MERCURY</button>
          <button>VENUS</button>
          <button>EARTH</button>
          <button>MARS</button>
          <button>jupiter</button>
          <button>SATURN</button>
          <button>URANUS</button>
          <button>NEPTUNE</button>
        </div>
      </div>

      <div className="planetDiv">
        {description === data.overview.content && (
          <img alt="planet" className="planetImg" src={planetImg} />
        )}
        {description === data.structure.content && (
          <img alt="planet" className="planetImg" src={internalImg} />
        )}
        {description === data.geology.content && (
          <>
            <img alt="planet" className="planetImg" src={planetImg} />{" "}
            <img alt="planet" className="surfaceImg" src={surfaceImg} />
          </>
        )}
      </div>

      <div className="descriptBox">
        <h2>{data.name.toUpperCase()}</h2>
        <p>{description}</p>
        <p className="source">
          Source: <a href={source}>Wikipedia</a>{" "}
          <img alt="link icon" className="srcIcon" src={srcIcon} />
        </p>
      </div>

      <div className="stats">
        <div className="statsItem">
          <h4>ROTATION TIME</h4>
          <h3>{data.rotation}</h3>
        </div>
        <div className="statsItem">
          <h4>REVOLUTION TIME</h4>
          <h3>{data.revolution}</h3>
        </div>
        <div className="statsItem">
          <h4>RADIUS</h4>
          <h3>{data.radius}</h3>
        </div>
        <div className="statsItem">
          <h4>AVERAGE TEMP.</h4>
          <h3>{data.temperature}</h3>
        </div>
      </div>
    </div>
  );
}
