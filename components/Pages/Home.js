import React,{useContext} from "react";
import { DataContext } from "../context/DataContext";
const Home = () =>{
  const {data,dark,dataSend} = useContext(DataContext);
  return(
    <>
      <h1 style={dark ? {color:"white"} : {color:"black"}}>Salom home pages</h1>
      <p>{data.age}</p>
      <button onClick={()=>dataSend("salom")}>
        Send
      </button>
    </>
  )
}
export default Home;