import React, { Component } from "react";

export class Input extends Component {
  getClassCSS = () => {
    let cssClass = "Input InputElement"
    if(this.props.error.status && this.props.error.isTouched) cssClass += " Invalid"
    return cssClass
  }
 
 
 
  render() {
    

    return (
      <>
        <input
          name={this.props.name}
          placeholder={this.props.placeholder}
          className={this.getClassCSS()}
          onChange={this.props.onChangeInput}
          value={this.props.value}
          error = {this.props.error}
        />
        <p className="ErrorMessage">{this.props.error.message}</p>
      </>
    );
  }
}

export default Input;
