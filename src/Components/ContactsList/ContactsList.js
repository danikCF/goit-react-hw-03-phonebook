import React from 'react'

export default function ContactsList({contacts,onRemoveContact}) {
  return (
    <div>
      <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button type="button" onClick={() => onRemoveContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
    </div>
  )
}
