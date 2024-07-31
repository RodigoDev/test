import React, { useState, useEffect } from "react";
import './Formulario.css';

const Formulario = () => {

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: ''
  });

  const [personas, setPersonas] = useState([]);

  const loadContacts = () => {
    fetch("http://localhost:8081/contacts")
      .then(response => response.json())
      .then(data => {
        setPersonas(data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const createContact = () => {
    fetch("http://localhost:8081/contact", {
      method: "POST",
      body: JSON.stringify(formData)
    })
    .then(data => {
      setFormData({
        Nombre: '',
        Apellido: '',
        Telefono: ''
      });
      loadContacts()
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => { loadContacts()}, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    createContact()
  };


  return (
    <div className="columns">
    <div className="form-container">
      <h2>FORMULARIO</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input 
            type="text" 
            id="Nombre" 
            name="nombre" 
            value={formData.nombre} 
            onChange={handleChange} 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido:</label>
          <input 
            type="text" 
            id="Apellido" 
            name="apellido" 
            value={formData.apellido} 
            onChange={handleChange} 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input 
            type="tel" 
            id="Telefono" 
            name="telefono" 
            value={formData.telefono} 
            onChange={handleChange} 
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      </div>

      <div className="lista-personas">
        <h3>LISTA PERSONAS</h3>
        <ul>
          {personas.map((persona, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {persona.nombre} <br />
              <strong>Apellido:</strong> {persona.apellido} <br />
              <strong>Teléfono:</strong> {persona.telefono}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Formulario;