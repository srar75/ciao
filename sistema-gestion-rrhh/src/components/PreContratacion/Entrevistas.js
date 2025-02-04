import React, { useState } from 'react';

const Entrevistas = () => {
    const [entrevistas, setEntrevistas] = useState([]);
    const [nuevaEntrevista, setNuevaEntrevista] = useState({ fecha: '', candidato: '', resultado: '' });

    const agregarEntrevista = () => {
        setEntrevistas([...entrevistas, nuevaEntrevista]);
        setNuevaEntrevista({ fecha: '', candidato: '', resultado: '' });
    };

    return (
        <div>
            <h2>Sección de Entrevistas</h2>
            <form onSubmit={(e) => { e.preventDefault(); agregarEntrevista(); }}>
                <input 
                    type="date" 
                    value={nuevaEntrevista.fecha} 
                    onChange={(e) => setNuevaEntrevista({ ...nuevaEntrevista, fecha: e.target.value })} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Nombre del Candidato" 
                    value={nuevaEntrevista.candidato} 
                    onChange={(e) => setNuevaEntrevista({ ...nuevaEntrevista, candidato: e.target.value })} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="Resultado" 
                    value={nuevaEntrevista.resultado} 
                    onChange={(e) => setNuevaEntrevista({ ...nuevaEntrevista, resultado: e.target.value })} 
                    required 
                />
                <button type="submit">Agregar Entrevista</button>
            </form>
            <h3>Lista de Entrevistas</h3>
            <ul>
                {entrevistas.map((entrevista, index) => (
                    <li key={index}>
                        {entrevista.fecha} - {entrevista.candidato} - {entrevista.resultado}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Entrevistas;