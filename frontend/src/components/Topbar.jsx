function Topbar({
  title = 'FLAIM Control Panel',
  subtitle = 'Welcome back',
  onPrimaryAction,
  primaryActionLabel = '+ New Task',
}) {
  return (
    <header className="topbar">
      <div>
        <p className="muted small">{subtitle}</p>
        <h2>{title}</h2>
      </div>

      <div className="topbar-actions">
        <input
          className="search-input"
          type="text"
          placeholder="Search records, claims, contracts..."
        />
        <button className="btn-primary" onClick={onPrimaryAction}>
          {primaryActionLabel}
        </button>
      </div>
    </header>
  );
}

export default Topbar;
