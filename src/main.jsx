import React from "react";
import ReactDom from "react-dom/client";
import RandomNumber from "./component";

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<RandomNumber></RandomNumber>)