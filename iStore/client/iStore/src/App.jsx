import { Routes, Route } from "react-router-dom";

import AuthContext, { AuthProvider } from "./contexts/AuthContext";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Category from "./components/Category/Category";

function App() {
    return (
        <AuthProvider>
            <Header />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/mac" element={<Category category="MAC" />} />
                </Routes>
            </div>
            <Footer />
        </AuthProvider>
    );
}

export default App;
