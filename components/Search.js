import React from "react";

export default class Search extends React.Component{

 state = {
  movie: ""
 }
  
 handleKey = (e) => {
   if(e.key === 'Enter'){
     this.props.searchMovie(this.state.movie)
     this.setState({movie: ""})
   }
 }

 handleButton = () => {
  this.props.searchMovie(this.state.movie)
  this.setState({movie: ""})
}

  render(){
    return(
      <div className="kattaDiv">
        <div className="input-field search">
          <input 
            type="search" 
            className="validate" 
            placeholder="Search..."
            value={this.state.movie}
            onChange={(e) => this.setState({movie: e.target.value})}
            onKeyDown={this.handleKey}
          />
          {this.state.movie.length ? <span onClick={() => this.setState({movie : ""})}>X</span> : ""}
          
        </div>
        <button 
          className="btn"
          onClick={this.handleButton} 
        >Search
        </button>
      </div>
    )
  }
}