import { Route, Routes } from "react-router";

import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LostPassawordPage from './pages/LostPasswordPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/login" element={ <LoginPage />} />
        <Route path="/register" element={ <RegisterPage />} />
        <Route path="/lost-password" element={ <LostPassawordPage />} />
      </Routes>
    </div>
  );
}

export default App;
