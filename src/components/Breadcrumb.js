import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styling/breadcrumbs.css";

const Breadcrumb = (props) => {
  const [activeTab, setactiveTab] = useState("Home");
  const location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setactiveTab("Home");
        break;
      case "/project":
        setactiveTab("Project");
        break;
      case "/setting":
        setactiveTab("Setting");
        break;
      case "/game":
        setactiveTab("Game");
        break;
        default:
            break;
    }
  }, [location]);
  

  return (
    <div className="breadcrumb" >
      {props.items.map((value, index) => {
        return (
          <Link
            className={`${activeTab === value.name ? "active" : "breadcrumlink"}`}
            to={value.path}
            key={index}
          >
            {value.name}   <span> {">"} </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
