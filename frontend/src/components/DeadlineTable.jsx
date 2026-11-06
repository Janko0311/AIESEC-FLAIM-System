import { deadlines } from '../data/mockData';

function DeadlineTable() {
  return (
    <div className="table-wrapper">
      <table className="deadline-table">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Deadline</th>
            <th>Frequency</th>
            <th>Action Items</th>
          </tr>
        </thead>
        <tbody>
          {deadlines.map((row) => (
            <tr key={row.task}>
              <td>{row.task}</td>
              <td>{row.deadline}</td>
              <td>{row.frequency}</td>
              <td>{row.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeadlineTable;
