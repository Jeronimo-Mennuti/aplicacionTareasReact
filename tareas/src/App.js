
import './App.css';
import freecodecampLogo from './imagenes/FreeCodeCampLogo.png';
import Tarea from './componentes/Tarea'



function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img src={freecodecampLogo} className='freecodecamp-logo' alt='logo-freecodecamp'
        />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea texto='Aprender React'/>
      </div>
    </div>
  );
}

export default App;
