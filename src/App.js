import './App.css';
import {Clima} from './Componentes/Clima';

const estilos = {
  header: {
    justifyContent: "space-evenly",
  },
  contenedorGeneral: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap:"40px"
  },
};
function App() {
  return (
      <header className="contenedorGeneral" style={estilos.header}>
      <div style={estilos.contenedorGeneral}>
          <Clima/>
        </div>
      </header>
  );
}

export default App;

// https://www.youtube.com/watch?v=mDnd5rCDk6s
// Video íconos
// https://bas.dev/work/meteocons página Íconos