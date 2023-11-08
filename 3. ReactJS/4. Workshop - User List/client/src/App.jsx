import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import '../styles.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
        <main className="main">
          
        </main>
        <Footer />
    </div>
  );
}

export default App;
