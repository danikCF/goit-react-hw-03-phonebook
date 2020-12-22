import React, { Component } from 'react';

class ContactsForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact({ name, number });


    this.setState({
      name: "",
      number: "",
    });
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" name="name" id="name" value={name} onChange={this.handleInputChange}></input>
          <br />
          <label htmlFor="number">Number</label>
          <br />
          <input type="text" name="number" id="number " value={number} onChange={this.handleInputChange}></input>
          <br />
          <button type="submit" >Add contact</button>
        </form>
      </>
    )
  }
}

export default ContactsForm;