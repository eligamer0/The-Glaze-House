import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Productos from './pages/Productos';
import Fondo from './components/fondo';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={
            <>
              <Fondo />
              <Home />
            </>
          }
        />
        <Route path="/pages/Productos" element={<Productos />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
