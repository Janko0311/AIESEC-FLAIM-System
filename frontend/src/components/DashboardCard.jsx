function DashboardCard({ title, value, subtitle, status }) {
  return (
    <div className="card stat-card">
      <div className="stat-top">
        <p className="muted small">{title}</p>
        <span className="pill">{status}</span>
      </div>
      <h3>{value}</h3>
      <p className="muted">{subtitle}</p>
    </div>
  );
}

export default DashboardCard;
