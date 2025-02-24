
import LoginPage from './components/LoginPage'
import SignupPage from './components/SignupPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Layout from './Layout';
import JobPost from './components/JobPost';
import Hero from './components/Hero';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path='/jobPost' element={<JobPost/>} />
          </Route>
      </Routes>
    </BrowserRouter>
    // <JobPost/>
    // <Hero />
    

  )
}

export default App
