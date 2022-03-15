import { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRoutes from './components/AppRoutes';
import Navbar from './components/Navbar';

export const Context = createContext(null)
function App() {
  const [user, setUser] = useState(false)
  return (
    <Context.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
