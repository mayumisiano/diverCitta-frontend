import React from 'react';
import 
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