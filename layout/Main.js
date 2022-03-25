import React from "react";
import axios from "axios";
import Movies from "../components/Movies";
import Loading from "../components/Loading";
import Search from "../components/Search";
export default class Main extends React.Component{
  state = {
    movies: [],
  }
  
  componentDidMount() {
    axios({
      mehtod:"get",
      url:"http://www.omdbapi.com/?apikey=425bdf7b&s=tom"
    })
    .then((data) => this.setState({movies : data.data.Search}))
  }
  
  handleSearch = (name) => {
    axios({
      mehtod:"get",
      url:`http://www.omdbapi.com/?apikey=425bdf7b&s=${name}`
    })
    .then((data) => this.setState({movies : data.data.Search}))
    .catch(() => alert("xato nom kiritdingiz"))
  }
  
  render(){
    return(
      <div className="main">
        <div>
          <Search searchMovie={this.handleSearch} />
        </div>
        {
          this.state.movies.length 
          ? <Movies movie = {this.state.movies} />
          : <Loading />
        }
      </div>
    )
  }
}