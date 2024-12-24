import './App.css';
import Main from './Components/Main';
import Sign_in from './Components/Sign_in';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sign_in></Sign_in>}></Route>
        <Route path="/" element={<Main></Main>}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;