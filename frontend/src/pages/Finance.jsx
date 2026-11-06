import Layout from '../components/Layout';
import { financeRecords } from '../data/mockData';

function Finance() {
  return (
    <Layout title="Finance" subtitle="Bookkeeping, cash book and budget monitoring">
      <section className="page-grid">
        <div className="card">
          <h2>Finance Summary</h2>
          <p className="muted section-desc">
            Simulated monthly records for bookkeeping and budget monitoring.
          </p>

          <div className="info-list">
            <div className="info-row">
              <span>Monthly Closing Deadline</span>
              <strong>5th of each month</strong>
            </div>
            <div className="info-row">
              <span>Current Budget Health</span>
              <strong className="accent-text">Stable</strong>
            </div>
            <div className="info-row">
              <span>Pending Invoice Count</span>
              <strong>2</strong>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Monthly Finance Records</h2>
          <div className="table-wrapper">
            <table className="deadline-table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Journal</th>
                  <th>Cash Book</th>
                  <th>Budget Usage</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {financeRecords.map((row) => (
                  <tr key={row.month}>
                    <td>{row.month}</td>
                    <td>{row.journalStatus}</td>
                    <td>{row.cashBookStatus}</td>
                    <td>{row.budgetUsage}</td>
                    <td>{row.note}</td>
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

export default Finance;
