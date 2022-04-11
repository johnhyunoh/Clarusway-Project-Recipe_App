import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Details from './pages/details/Details';
import Login from './pages/login/Login';
import { useState } from 'react'

function App() {
const [dataFromSearchHome, setDataFromSearchHome]=useState('')

const updateData=(e)=> {
  setDataFromSearchHome(e)
}

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home updateData={updateData} />} />
          <Route path='/about' element={<About />} />
          <Route path="/details/:label" element={<Details dataFromSearchHome={dataFromSearchHome}/>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
