import './styles.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Navigation />
      <Header />

      <Routes>
        <Route path="/" element={<Section />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;
