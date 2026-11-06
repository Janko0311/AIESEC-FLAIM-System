import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Finance from './pages/Finance';
import Reimbursement from './pages/Reimbursement';
import Legal from './pages/Legal';
import AdminIM from './pages/AdminIM';
import Stocktake from './pages/Stocktake';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/reimbursement" element={<Reimbursement />} />
      <Route path="/legal" element={<Legal />} />
      <Route path="/admin-im" element={<AdminIM />} />
      <Route path="/stocktake" element={<Stocktake />} />
    </Routes>
  );
}

export default App;
