import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';
import '../styles.css';

function App() {
  return (
    <div>
      <Header />
        <main className="main">
            <Section />
        </main>
        <Footer />
    </div>
  );
}

export default App;