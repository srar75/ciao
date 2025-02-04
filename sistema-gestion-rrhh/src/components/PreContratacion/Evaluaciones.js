import React, { useState } from 'react';

const Evaluaciones = () => {
    const [evaluaciones, setEvaluaciones] = useState([]);
    const [nuevaEvaluacion, setNuevaEvaluacion] = useState('');

    const agregarEvaluacion = () => {
        if (nuevaEvaluacion) {
            setEvaluaciones([...evaluaciones, nuevaEvaluacion]);
            setNuevaEvaluacion('');
        }
    };

    return (
        <div>
            <h2>Evaluaciones de Candidatos</h2>
            <input
                type="text"
                value={nuevaEvaluacion}
                onChange={(e) => setNuevaEvaluacion(e.target.value)}
                placeholder="Agregar nueva evaluación"
            />
            <button onClick={agregarEvaluacion}>Agregar</button>
            <ul>
                {evaluaciones.map((evaluacion, index) => (
                    <li key={index}>{evaluacion}</li>
                ))}
            </ul>
        </div>
    );
};

export default Evaluaciones;