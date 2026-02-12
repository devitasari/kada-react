import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './PrivateRoute';
import NotFound from './pages/NotFound';
import { BrowserRouter } from 'react-router-dom';
// import { CounterProvider } from './context/counterContext';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home></Home>}></Route>
          <Route path='/about' element={ <About></About>}></Route>
          <Route path='/contact' element={<PrivateRoute><Contact></Contact></PrivateRoute>}></Route>
          <Route path='/login' element={ <LoginPage></LoginPage>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
