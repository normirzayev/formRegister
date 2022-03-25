import React from "react";

export default function Movie(props) {
  const { Title, Year, Type, Poster } = props;
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img src={Poster} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">Card Title{Title}</span>
        <p>{Year} <span>{Type}</span></p>
      </div>
    </div>
  )
}