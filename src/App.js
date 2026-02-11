import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import LoginPage from './components/LoginPage';
import PrivateRoute from './PrivateRoute';
import NotFound from './components/NotFound';
import { BrowserRouter } from 'react-router-dom';
import { CounterProvider } from './context/counterContext';

function App() {
  return (
    <CounterProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home></Home>}></Route>
          <Route path='/about' element={ <About></About>}></Route>
          <Route path='/contact' element={<PrivateRoute><Contact></Contact></PrivateRoute>}></Route>
          <Route path='/login' element={ <LoginPage></LoginPage>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </CounterProvider>
  );
}

export default App;
