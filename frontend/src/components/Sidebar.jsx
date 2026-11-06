import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="brand">
          <div className="brand-logo">F</div>
          <div>
            <h2>FLAIM</h2>
            <p className="muted small">HSUHK Management</p>
          </div>
        </div>

        <nav className="nav">
          <NavLink to="/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Dashboard
          </NavLink>
          <NavLink to="/finance" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Finance
          </NavLink>
          <NavLink to="/reimbursement" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Reimbursement
          </NavLink>
          <NavLink to="/legal" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Legal
          </NavLink>
          <NavLink to="/admin-im" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Admin & IM
          </NavLink>
          <NavLink to="/stocktake" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Stocktake
          </NavLink>
        </nav>
      </div>

      <div className="sidebar-footer card mini-card">
        <p className="small muted">System Status</p>
        <h3>Operational</h3>
        <p className="status-glow">● Frontend Simulation Active</p>
      </div>
    </aside>
  );
}

export default Sidebar;
