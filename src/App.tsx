import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Search from './pages/Search';
import MovieDetails from './pages/MovieDetails';
import Login from './pages/Login'; // Login 페이지 추가
import SignUp from './pages/SignUp'; // SignUp 페이지 추가

const App: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/search" element={<Search />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/login" element={<Login />} /> {/* Login 경로 */}
                <Route path="/signup" element={<SignUp />} /> {/* SignUp 경로 */}
            </Routes>
        </Router>
    );
};

export default App;
