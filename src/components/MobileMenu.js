import React from "react";
import { useNavigate } from "react-router";
import chevron from "../assets/icon-chevron.svg";

export default function MobileMenu({
  data,
  menuState,
  menuActive,
  setMenuActive,
}) {
  let navigate = useNavigate();

  const handleMobileClick = (name) => {
    setMenuActive(!menuActive);
    if (name === "Earth") {
      navigate("/");
    } else {
      navigate("/" + `${name.toLowerCase()}`);
    }
  };

  return (
    <div className={menuState}>
      {data.map((item, index) => {
        return (
          <div
            onClick={() => handleMobileClick(item.name)}
            key={index}
            className="mobilePlanet"
          >
            <svg height="75" width="50" className="svg">
              <circle
                stroke-width="0"
                cx="10"
                cy="40"
                r="10"
                fill={data[index].color}
              />
            </svg>
            <h2>{item.name}</h2>
            <img alt="arrow icon" src={chevron} className="chevron" />
          </div>
        );
      })}
    </div>
  );
}
