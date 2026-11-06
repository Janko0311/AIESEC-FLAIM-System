import Layout from '../components/Layout';
import { adminTasks } from '../data/mockData';

function AdminIM() {
  return (
    <Layout title="Admin & IM" subtitle="Administrative control and information management">
      <section className="page-grid">
        <div className="card">
          <h2>Admin & Information Management</h2>
          <p className="muted section-desc">
            This page simulates filing, permissions, archive handling and internal control tasks.
          </p>

          <div className="info-list">
            <div className="info-row">
              <span>Access Review Cycle</span>
              <strong>Monthly</strong>
            </div>
            <div className="info-row">
              <span>Archive Health</span>
              <strong className="accent-text">Good</strong>
            </div>
            <div className="info-row">
              <span>Pending Admin Actions</span>
              <strong>2</strong>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Administrative Task Tracker</h2>
          <div className="table-wrapper">
            <table className="deadline-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Task</th>
                  <th>Owner</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {adminTasks.map((row, index) => (
                  <tr key={`${row.area}-${index}`}>
                    <td>{row.area}</td>
                    <td>{row.task}</td>
                    <td>{row.owner}</td>
                    <td>{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default AdminIM;
