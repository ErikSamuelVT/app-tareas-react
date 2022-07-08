import './Estilos/App.css';
import logo from './imagenes/logo.jpg'

import ListaTareas from './Componentes/ListaTareas';

function App() {
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img className="img-logo" src={logo} alt="Logo" />
      </div>
      <div className="lista-tareas">
        <h1>Mis Tareas</h1>
        <ListaTareas/>
      </div>
    </div>
  );
}

export default App;
