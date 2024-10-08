import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import Share from "./components/share/Share";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/share/:id" element={<Share />} />
        <Route path="/board" element={<Dashboard />} />
        <Route path="/analytics" element={<Dashboard />} /> 
        <Route path="/settings" element={<Dashboard />} /> 

        {/* Wildcard route for undefined paths */}
        <Route path="*" element={<Navigate to="/board" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
