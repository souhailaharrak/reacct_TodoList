
import React, { Component } from 'react';

 class Users extends Component {
  render() {
    const {MyArray}=this.props;
    const myArra= MyArray.map(itme=>{
      return (
        <div>
          <h5>{itme.adress}</h5>
          <h5>{itme.tel}</h5>
        </div>
      );
    })
    
    return (
      <div>
        {myArra}
       
      </div>
    );
  }
}


export default Users;