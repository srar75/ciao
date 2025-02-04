import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Anagrafica from './components/Anagrafica/DatosPersonales';
import FormularioPersonal from './components/Anagrafica/FormularioPersonal';
import Entrevistas from './components/PreContratacion/Entrevistas';
import Evaluaciones from './components/PreContratacion/Evaluaciones';
import GestorDocumentos from './components/Documentos/GestorDocumentos';
import Validaciones from './components/Documentos/Validaciones';
import ListaEmpleados from './components/Panorama/ListaEmpleados';
import Estadisticas from './components/Panorama/Estadisticas';
import GestorCV from './components/CV/GestorCV';
import Plantillas from './components/CV/Plantillas';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/anagrafica" component={Anagrafica} />
                <Route path="/formulario-personal" component={FormularioPersonal} />
                <Route path="/pre-contratacion/entrevistas" component={Entrevistas} />
                <Route path="/pre-contratacion/evaluaciones" component={Evaluaciones} />
                <Route path="/documentos/gestor" component={GestorDocumentos} />
                <Route path="/documentos/validaciones" component={Validaciones} />
                <Route path="/panorama/lista-empleados" component={ListaEmpleados} />
                <Route path="/panorama/estadisticas" component={Estadisticas} />
                <Route path="/cv/gestor" component={GestorCV} />
                <Route path="/cv/plantillas" component={Plantillas} />
            </Switch>
        </Router>
    );
}

export default App;