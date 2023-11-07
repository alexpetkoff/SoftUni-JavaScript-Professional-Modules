import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {

  return (
    <div>

      <Header />

      <main className="main">
      <ToDoList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
