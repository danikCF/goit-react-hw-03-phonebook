import '../index'
import React, { Component } from 'react'
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import { v4 as uuidv4 } from 'uuid';
import Filter from './Filter/Filter';


class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: '',
    number: '',
    filter: ''
  }
  addContact = (contact) => {
    const { name, number } = contact;
    const { contacts } = this.state;

    if (contacts.findIndex((contact) => contact.name === name) !== -1) {
      alert(`${name} is already in contacts`);
      return;
    }


    const newContact = {
      id: uuidv4(),
      name,
      number
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      }
    })
  }
  changeFilter = (filter) => {
    this.setState({ filter });
  }

  getVisiblecontacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };



  removeContact = (ContactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id !== ContactId
        ),
      };
    });
  };


  componentDidMount() {
    console.log("ComponentDidMount");

    const storage = localStorage.getItem("contacts");

    if (storage) {
      this.setState({
        contacts: JSON.parse(storage),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("ComponentDidUpdate");

    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state
    const visibleContact = this.getVisiblecontacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filter} onChangeFilter={this.changeFilter} />
        )}
        <ContactsList onRemoveContact={this.removeContact} contacts={visibleContact} />
      </>
    )
  }
}

export default App;
