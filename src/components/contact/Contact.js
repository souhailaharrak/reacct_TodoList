import React, { Component } from 'react';

class Contact extends Component {
    render() {
        const { name, tel, Email } = this.props;
        return (
          <div>
            <h1>Conatct:{name}</h1>
            <ul>
              <li>Telephone:{tel}</li>
              <li>Email:{Email}</li>
            </ul>
          </div>
        );
    }
}
Contact.defaultProps={
    name:"my name",
    tel:"9839745",
   Email:"hdfhrif@fgjr"
}
export default Contact;
