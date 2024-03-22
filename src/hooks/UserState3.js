import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button';


class UserState3 extends Component {

  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
  }

  handalOnClickIncrement = (e) =>{
    this.setState({
      count: this.state.count+1
    });
  }

  handalOnClickDecrement = (e) =>{
    this.setState({
      count: this.state.count-1
    });
  }

  render() {
    return (
      <div>
        <h1>Count : { this.state.count }</h1>
        <Button onClick={this.handalOnClickIncrement}>+</Button> 
        <Button onClick={this.handalOnClickDecrement}>-</Button>
      </div>
    )
  }
}
export default UserState3;
