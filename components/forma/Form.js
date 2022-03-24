import React from "react";
import "./style/form.css";
export default class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      email: "",
      subscript: false,
      name:""
    }
    this.emailRef = React.createRef();
    this.nameRef = React.createRef();
  }

  changeHalde = (e) => {
    this.setState({[e.target.name] : e.target.value}, () => {
      if(this.state.email.length === 15) {
        this.nameRef.current.focus();
      }
    })
  }
  
  componentDidMount() {
    this.emailRef.current.focus();
  }
  checkedHalde = (e) => {
    this.setState({[e.target.name] : e.target.checked})
  }
  
 
  submitdata = (e) =>{
    e.preventDefault();
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regex.test(this.state.email)){
      alert("email da xatolik bor")
      return
    }
    if (!this.state.subscript){
      alert("Shartalga rozi bo'lmadingiz")
      return
    } 
    this.setState({email: "", subscript: false})
    alert("thank you for subscript")
  }
  render() {
    const {email, subscript, name} = this.state
    return (
      <div>
        <form 
          onSubmit={this.submitdata}
        >
          <h1 className="text-center">Form</h1>
          <input 
            type="text"
            placeholder="email"
            className="form-control my-2"
            name="email"
            defaultValue={email}
            onChange={this.changeHalde}
            ref={this.emailRef}
          />
          <input 
            type="text"
            placeholder="name"
            className="form-control my-2"
            name="name"
            defaultValue={name}
            onChange={this.changeHalde}
            ref={this.nameRef}
          />
          <label>
            <input 
              className="mx-1"
              type="checkbox"
              name='subscript'
              checked={subscript}
              onChange={this.checkedHalde}
            />
            Yuqoridagi shartlarga roziman!
          </label>
          <input 
            className="form-control bg-success mt-3 text-light"
            type="submit" 
            value="Send" 
          />
        </form>
      </div>
    )
  }
}