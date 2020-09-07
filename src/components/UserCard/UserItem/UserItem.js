import React, { Component } from 'react';



export default class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      isPicked: false
    };

      

  }
render() {
    const {
      name,
      location,
      phone,
      email,
      picture: { medium: imgSrc },
    } = this.props;

    return (
      <div  >
        

      <div >
        {this.state.isPicked ? alert( `${name.first} ${name.last}`) : 'off'}
        <img  src={imgSrc} />
        <div>{`${name.first} ${name.last}`}</div>
        <div>{`Telephone number: ${phone}`}</div>
        <div>{`${location.country}, ${location.city}`}</div>
        <div onClick={this.pic}>DELETE</div>
        
      </div>
      </div>
    );
  }
}