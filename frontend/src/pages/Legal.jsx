import Layout from '../components/Layout';
import { legalContracts } from '../data/mockData';

function Legal() {
  return (
    <Layout title="Legal" subtitle="Contract review, compliance and risk monitoring">
      <section className="page-grid">
        <div className="card">
          <h2>Legal Monitoring Summary</h2>
          <div className="info-list">
            <div className="info-row">
              <span>Contracts Under Review</span>
              <strong>1</strong>
            </div>
            <div className="info-row">
              <span>High Risk Agreements</span>
              <strong className="danger-text">1</strong>
            </div>
            <div className="info-row">
              <span>Compliance Focus</span>
              <strong>EPM / EPP / MoU Review</strong>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Legal Cases and Agreements</h2>
          <div className="table-wrapper">
            <table className="deadline-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Owner</th>
                  <th>Status</th>
                  <th>Expiry</th>
                  <th>Risk</th>
                </tr>
              </thead>
              <tbody>
                {legalContracts.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.title}</td>
                    <td>{row.owner}</td>
                    <td>{row.status}</td>
                    <td>{row.expiry}</td>
                    <td>{row.risk}</td>
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

export default Legal;
