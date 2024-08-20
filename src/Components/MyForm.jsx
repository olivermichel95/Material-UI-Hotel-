"use client";
import React, { useState } from 'react';
import InputField from './InputField';
import Button from '@mui/material/Button';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
};

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <InputField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default MyForm;
