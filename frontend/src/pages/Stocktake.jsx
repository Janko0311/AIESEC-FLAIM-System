import Layout from '../components/Layout';
import { stocktakeItems } from '../data/mockData';

function Stocktake() {
  return (
    <Layout title="Stocktake" subtitle="Asset inventory and monthly checking records">
      <section className="page-grid">
        <div className="card">
          <h2>Stocktake Summary</h2>
          <div className="info-list">
            <div className="info-row">
              <span>Stocktake Deadline</span>
              <strong>30th of each month</strong>
            </div>
            <div className="info-row">
              <span>Total Asset Categories</span>
              <strong>3</strong>
            </div>
            <div className="info-row">
              <span>Inspection Warning</span>
              <strong className="danger-text">1 item needs inspection</strong>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Inventory List</h2>
          <div className="table-wrapper">
            <table className="deadline-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Last Check</th>
                </tr>
              </thead>
              <tbody>
                {stocktakeItems.map((row) => (
                  <tr key={row.item}>
                    <td>{row.item}</td>
                    <td>{row.category}</td>
                    <td>{row.quantity}</td>
                    <td>{row.status}</td>
                    <td>{row.lastCheck}</td>
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

export default Stocktake;
