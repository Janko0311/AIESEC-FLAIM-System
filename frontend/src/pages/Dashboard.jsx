import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import DashboardCard from '../components/DashboardCard';
import DeadlineTable from '../components/DeadlineTable';
import { dashboardStats } from '../data/mockData';

function Dashboard() {
  const navigate = useNavigate();

  const handleCreateCase = () => {
    navigate('/reimbursement', {
      state: {
        openCreateModal: true,
      },
    });
  };

  return (
    <Layout
      title="FLAIM Dashboard"
      subtitle="Overview of monthly operations"
      topbarActionLabel="+ New Task"
      topbarModalTitle="Task Created"
      topbarModalMessage="Mock task created successfully. This is a frontend-only simulation."
    >
      <section className="hero card">
        <div>
          <p className="eyebrow">AIESEC in HSUHK</p>
          <h1>FLAIM Management Dashboard</h1>
          <p className="muted">
            Finance, Legal, Administrative and Information Management control center.
          </p>
        </div>

        <div className="hero-actions">
          <button className="btn-primary" onClick={handleCreateCase}>
            Create Reimbursement Case
          </button>
        </div>
      </section>

      <section className="stats-grid">
        {dashboardStats.map((item) => (
          <DashboardCard key={item.title} {...item} />
        ))}
      </section>

      <section className="content-grid">
        <div className="card">
          <h2>Monthly Operational Deadlines</h2>
          <p className="muted section-desc">
            Strict timelines for FLAIM execution and compliance.
          </p>
          <DeadlineTable />
        </div>

        <div className="card">
          <h2>Reimbursement SOP</h2>
          <p className="muted section-desc">
            Sequential processing flow for all reimbursement claims.
          </p>

          <ol className="sop-list">
            <li>Check receipt file naming convention</li>
            <li>Verify amount against approved budget</li>
            <li>Notify Heidi to initiate repayment</li>
            <li>Confirm successful repayment to applicant</li>
            <li>Close all cases by the 15th of the month</li>
          </ol>
        </div>
      </section>
    </Layout>
  );
}

export default Dashboard;
