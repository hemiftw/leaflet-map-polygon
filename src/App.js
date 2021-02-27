import React from "react";
import "./App.css";
import Map from "./components/map";
import data from "./components/data.json";

export default function App() {
  return (
    <Map  zoom={14} data={data} />
  );
}
