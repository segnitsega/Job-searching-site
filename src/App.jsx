
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'

function App() {
  
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
    </Routes>

  )
}

export default App
