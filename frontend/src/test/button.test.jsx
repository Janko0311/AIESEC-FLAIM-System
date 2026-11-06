import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Reimbursement from '../pages/Reimbursement';

describe('FLAIM button behavior', () => {
  test('Topbar + New Task button opens a modal', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /\+ new task/i });
    await user.click(button);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/mock task created successfully/i)).toBeInTheDocument();
  });

  test('Create Reimbursement Case navigates to reimbursement page and opens modal', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reimbursement" element={<Reimbursement />} />
        </Routes>
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /create reimbursement case/i });
    await user.click(button);

    expect(screen.getByText(/reimbursement cases/i)).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText(/frontend simulation successful/i)).toBeInTheDocument();
  });
});
