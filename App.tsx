import React from 'react';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import Sobre from './paginas/Sobre/Sobre'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import './App.css';

function App() {
  return (

    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/sobre-nos" element={<Sobre />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario />} />

        <Route path="/login" element={<Login />} />

      </Routes>

      <Footer />
    </Router>

  );
}
export default App;