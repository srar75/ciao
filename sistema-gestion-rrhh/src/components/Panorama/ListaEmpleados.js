import React, { useEffect, useState } from 'react';
import { getEmployees } from '../../services/api';

const ListaEmpleados = () => {
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const data = await getEmployees();
            setEmpleados(data);
        };

        fetchEmployees();
    }, []);

    return (
        <div>
            <h2>Lista de Empleados</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Código Fiscal</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {empleados.map((empleado) => (
                        <tr key={empleado.codiceFiscale}>
                            <td>{empleado.nome} {empleado.cognome}</td>
                            <td>{empleado.codiceFiscale}</td>
                            <td><span className={`status-${empleado.status}`}>{empleado.status}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListaEmpleados;