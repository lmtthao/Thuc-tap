import './App.css';
import Main from './Components/Main';
import Sign_in from './Components/Sign_in';
import Timetable from './Components/Timetable';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sign_in />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/tkb" element={<Timetable/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
