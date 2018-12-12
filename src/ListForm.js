import React, { Component } from 'react';
import ListFormInput from './ListFormInput';

export default function ListForm() {

  const inputsByAttributes = [
      { type: 'email', name: 'email', placeholder: 'E-Mail' },
      { type: 'text', name: 'nickname', placeholder: 'Nickname' },
      { type: 'text', name: 'ip', placeholder: 'IP Address' },
      ];

  const inputs = inputsByAttributes.map(({ type, name, placeholder }) => <ListFormInput type={type} name={name} placeholder={placeholder} key={name}/>);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };


  return (
      <form onSubmit={handleFormSubmit}>
          {inputs}
          <button type={'submit'}>Submit</button>

      </form>
  )
}
