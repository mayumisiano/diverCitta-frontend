import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastrarUsuario/CadastrarUsuario';
import { Grid } from '@material-ui/core';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store/store';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import ListaTema from './components/temas/listaTema/ListaTema';
import Sobre from './paginas/Sobre/index';


function App() {
	return (
		<Provider store={store}>
			<ToastContainer />
			<Router>
				<Navbar />
				<div style={{ minHeight: '100vh' }}>
					<Routes>

						<Route path="/" element={<Login />} />

						<Route path="/home" element={<Home />} />

						<Route path="/cadastrousuario" element={<CadastroUsuario />} />

						<Route path="/sobre-nos" element={<Sobre />} />

						<Route path="/login" element={<Login />} />

						<Route path="/temas" element={<ListaTema />} />

						<Route path="/cadastrousuario" element={<CadastroUsuario />} />

						<Route path="/posts" element={<ListaPostagem />} />

						<Route path="/formularioPostagem" element={<CadastroPostagem />} />

						<Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />

						<Route path="/formularioTema" element={<CadastroTema />} />

						<Route path="/formularioTema/:id" element={<CadastroTema />} />

						<Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

						<Route path="/deletarTema/:id" element={<DeletarTema />} />

					</Routes>
				</div>
				<Footer />
			</Router>
		</Provider>
	);
}

export default App;