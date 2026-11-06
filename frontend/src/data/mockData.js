export const dashboardStats = [
  {
    title: 'Bookkeeping',
    value: 'Due on 5th',
    subtitle: 'Reconcile Journal & Cash Book',
    status: 'Monthly',
  },
  {
    title: 'Reimbursement',
    value: 'Due on 15th',
    subtitle: 'Claims, approval, notify Heidi',
    status: 'Monthly',
  },
  {
    title: 'Stocktake',
    value: 'Due on 30th',
    subtitle: 'Physical + digital asset inventory',
    status: 'Monthly',
  },
  {
    title: 'Legal Review',
    value: 'Active',
    subtitle: 'MoUs, contracts, EPM/EPP compliance',
    status: 'Ongoing',
  },
];

export const deadlines = [
  {
    task: 'Bookkeeping',
    deadline: '5th of each month',
    frequency: 'Monthly',
    action: 'Reconcile Journal & Cash Book',
  },
  {
    task: 'Reimbursement',
    deadline: '15th of each month',
    frequency: 'Monthly',
    action: 'Process claims, verify naming, notify Heidi, trigger repayment',
  },
  {
    task: 'Stocktake',
    deadline: '30th of each month',
    frequency: 'Monthly',
    action: 'Physical and digital asset inventory check',
  },
];

export const financeRecords = [
  {
    month: 'September 2026',
    journalStatus: 'Completed',
    cashBookStatus: 'Completed',
    budgetUsage: '72%',
    note: 'All entries reconciled before deadline',
  },
  {
    month: 'October 2026',
    journalStatus: 'In Progress',
    cashBookStatus: 'Pending Review',
    budgetUsage: '48%',
    note: 'Awaiting 2 supporting invoices',
  },
];

export const reimbursementCases = [
  {
    id: 'RB-001',
    applicant: 'Chris Wong',
    department: 'OGX',
    amount: 'HKD 420',
    status: 'Approved',
    submittedOn: '2026-10-03',
    repayment: 'Notified Heidi',
  },
  {
    id: 'RB-002',
    applicant: 'Kelly Chan',
    department: 'MKT',
    amount: 'HKD 180',
    status: 'Pending Verification',
    submittedOn: '2026-10-08',
    repayment: 'Waiting for naming check',
  },
  {
    id: 'RB-003',
    applicant: 'Jason Lee',
    department: 'BD',
    amount: 'HKD 950',
    status: 'Repaid',
    submittedOn: '2026-10-01',
    repayment: 'Completed',
  },
];

export const legalContracts = [
  {
    id: 'LG-101',
    title: 'University Partnership MoU',
    owner: 'LCVP BD',
    status: 'Under Review',
    expiry: '2026-12-31',
    risk: 'Medium',
  },
  {
    id: 'LG-102',
    title: 'Event Venue Agreement',
    owner: 'LCVP MKT',
    status: 'Approved',
    expiry: '2026-11-15',
    risk: 'Low',
  },
  {
    id: 'LG-103',
    title: 'External Sponsor Contract',
    owner: 'LCVP Finance',
    status: 'Needs Revision',
    expiry: '2026-10-25',
    risk: 'High',
  },
];

export const adminTasks = [
  {
    area: 'Document Filing',
    task: 'Sort reimbursement receipts by month',
    owner: 'FLAIM Team',
    status: 'Ongoing',
  },
  {
    area: 'Information Management',
    task: 'Update member access permissions',
    owner: 'Admin IM Lead',
    status: 'Pending',
  },
  {
    area: 'Archive Control',
    task: 'Back up legal documents to shared drive',
    owner: 'Secretary',
    status: 'Completed',
  },
];

export const stocktakeItems = [
  {
    item: 'Roll-up Banner',
    category: 'Marketing Asset',
    quantity: 2,
    status: 'Available',
    lastCheck: '2026-09-30',
  },
  {
    item: 'Extension Cable',
    category: 'Event Equipment',
    quantity: 5,
    status: 'Available',
    lastCheck: '2026-09-30',
  },
  {
    item: 'Portable Speaker',
    category: 'Event Equipment',
    quantity: 1,
    status: 'Needs Inspection',
    lastCheck: '2026-09-30',
  },
  {
    item: 'Booth Table Cloth',
    category: 'Branding Material',
    quantity: 3,
    status: 'Available',
    lastCheck: '2026-09-30',
  },
];
