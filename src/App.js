import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import './style.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/'>
              <Route index element={<Home />}></Route>
              <Route path='register' element={<Register />}></Route>
              <Route path='login' element={<Login />}></Route>
              <Route path='dashboard' element={<Dashboard />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
