import './App.css';
import { LandingPage } from './pages/Landing';
import { SignInPage } from './pages/SignIn/SignIn'; //Si se quita no carga la img :v
import Navbar from './components/Admin/Navbar/Navbar';
import { AuthProvider } from './auth/AuthProvider';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'
import { Admin } from './pages/Admin';

export const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/Admin' element={<Admin />} />
            <Route path='*' element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer limit={2} />
      </AuthProvider>
    </div>
  );
}

export default App;
