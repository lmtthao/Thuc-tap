import './App.css';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Sign_in from './Components/Sign_in';
import Timetable from './Components/Timetable';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

function Content() {
  const location = useLocation();

  const isSignInPage = location.pathname === "/";

  return (
    <div>
      {!isSignInPage && <Navbar className="navbar" />}
      <Routes>
        <Route path="/" element={<Sign_in />} />
        <Route path="/main" element={<Main />} />
        <Route path="/tkb" element={<Timetable />} />
      </Routes>
      {!isSignInPage && <Footer className="footer" />}
    </div>
  );
}

export default App;
