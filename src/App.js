import './App.css';
import Blank from './Components/Blank';
import Blank2 from './Components/Blank2';
import Blank3 from './Components/Blank3';
import Blank4 from './Components/Blank4';

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
        <Route path='/blank' element={<Blank />}></Route>
        <Route path='/blank2' element={<Blank2 />}></Route>
        <Route path='/blank3' element={<Blank3 />}></Route>
        <Route path='/blank4' element={<Blank4 />}></Route>
      </Routes>
      {!isSignInPage && <Footer className="footer" />}
    </div>
  );
}

export default App;
