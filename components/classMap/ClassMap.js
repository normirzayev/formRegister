import React, {Component} from "react";
import Posts from "./Posts";
import "./style/class.css";
class ClassMap extends Component{
  constructor(){
    super()
    this.state = {
      post: [
        { id : 1, name : "javaScript" },
        { id : 2, name : "Pyhon" },
        { id : 3, name : "Java" }
      ]
    }
  };

  delete = (id) => {
    this.setState({post: this.state.post.filter(prev => prev.id !== id)})
  }

  render(){
    return(
      <div className="box">
        <Posts props = {this.state.post} rem = {this.delete} />
      </div>
    )
  }
}

export default ClassMap;