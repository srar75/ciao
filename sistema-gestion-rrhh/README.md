# Sistema de Gestión de Recursos Humanos

Este proyecto es una aplicación para la gestión de recursos humanos, que incluye funcionalidades para manejar datos personales, procesos de pre-contratación, gestión de documentos, y un resumen de empleados.

## Estructura del Proyecto

- **src/assets/styles/main.css**: Estilos CSS principales para la aplicación.
- **src/components/Anagrafica**: Componentes para la gestión de datos personales.
  - **DatosPersonales.js**: Maneja la visualización y edición de los datos personales del candidato.
  - **FormularioPersonal.js**: Presenta el formulario para la creación de un nuevo perfil del candidato.
- **src/components/PreContratacion**: Componentes para el proceso de pre-contratación.
  - **Entrevistas.js**: Gestiona la sección de entrevistas.
  - **Evaluaciones.js**: Maneja las evaluaciones de los candidatos.
- **src/components/Documentos**: Componentes para la gestión de documentos.
  - **GestorDocumentos.js**: Encargado de la gestión de documentos.
  - **Validaciones.js**: Realiza las validaciones necesarias para los documentos subidos.
- **src/components/Panorama**: Componentes para el resumen de empleados.
  - **ListaEmpleados.js**: Muestra un listado de todos los empleados.
  - **Estadisticas.js**: Presenta estadísticas relacionadas con los empleados.
- **src/components/CV**: Componentes para la gestión de currículums.
  - **GestorCV.js**: Gestiona la carga y catalogación de currículums.
  - **Plantillas.js**: Proporciona plantillas para la visualización de currículums.
- **src/services**: Servicios para interactuar con la API y gestionar almacenamiento.
  - **api.js**: Funciones para interactuar con la API del sistema.
  - **storage.js**: Funciones para gestionar el almacenamiento local de datos.
- **src/utils/helpers.js**: Funciones utilitarias utilizadas en la aplicación.
- **src/App.js**: Componente principal de la aplicación.
- **src/index.js**: Punto de entrada de la aplicación.

## Instalación

1. Clona el repositorio.
2. Navega a la carpeta del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar la aplicación.

## Uso

Accede a la aplicación en tu navegador en `http://localhost:3000`.