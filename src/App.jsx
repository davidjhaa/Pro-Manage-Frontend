import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import ProtectedRoute from "./components/ProtectedRoute";
import Share from "./components/share/Share";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/share/:id" element={<Share />} />
        <Route path="/board" element={<ProtectedRoute Component= {Dashboard} />} />
        <Route path="/analytics" element={<ProtectedRoute Component= {Dashboard} />} /> 
        <Route path="/settings" element={<ProtectedRoute Component= {Dashboard} />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
