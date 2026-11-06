import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import ActionModal from '../components/ActionModal';
import { reimbursementCases } from '../data/mockData';

function Reimbursement() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (location.state?.openCreateModal) {
      setOpen(true);
    }
  }, [location.state]);

  return (
    <Layout
      title="Reimbursement"
      subtitle="Claim processing and repayment tracking"
      topbarActionLabel="+ New Task"
      topbarModalTitle="Task Created"
      topbarModalMessage="Mock reimbursement-related task created successfully."
    >
      <section className="page-grid">
        <div className="card">
          <h2>Reimbursement SOP Snapshot</h2>
          <ol className="sop-list">
            <li>Receive claim form and receipt files</li>
            <li>Verify correct file naming and supporting documents</li>
            <li>Check amount against approved budget</li>
            <li>Update case status in tracking table</li>
            <li>Notify Heidi to process repayment</li>
            <li>Confirm repayment completion and close case</li>
          </ol>
        </div>

        <div className="card">
          <h2>Reimbursement Cases</h2>
          <div className="table-wrapper">
            <table className="deadline-table">
              <thead>
                <tr>
                  <th>Case ID</th>
                  <th>Applicant</th>
                  <th>Department</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Submitted</th>
                  <th>Repayment</th>
                </tr>
              </thead>
              <tbody>
                {reimbursementCases.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.applicant}</td>
                    <td>{row.department}</td>
                    <td>{row.amount}</td>
                    <td>{row.status}</td>
                    <td>{row.submittedOn}</td>
                    <td>{row.repayment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ActionModal
        open={open}
        title="Reimbursement Case Started"
        message="Frontend simulation successful. A new reimbursement case flow has been opened."
        onClose={() => setOpen(false)}
      />
    </Layout>
  );
}

export default Reimbursement;
