import React,{useContext} from "react";
import { DataContext } from "../context/DataContext";
const About = () => {
  const {data, dark, togle, malumot, onchange } = useContext(DataContext);



  return(
    <>
      <h1 style={dark ? {color:"white"} : {color:"black"}}>Salom About pages</h1>
      <p>{data.age}</p>
      <h2>{malumot.malumot}</h2>
      <input type="text" name="malumot" value={malumot.malumot}  onChange={onchange} />
      <button onClick={togle}>click me</button>
    </>
  )
}
export default About;