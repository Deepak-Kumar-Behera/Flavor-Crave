import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ReserveTable from './pages/ReserveTable';

function App() {
  return (
    <div className='w-flex flex-col overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route 
          path="/"
          element={
            <Home />
          }
        />
        <Route 
          path="/reserve-table"
          element={
            <ReserveTable />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
