import React, { useState } from "react";
import './Formulario.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    telefono: ''
  });

  const [personas, setPersonas] = useState([]);

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

    setPersonas([...personas, formData]);

    setFormData({
      nombre: '',
      apellido: '',
      telefono: ''
    });
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
            id="nombre" 
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
            id="apellido" 
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
            id="telefono" 
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