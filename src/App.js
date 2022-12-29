import { Route, Routes } from "react-router";

import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LostPassawordPage from './pages/LostPasswordPage';
import AddPostPage from "./pages/AddPostPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import ProfilePage from "./pages/ProfilePage";
import CommentsPage from "./pages/CommentsPage";
import LikesPage from "./pages/LikesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/login" element={ <LoginPage />} />
        <Route path="/register" element={ <RegisterPage />} />
        <Route path="/lost-password" element={ <LostPassawordPage />} />
        <Route path="/add-post" element={ <AddPostPage /> } />
        <Route path="/reset-password" element={ <ResetPasswordPage /> } />
        <Route path="/profile/:id" element={ <ProfilePage /> } />
        <Route path="/post/comments/:id" element={ <CommentsPage /> } />
        <Route path="/post/likes/:id" element={ <LikesPage /> } />
      </Routes>
    </div>
  );
}

export default App;
