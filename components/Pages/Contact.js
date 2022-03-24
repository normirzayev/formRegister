import React,{useContext} from "react";
import { DataContext } from "../context/DataContext";
const Contact = () =>{
  const {data,dark} = useContext(DataContext);
  return(
    <>
      <h1 style={dark ? {color:"white"} : {color:"black"}}>Salom Contact pages</h1>
      <p>{data.age}</p>
    </>
  )
}
export default Contact;