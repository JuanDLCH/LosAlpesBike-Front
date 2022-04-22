import './App.css';
import { LandingPage } from './pages/Landing';
import { SignInPage } from './pages/SignIn/SignIn';
import { Navbar } from './components/Admin/Navbar/Navbar';
import { AuthProvider } from './auth/AuthProvider';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

export const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/sign-in' element={<SignInPage />} />
          <Route path='/services' element={<LandingPage />} />
          <Route path='/about' element={<LandingPage />} />
          <Route path='/profile/:userId' element={<LandingPage />} />
          <Route path='*' element={<LandingPage />} />
        </Routes>
        </BrowserRouter>
        <ToastContainer limit={2} />
      </AuthProvider>
    </div>
  );
}

export default App;
