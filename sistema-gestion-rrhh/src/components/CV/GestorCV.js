import React, { useState } from 'react';

const GestorCV = () => {
    const [curriculums, setCurriculums] = useState([]);
    const [newCV, setNewCV] = useState({ nombre: '', archivo: null });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCV({ ...newCV, [name]: value });
    };

    const handleFileChange = (e) => {
        setNewCV({ ...newCV, archivo: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para cargar el currículum
        const updatedCurriculums = [...curriculums, newCV];
        setCurriculums(updatedCurriculums);
        setNewCV({ nombre: '', archivo: null });
    };

    return (
        <div>
            <h2>Gestor de Currículums</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    value={newCV.nombre}
                    onChange={handleInputChange}
                    placeholder="Nombre del Currículum"
                    required
                />
                <input
                    type="file"
                    onChange={handleFileChange}
                    required
                />
                <button type="submit">Cargar Currículum</button>
            </form>
            <h3>Currículums Cargados</h3>
            <ul>
                {curriculums.map((cv, index) => (
                    <li key={index}>{cv.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default GestorCV;