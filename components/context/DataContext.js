import React, { useState } from "react";

export const DataContext = React.createContext();

const DataContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const darkFun = () => setDark(!dark)

  let data = {
    name: "Abduvali",
    age: 21
  }
  const dataSend = (value) =>{
    console.log(value);
  }
  
  const togle = () => {
    alert(malumot.malumot);
  }

  const [malumot, setMalumot] = useState({
    malumot:""
  })

  const onchange = (e) => {
    setMalumot({...malumot, [e.target.name]: e.target.value})
  } 

  return (
    <DataContext.Provider value={{ data, dark, darkFun, dataSend, togle, onchange, malumot}}>
      {children}
    </DataContext.Provider>
  )
}
export default DataContextProvider;