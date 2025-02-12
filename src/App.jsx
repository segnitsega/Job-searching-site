
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
    <Routes>
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
    </Routes>

  )
}

export default App
