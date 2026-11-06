import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import ActionModal from './ActionModal';

function Layout({
  title,
  subtitle,
  children,
  topbarActionLabel = '+ New Task',
  topbarModalTitle = 'New Task',
  topbarModalMessage = 'This is a frontend-only simulation. No backend data is being saved.',
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main-content">
        <Topbar
          title={title}
          subtitle={subtitle}
          primaryActionLabel={topbarActionLabel}
          onPrimaryAction={() => setOpen(true)}
        />

        {children}

        <ActionModal
          open={open}
          title={topbarModalTitle}
          message={topbarModalMessage}
          onClose={() => setOpen(false)}
        />
      </main>
    </div>
  );
}

export default Layout;
