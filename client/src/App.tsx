import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Dashboard } from './pages/dashboard';
import { Auth } from './pages/auth';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
