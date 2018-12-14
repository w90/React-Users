import React from 'react';

export default function ListFormInput({ type, name, value, placeholder, handleInputChange }) {
  return (
      <input
          className={'user-input'}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
      />
  )
}

