import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body.js'
import Home from './pages/Home.js';
import Projects from './pages/Projects.js';
import Blog from './pages/Blog.js';
import Contact from './pages/Contact.js';

const App = () => {
    return (
        <Router>
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>

            <Body>
                Content content
            </Body>

            <Footer />
        </Router>
    );
}

export default App;

