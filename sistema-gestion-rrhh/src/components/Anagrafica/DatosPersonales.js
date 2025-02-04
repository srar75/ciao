import React, { useState } from 'react';

const DatosPersonales = ({ candidato }) => {
    const [nombre, setNombre] = useState(candidato.nombre || '');
    const [apellido, setApellido] = useState(candidato.apellido || '');
    const [codigoFiscal, setCodigoFiscal] = useState(candidato.codigoFiscal || '');
    const [fechaNacimiento, setFechaNacimiento] = useState(candidato.fechaNacimiento || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se pueden agregar las funciones para guardar los datos
        console.log('Datos guardados:', { nombre, apellido, codigoFiscal, fechaNacimiento });
    };

    return (
        <div>
            <h2>Datos Personales</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input 
                        type="text" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Apellido:</label>
                    <input 
                        type="text" 
                        value={apellido} 
                        onChange={(e) => setApellido(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Código Fiscal:</label>
                    <input 
                        type="text" 
                        value={codigoFiscal} 
                        onChange={(e) => setCodigoFiscal(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Fecha de Nacimiento:</label>
                    <input 
                        type="date" 
                        value={fechaNacimiento} 
                        onChange={(e) => setFechaNacimiento(e.target.value)} 
                    />
                </div>
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};

export default DatosPersonales;