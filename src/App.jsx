import { useState } from 'react'
import Home from './components/Home/Home';
import Terms from './components/Terms/Terms';
import Privacy from './components/Privacy/Privacy';
import Cookies from './components/Cookies/Cookies';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/cookies" element={<Cookies/>} />
      </Routes>
    </Router>
  )
}

export default App
