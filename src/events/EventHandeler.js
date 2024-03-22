import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';


class EventHandeler extends Component {
    constructor(props){
        super(props);
         this.state = {
            changedValue : ''
         }
    }

    handelClick = () =>{
        console.log('Clicked');
    }
    handelOnChange = (e) =>{
        this.setState({
            changedValue : e.target.value
        }, ()=> {
            console.log(this.state.changedValue)
        });
        
    }
  render() {
    return (
      <div>
        <Form.Control onChange={this.handelOnChange}
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <p>{this.state.changedValue}</p>
        <Button>tesfd</Button>
      </div>
    )
  }
}

export default EventHandeler;