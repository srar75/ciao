import React, { useState } from 'react';

const FormularioPersonal = () => {
    const [nombre, setNombre] = useState('');
    const [cognome, setCognome] = useState('');
    const [codigoFiscal, setCodigoFiscal] = useState('');
    const [dataNascita, setDataNascita] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí se puede manejar el envío del formulario
        console.log({ nombre, cognome, codigoFiscal, dataNascita });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre:</label>
                <input 
                    type="text" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Cognome:</label>
                <input 
                    type="text" 
                    value={cognome} 
                    onChange={(e) => setCognome(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Código Fiscal:</label>
                <input 
                    type="text" 
                    value={codigoFiscal} 
                    onChange={(e) => setCodigoFiscal(e.target.value)} 
                    required 
                />
            </div>
            <div>
                <label>Fecha de Nacimiento:</label>
                <input 
                    type="date" 
                    value={dataNascita} 
                    onChange={(e) => setDataNascita(e.target.value)} 
                    required 
                />
            </div>
            <button type="submit">Crear Perfil</button>
        </form>
    );
};

export default FormularioPersonal;