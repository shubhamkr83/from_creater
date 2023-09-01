import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Createform from './Createform'
import Home from './Home'
import Navbar from "./components/Navbar"
import Login from "./Login"
import Signup from "./Signup"


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createform" element={<Createform />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
