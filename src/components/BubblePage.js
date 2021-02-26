import React, { useEffect, useState } from "react";
// import axiosWithAuth from "../helpers/axiosWithAuth";
import { axiosFetchColors } from '../helpers/AxiosFetchColors'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  //A useEffect to Fetch Colors on mounting ----------------------------
  useEffect(() => {
    axiosFetchColors()
    .then(res => setColorList(res.data))
    .catch(err => console.log('error?', err))
  })

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.
