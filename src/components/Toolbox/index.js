import React, { useState } from "react";
import classes from "./index.module.css";
import classNames from "classnames";
import { FaSlash } from "react-icons/fa";
import { TbRectangle } from "react-icons/tb";

export const Toolbox = () => {
  const [activeToolItem, setActiveToolItem] = useState("A");
  return (
    <div className={classes.container}>
      <div
        className={classNames(classes.toolItem, {
          [classes.active]: activeToolItem === "Line",
        })}
        onClick={() => setActiveToolItem("Line")}
      >
        <FaSlash />
      </div>
      <div
        className={classNames(classes.toolItem, {
          [classes.active]: activeToolItem === "Rectanlgle",
        })}
        onClick={() => setActiveToolItem("Rectanlgle")}
      >
        <TbRectangle />
      </div>
    </div>
  );
};

export default Toolbox;
