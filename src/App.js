import logo from './resources/images/OliDeVgrey.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import AppRoutes from './routes/AppRoutes.jsx'

function App() {
  return (
    <div className="App"> 
        <AppRoutes />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <p>Web en progreso</p>
      </header>
    </div>
  );
}

export default App;
