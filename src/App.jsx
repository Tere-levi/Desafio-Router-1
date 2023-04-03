import { Routes, Route } from 'react-router-dom';

import Contacto from './pages/Contacto';
import Home from './pages/Home';
import Navbar from './components/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <footer className="bg-warning text-dark text-center py-3 mt-5">
        Todos los derechos son reservados
      </footer>
    </div>
  );
};

export default App;
