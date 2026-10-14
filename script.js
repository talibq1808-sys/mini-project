/**
 * ApexFit - Gym Management System & Connected Member Portal
 * Vanilla JavaScript Implementation
 */

// Global State Schema
const STORAGE_KEY = 'apexfit_gym_data';
const THEME_KEY = 'apexfit_gym_theme';

// Initial Demo Seed Data
const DEFAULT_PLANS = [
  {
    id: 'PLAN-1',
    name: 'Monthly Kickstart',
    price: 49.99,
    durationMonths: 1,
    tag: 'Flexible',
    description: 'Perfect for beginners starting their fitness journey with no long-term contract.',
    features: [
      'Full Gym Equipment Access',
      'Locker Room & Shower Access',
      'Free 1-on-1 Fitness Assessment',
      'Access During Standard Hours'
    ]
  },
  {
    id: 'PLAN-2',
    name: 'Quarterly Strength',
    price: 129.99,
    durationMonths: 3,
    tag: 'Popular',
    description: 'Our most balanced package for sustained muscle gain and conditioning.',
    features: [
      '24/7 Unlimited Facility Access',
      'Locker Room & Finnish Sauna',
      '2 Complimentary Trainer Sessions',
      'Bio-Impedance Body Composition Scan',
      '1 Free Guest Day Pass / Month'
    ]
  },
  {
    id: 'PLAN-3',
    name: 'Half-Yearly Pro',
    price: 239.99,
    durationMonths: 6,
    tag: 'Best Value',
    description: 'Serious athlete package for dedicated transformations and performance tracking.',
    features: [
      '24/7 Unlimited All-Club Access',
      'Sauna & Contrast Cold Plunge Suites',
      'Monthly Bio-Scan & Nutrition Plan',
      '5 Guest Passes Included',
      'Free ApexFit Towel & Shaker Bottle'
    ]
  },
  {
    id: 'PLAN-4',
    name: 'Annual Ultimate VIP',
    price: 429.99,
    durationMonths: 12,
    tag: 'Elite VIP',
    description: 'Complete year-round championship fitness lifestyle with all VIP privileges.',
    features: [
      '24/7 VIP All-Access Worldwide',
      'Unlimited Recovery & Sauna Suites',
      '12 Personal Training Sessions Included',
      'Dedicated Permanent Locker & Laundry',
      '10% Discount at Apex Nutrition Bar',
      'Priority Booking for Classes & Clinics'
    ]
  }
];

const DEFAULT_MEMBERS = [
  {
    id: 'GYM-1001',
    name: 'Marcus Vance',
    phone: '+1 555-019-2834',
    email: 'marcus.vance@example.com',
    gender: 'Male',
    age: 29,
    address: '142 Ironwood Dr, Metro City',
    registrationDate: '2026-08-15',
    planId: 'PLAN-2',
    planName: 'Quarterly Strength',
    startDate: '2026-08-15',
    expiryDate: '2026-11-15',
    status: 'Active'
  },
  {
    id: 'GYM-1002',
    name: 'Elena Rostova',
    phone: '+1 555-014-9921',
    email: 'elena.rostova@example.com',
    gender: 'Female',
    age: 26,
    address: '88 Skyline Tower, Apt 14B',
    registrationDate: '2026-01-10',
    planId: 'PLAN-4',
    planName: 'Annual Ultimate VIP',
    startDate: '2026-01-10',
    expiryDate: '2027-01-10',
    status: 'Active'
  },
  {
    id: 'GYM-1003',
    name: 'Jordan Lee',
    phone: '+1 555-017-3390',
    email: 'jordan.lee@example.com',
    gender: 'Other',
    age: 32,
    address: '502 West Elm St',
    registrationDate: '2026-09-18',
    planId: 'PLAN-1',
    planName: 'Monthly Kickstart',
    startDate: '2026-09-18',
    expiryDate: '2026-10-18',
    status: 'Expiring Soon'
  },
  {
    id: 'GYM-1004',
    name: 'David Chen',
    phone: '+1 555-012-7711',
    email: 'david.chen@example.com',
    gender: 'Male',
    age: 41,
    address: '77 Harbor Way',
    registrationDate: '2026-04-01',
    planId: 'PLAN-3',
    planName: 'Half-Yearly Pro',
    startDate: '2026-04-01',
    expiryDate: '2026-10-01',
    status: 'Expired'
  },
  {
    id: 'GYM-1005',
    name: 'Sarah Jenkins',
    phone: '+1 555-018-4422',
    email: 'sarah.j@example.com',
    gender: 'Female',
    age: 24,
    address: '310 Olympic Blvd',
    registrationDate: '2026-09-01',
    planId: 'PLAN-2',
    planName: 'Quarterly Strength',
    startDate: '2026-09-01',
    expiryDate: '2026-12-01',
    status: 'Active'
  },
  {
    id: 'GYM-1006',
    name: 'Carlos Ramirez',
    phone: '+1 555-011-8833',
    email: 'carlos.r@example.com',
    gender: 'Male',
    age: 35,
    address: '92 Magnolia Court',
    registrationDate: '2026-09-19',
    planId: 'PLAN-1',
    planName: 'Monthly Kickstart',
    startDate: '2026-09-19',
    expiryDate: '2026-10-19',
    status: 'Expiring Soon'
  },
  {
    id: 'GYM-1007',
    name: 'Amanda Taylor',
    phone: '+1 555-016-1188',
    email: 'amanda.t@example.com',
    gender: 'Female',
    age: 38,
    address: '414 Cedar Lane',
    registrationDate: '2026-03-12',
    planId: 'PLAN-3',
    planName: 'Half-Yearly Pro',
    startDate: '2026-03-12',
    expiryDate: '2026-09-12',
    status: 'Expired'
  },
  {
    id: 'GYM-1008',
    name: 'Liam Davis',
    phone: '+1 555-019-9021',
    email: 'liam.davis@example.com',
    gender: 'Male',
    age: 27,
    address: '19 Riverfront Ave',
    registrationDate: '2026-10-02',
    planId: 'PLAN-2',
    planName: 'Quarterly Strength',
    startDate: '2026-10-02',
    expiryDate: '2027-01-02',
    status: 'Active'
  }
];

const DEFAULT_PAYMENTS = [
  {
    id: 'PAY-1001',
    memberId: 'GYM-1001',
    memberName: 'Marcus Vance',
    planName: 'Quarterly Strength',
    amount: 129.99,
    date: '2026-08-15',
    method: 'Card',
    status: 'Paid',
    reference: 'TXN-904128'
  },
  {
    id: 'PAY-1002',
    memberId: 'GYM-1002',
    memberName: 'Elena Rostova',
    planName: 'Annual Ultimate VIP',
    amount: 429.99,
    date: '2026-01-10',
    method: 'Card',
    status: 'Paid',
    reference: 'TXN-882019'
  },
  {
    id: 'PAY-1003',
    memberId: 'GYM-1003',
    memberName: 'Jordan Lee',
    planName: 'Monthly Kickstart',
    amount: 49.99,
    date: '2026-09-18',
    method: 'UPI',
    status: 'Paid',
    reference: 'UPI-982310@okaxis'
  },
  {
    id: 'PAY-1004',
    memberId: 'GYM-1004',
    memberName: 'David Chen',
    planName: 'Half-Yearly Pro Renewal',
    amount: 239.99,
    date: '2026-10-02',
    method: 'Bank Transfer',
    status: 'Pending',
    reference: 'INV-PENDING-04'
  },
  {
    id: 'PAY-1005',
    memberId: 'GYM-1005',
    memberName: 'Sarah Jenkins',
    planName: 'Quarterly Strength',
    amount: 129.99,
    date: '2026-09-01',
    method: 'Cash',
    status: 'Paid',
    reference: 'CASH-REC-105'
  },
  {
    id: 'PAY-1006',
    memberId: 'GYM-1006',
    memberName: 'Carlos Ramirez',
    planName: 'Monthly Kickstart',
    amount: 49.99,
    date: '2026-09-19',
    method: 'UPI',
    status: 'Paid',
    reference: 'UPI-440192@okhdfc'
  },
  {
    id: 'PAY-1007',
    memberId: 'GYM-1007',
    memberName: 'Amanda Taylor',
    planName: 'Half-Yearly Pro Renewal',
    amount: 239.99,
    date: '2026-09-15',
    method: 'Card',
    status: 'Overdue',
    reference: 'INV-OVERDUE-07'
  },
  {
    id: 'PAY-1008',
    memberId: 'GYM-1008',
    memberName: 'Liam Davis',
    planName: 'Quarterly Strength',
    amount: 129.99,
    date: '2026-10-02',
    method: 'Cash',
    status: 'Paid',
    reference: 'CASH-REC-108'
  }
];

const DEFAULT_SETTINGS = {
  gymName: 'ApexFit Athletic Club & Gym',
  currency: '$',
  phone: '+1 (555) 019-8234',
  email: 'director@apexfitgym.com',
  address: '124 Fitness Blvd, Suite 4A, Metro City, NY 10001',
  receiptFooter: 'Memberships are non-transferable and non-refundable. Please carry your digital member pass at check-in.'
};

// Global App State
let appData = {
  members: [],
  plans: [],
  payments: [],
  settings: { ...DEFAULT_SETTINGS },
  liveOccupancy: 14
};

// Chart.js Instances
let revenueChartInstance = null;
let plansPieChartInstance = null;
let analyticsBarChartInstance = null;
let paymentMethodChartInstance = null;
let demographicsChartInstance = null;

// Table Sort State
let memberSortColumn = 'id';
let memberSortAsc = true;

// Active System Mode ('admin' or 'client')
let currentSystemMode = 'admin';

/* ==========================================================================
   INITIALIZATION & PERSISTENCE
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadData();
  recalculateMembershipStatuses();
  initEventListeners();
  initLucideIcons();
  renderAll();
});

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
  applyTheme(savedTheme);
}

function applyTheme(theme) {
  const html = document.documentElement;
  const body = document.body;
  const iconSun = document.getElementById('themeIconSun');
  const iconMoon = document.getElementById('themeIconMoon');

  if (theme === 'light') {
    html.setAttribute('data-theme', 'light');
    body.classList.remove('theme-dark');
    body.classList.add('theme-light');
    if (iconSun && iconMoon) {
      iconSun.classList.add('hidden');
      iconMoon.classList.remove('hidden');
    }
  } else {
    html.setAttribute('data-theme', 'dark');
    body.classList.remove('theme-light');
    body.classList.add('theme-dark');
    if (iconSun && iconMoon) {
      iconSun.classList.remove('hidden');
      iconMoon.classList.add('hidden');
    }
  }
  localStorage.setItem(THEME_KEY, theme);

  // Re-render charts with correct theme colors
  setTimeout(() => {
    renderDashboardCharts();
    renderAnalyticsCharts();
  }, 100);
}

function toggleTheme() {
  const current = localStorage.getItem(THEME_KEY) || 'dark';
  const newTheme = current === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
  showToast(`Switched to ${newTheme} mode`, 'info');
}

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      appData.members = parsed.members || [...DEFAULT_MEMBERS];
      appData.plans = parsed.plans || [...DEFAULT_PLANS];
      appData.payments = parsed.payments || [...DEFAULT_PAYMENTS];
      appData.settings = { ...DEFAULT_SETTINGS, ...(parsed.settings || {}) };
      appData.liveOccupancy = parsed.liveOccupancy || 14;
    } else {
      resetToDefaultData(false);
    }
  } catch (err) {
    console.error('Failed to load data from localStorage:', err);
    resetToDefaultData(false);
  }
}

function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    updateBannerMembersBadge();
  } catch (err) {
    console.error('Failed to save to localStorage:', err);
    showToast('Failed to save data to storage', 'error');
  }
}

function resetToDefaultData(notify = true) {
  appData = {
    members: JSON.parse(JSON.stringify(DEFAULT_MEMBERS)),
    plans: JSON.parse(JSON.stringify(DEFAULT_PLANS)),
    payments: JSON.parse(JSON.stringify(DEFAULT_PAYMENTS)),
    settings: JSON.parse(JSON.stringify(DEFAULT_SETTINGS)),
    liveOccupancy: 14
  };
  saveData();
  recalculateMembershipStatuses();
  renderAll();
  if (notify) {
    showToast('Demo sample data restored successfully!', 'success');
  }
}

function wipeAllData() {
  appData.members = [];
  appData.payments = [];
  appData.liveOccupancy = 0;
  saveData();
  renderAll();
  showToast('All gym members and payments have been wiped.', 'warning');
}

/* ==========================================================================
   DATE & STATUS CALCULATION ENGINE
   ========================================================================== */
function recalculateMembershipStatuses() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  appData.members.forEach(member => {
    if (member.status === 'Inactive') return;

    if (!member.expiryDate) {
      member.status = 'Active';
      return;
    }

    const expiry = new Date(member.expiryDate);
    expiry.setHours(0, 0, 0, 0);

    const diffDays = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      member.status = 'Expired';
    } else if (diffDays <= 7) {
      member.status = 'Expiring Soon';
    } else {
      member.status = 'Active';
    }
  });

  saveData();
}

function calculateExpiryDate(startDateStr, durationMonths) {
  if (!startDateStr) return '';
  const date = new Date(startDateStr);
  date.setMonth(date.getMonth() + parseInt(durationMonths, 10));
  return date.toISOString().split('T')[0];
}

function getDaysRemaining(expiryDateStr) {
  if (!expiryDateStr) return 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const expiry = new Date(expiryDateStr);
  expiry.setHours(0, 0, 0, 0);
  return Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));
}

function formatCurrency(amount) {
  const curr = appData.settings.currency || '$';
  return `${curr}${Number(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatDate(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

/* ==========================================================================
   LUCIDE ICONS HELPER
   ========================================================================== */
function initLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   SYSTEM MODE SWITCHING (CLIENT WEBSITE vs STAFF DASHBOARD)
   ========================================================================== */
function switchSystemMode(mode) {
  currentSystemMode = mode;
  const clientContainer = document.getElementById('clientWebsiteContainer');
  const adminContainer = document.getElementById('adminAppContainer');
  const btnSwitchToClient = document.getElementById('btnSwitchToClient');
  const btnSwitchToAdmin = document.getElementById('btnSwitchToAdmin');

  if (mode === 'client') {
    clientContainer.classList.remove('hidden');
    adminContainer.classList.add('hidden');
    btnSwitchToClient.classList.add('active');
    btnSwitchToAdmin.classList.remove('active');
    renderClientWebsite();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Viewing Public Member Website & Portal', 'info');
  } else {
    clientContainer.classList.add('hidden');
    adminContainer.classList.remove('hidden');
    btnSwitchToClient.classList.remove('active');
    btnSwitchToAdmin.classList.add('active');
    renderDashboard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Switched to Staff Management Dashboard', 'info');
  }

  initLucideIcons();
}

function updateBannerMembersBadge() {
  const totalEl = document.getElementById('bannerTotalMembers');
  if (totalEl) {
    totalEl.textContent = `${appData.members.length} Members`;
  }
}

/* ==========================================================================
   RENDER ALL VIEWS & DATA
   ========================================================================== */
function renderAll() {
  updateBannerMembersBadge();
  renderSidebarStats();
  renderDashboard();
  renderMembers();
  renderPlans();
  renderPayments();
  renderAnalytics();
  renderSettings();
  renderClientWebsite();
  initLucideIcons();
}

function renderSidebarStats() {
  const liveCountEl = document.getElementById('liveActiveCount');
  if (liveCountEl) liveCountEl.textContent = appData.liveOccupancy || 0;

  const navMembersCount = document.getElementById('navMembersCount');
  if (navMembersCount) navMembersCount.textContent = appData.members.length;

  const pendingPayments = appData.payments.filter(p => p.status === 'Pending' || p.status === 'Overdue');
  const navPendingCount = document.getElementById('navPendingCount');
  if (navPendingCount) {
    navPendingCount.textContent = pendingPayments.length;
    navPendingCount.style.display = pendingPayments.length > 0 ? 'inline-block' : 'none';
  }
}

/* ==========================================================================
   1. DASHBOARD VIEW RENDERING
   ========================================================================== */
function renderDashboard() {
  const members = appData.members;
  const payments = appData.payments;

  const totalMembers = members.length;
  const activeMembers = members.filter(m => m.status === 'Active').length;
  const expiringSoon = members.filter(m => m.status === 'Expiring Soon').length;
  const expiredMembers = members.filter(m => m.status === 'Expired').length;

  const activeRatio = totalMembers > 0 ? Math.round((activeMembers / totalMembers) * 100) : 0;

  // Revenue computations
  const totalRevenue = payments
    .filter(p => p.status === 'Paid')
    .reduce((sum, p) => sum + Number(p.amount || 0), 0);

  const pendingRevenue = payments
    .filter(p => p.status === 'Pending' || p.status === 'Overdue')
    .reduce((sum, p) => sum + Number(p.amount || 0), 0);

  const pendingInvoices = payments.filter(p => p.status === 'Pending' || p.status === 'Overdue').length;
  const paidCount = payments.filter(p => p.status === 'Paid').length;

  // Update DOM KPI elements
  document.getElementById('statTotalMembers').textContent = totalMembers;
  document.getElementById('statActiveRatio').textContent = `${activeRatio}%`;
  document.getElementById('statActiveMembers').textContent = activeMembers;
  document.getElementById('statActiveSubtext').textContent = activeMembers;
  document.getElementById('statExpiredMembers').textContent = expiredMembers + expiringSoon;
  document.getElementById('statExpiringSoonCount').textContent = expiringSoon;

  document.getElementById('statTotalRevenue').textContent = formatCurrency(totalRevenue);
  document.getElementById('statTotalPaymentsCount').textContent = paidCount;
  document.getElementById('statPendingRevenue').textContent = formatCurrency(pendingRevenue);
  document.getElementById('statPendingInvoicesCount').textContent = pendingInvoices;

  // Urgent Expirations Banner
  const alertBanner = document.getElementById('urgentAlertBanner');
  const alertText = document.getElementById('urgentAlertText');
  const notifDot = document.getElementById('notificationBadge');

  if (expiringSoon > 0 || pendingInvoices > 0) {
    alertBanner.classList.remove('hidden');
    alertText.textContent = `Alert: ${expiringSoon} membership(s) expire within 7 days, and ${pendingInvoices} invoice(s) are pending payment.`;
    if (notifDot) notifDot.style.display = 'block';
  } else {
    alertBanner.classList.add('hidden');
    if (notifDot) notifDot.style.display = 'none';
  }

  renderNotificationsList();
  renderDashboardTables();
  renderDashboardCharts();
}

function renderNotificationsList() {
  const container = document.getElementById('notificationList');
  if (!container) return;

  const expiringMembers = appData.members.filter(m => m.status === 'Expiring Soon');
  const overduePayments = appData.payments.filter(p => p.status === 'Overdue' || p.status === 'Pending');

  if (expiringMembers.length === 0 && overduePayments.length === 0) {
    container.innerHTML = `
      <div style="padding: 24px; text-align: center; color: var(--text-dim); font-size: 0.82rem;">
        No urgent alerts or pending actions right now. All memberships are up to date!
      </div>
    `;
    return;
  }

  let html = '';

  expiringMembers.forEach(m => {
    const daysLeft = getDaysRemaining(m.expiryDate);
    html += `
      <div class="notification-item unread">
        <div class="notif-icon warning"><i data-lucide="clock"></i></div>
        <div class="notif-text">
          <strong>${m.name} (${m.id})</strong>
          <span>Membership expires in ${daysLeft} day(s) on ${formatDate(m.expiryDate)}.</span>
          <div class="notif-time">${m.planName}</div>
        </div>
      </div>
    `;
  });

  overduePayments.forEach(p => {
    html += `
      <div class="notification-item unread">
        <div class="notif-icon"><i data-lucide="alert-circle"></i></div>
        <div class="notif-text">
          <strong>Pending Payment: ${p.memberName}</strong>
          <span>${formatCurrency(p.amount)} for ${p.planName} (${p.status})</span>
          <div class="notif-time">${p.id} · ${p.method}</div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  initLucideIcons();
}

function renderDashboardTables() {
  // 1. Recent Registrations (sorted by joined date desc)
  const recentBody = document.getElementById('dashboardRecentMembersBody');
  const sortedByJoin = [...appData.members].sort((a, b) => new Date(b.registrationDate) - new Date(a.registrationDate)).slice(0, 5);

  if (sortedByJoin.length === 0) {
    recentBody.innerHTML = `<tr><td colspan="5" class="text-center" style="padding: 20px; color: var(--text-dim);">No members registered yet.</td></tr>`;
  } else {
    recentBody.innerHTML = sortedByJoin.map(m => `
      <tr>
        <td>
          <div class="member-cell">
            <div class="member-avatar-mini">${getInitials(m.name)}</div>
            <div class="member-cell-info">
              <span class="member-name-text">${escapeHtml(m.name)}</span>
              <span class="badge-code">${m.id}</span>
            </div>
          </div>
        </td>
        <td>${escapeHtml(m.planName)}</td>
        <td>${formatDate(m.registrationDate)}</td>
        <td>${renderStatusBadge(m.status)}</td>
        <td>
          <button class="btn btn-xs btn-outline" onclick="openViewMemberModal('${m.id}')">View</button>
        </td>
      </tr>
    `).join('');
  }

  // 2. Upcoming Expirations (Next 14 Days)
  const expiringBody = document.getElementById('dashboardExpiringMembersBody');
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingExpiring = appData.members
    .filter(m => m.expiryDate && m.status !== 'Inactive')
    .map(m => ({ ...m, daysLeft: getDaysRemaining(m.expiryDate) }))
    .filter(m => m.daysLeft <= 14)
    .sort((a, b) => a.daysLeft - b.daysLeft)
    .slice(0, 5);

  if (upcomingExpiring.length === 0) {
    expiringBody.innerHTML = `<tr><td colspan="5" class="text-center" style="padding: 20px; color: var(--text-dim);">No memberships expiring in the next 14 days.</td></tr>`;
  } else {
    expiringBody.innerHTML = upcomingExpiring.map(m => `
      <tr>
        <td>
          <div class="member-cell">
            <div class="member-avatar-mini">${getInitials(m.name)}</div>
            <div class="member-cell-info">
              <span class="member-name-text">${escapeHtml(m.name)}</span>
              <span class="badge-code">${m.id}</span>
            </div>
          </div>
        </td>
        <td>${escapeHtml(m.planName)}</td>
        <td>${formatDate(m.expiryDate)}</td>
        <td>
          <span style="font-weight: 700; color: ${m.daysLeft <= 0 ? 'var(--accent-red)' : m.daysLeft <= 7 ? 'var(--accent-amber)' : 'var(--text-main)'};">
            ${m.daysLeft < 0 ? `${Math.abs(m.daysLeft)}d overdue` : m.daysLeft === 0 ? 'Expires Today' : `${m.daysLeft} days`}
          </span>
        </td>
        <td>
          <button class="btn btn-xs btn-primary" onclick="quickRenewMember('${m.id}')">Renew</button>
        </td>
      </tr>
    `).join('');
  }
}

function renderDashboardCharts() {
  if (typeof Chart === 'undefined') return;

  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const textColor = isLight ? '#475569' : '#94a3b8';
  const gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)';

  // 1. Revenue Bar/Line Chart
  const revCtx = document.getElementById('revenueChart');
  if (revCtx) {
    if (revenueChartInstance) revenueChartInstance.destroy();

    // Group payments by last 6 months
    const monthNames = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
    const revenueValues = [240, 560, 480, 720, 680, 0];

    // Compute actual October revenue from payments
    const octPaid = appData.payments
      .filter(p => p.status === 'Paid' && p.date && p.date.startsWith('2026-10'))
      .reduce((sum, p) => sum + Number(p.amount || 0), 0);
    revenueValues[5] = octPaid || 590;

    revenueChartInstance = new Chart(revCtx, {
      type: 'bar',
      data: {
        labels: monthNames,
        datasets: [{
          label: 'Collected Revenue ($)',
          data: revenueValues,
          backgroundColor: '#ff5722',
          borderRadius: 6,
          barThickness: 28,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => ` Revenue: ${formatCurrency(ctx.raw)}`
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 11 } }
          },
          y: {
            grid: { color: gridColor },
            ticks: {
              color: textColor,
              font: { family: 'JetBrains Mono', size: 11 },
              callback: (val) => `${appData.settings.currency || '$'}${val}`
            }
          }
        }
      }
    });
  }

  // 2. Plan Distribution Pie Chart
  const pieCtx = document.getElementById('plansPieChart');
  if (pieCtx) {
    if (plansPieChartInstance) plansPieChartInstance.destroy();

    const planCounts = {};
    appData.plans.forEach(p => { planCounts[p.name] = 0; });
    appData.members.forEach(m => {
      if (planCounts[m.planName] !== undefined) {
        planCounts[m.planName]++;
      } else {
        planCounts[m.planName] = 1;
      }
    });

    const labels = Object.keys(planCounts);
    const data = Object.values(planCounts);

    plansPieChartInstance = new Chart(pieCtx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data.length > 0 ? data : [1],
          backgroundColor: ['#ff5722', '#10b981', '#06b6d4', '#8b5cf6', '#f59e0b'],
          borderColor: isLight ? '#ffffff' : '#171b26',
          borderWidth: 3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: textColor,
              font: { family: 'Plus Jakarta Sans', size: 11 },
              boxWidth: 12
            }
          }
        },
        cutout: '68%'
      }
    });
  }
}

/* ==========================================================================
   2. MEMBERS MANAGEMENT VIEW
   ========================================================================== */
function renderMembers() {
  const tableBody = document.getElementById('membersTableBody');
  const emptyState = document.getElementById('membersEmptyState');
  const countSummary = document.getElementById('memberCountSummary');
  const planFilterSelect = document.getElementById('memberPlanFilter');

  // Populate Plan Filter options
  if (planFilterSelect) {
    const currentVal = planFilterSelect.value;
    planFilterSelect.innerHTML = `<option value="all">All Plans</option>` +
      appData.plans.map(p => `<option value="${escapeHtml(p.name)}">${escapeHtml(p.name)}</option>`).join('');
    planFilterSelect.value = currentVal || 'all';
  }

  // Apply filters & search
  const searchQuery = (document.getElementById('memberSearchInput')?.value || '').toLowerCase().trim();
  const statusFilter = document.getElementById('memberStatusFilter')?.value || 'all';
  const planFilter = document.getElementById('memberPlanFilter')?.value || 'all';
  const genderFilter = document.getElementById('memberGenderFilter')?.value || 'all';

  let filtered = appData.members.filter(m => {
    // Search by name, phone, email, ID
    const matchSearch = !searchQuery ||
      m.name.toLowerCase().includes(searchQuery) ||
      m.phone.toLowerCase().includes(searchQuery) ||
      (m.email && m.email.toLowerCase().includes(searchQuery)) ||
      m.id.toLowerCase().includes(searchQuery);

    // Status filter
    const matchStatus = statusFilter === 'all' || m.status === statusFilter;

    // Plan filter
    const matchPlan = planFilter === 'all' || m.planName === planFilter;

    // Gender filter
    const matchGender = genderFilter === 'all' || m.gender === genderFilter;

    return matchSearch && matchStatus && matchPlan && matchGender;
  });

  // Sort
  filtered.sort((a, b) => {
    let valA = a[memberSortColumn] || '';
    let valB = b[memberSortColumn] || '';

    if (memberSortColumn === 'expiry') {
      valA = a.expiryDate || '';
      valB = b.expiryDate || '';
    } else if (memberSortColumn === 'plan') {
      valA = a.planName || '';
      valB = b.planName || '';
    }

    if (valA < valB) return memberSortAsc ? -1 : 1;
    if (valA > valB) return memberSortAsc ? 1 : -1;
    return 0;
  });

  countSummary.textContent = `Showing ${filtered.length} of ${appData.members.length} members`;

  if (filtered.length === 0) {
    tableBody.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  tableBody.innerHTML = filtered.map(m => {
    const daysLeft = getDaysRemaining(m.expiryDate);
    const expirySubtext = m.status === 'Expired'
      ? `<span class="text-red">Expired ${Math.abs(daysLeft)}d ago</span>`
      : m.status === 'Expiring Soon'
      ? `<span class="text-amber">${daysLeft} days left</span>`
      : `<span class="member-sub-text">${daysLeft} days left</span>`;

    return `
      <tr>
        <td><span class="badge-code">${m.id}</span></td>
        <td>
          <div class="member-cell">
            <div class="member-avatar-mini">${getInitials(m.name)}</div>
            <div class="member-cell-info">
              <span class="member-name-text">${escapeHtml(m.name)}</span>
              <span class="member-sub-text">Joined ${formatDate(m.registrationDate)}</span>
            </div>
          </div>
        </td>
        <td>
          <div class="member-cell-info">
            <span>${escapeHtml(m.phone)}</span>
            <span class="member-sub-text">${escapeHtml(m.email || 'No email')}</span>
          </div>
        </td>
        <td>
          <span>${m.gender || '-'}</span>, <span class="member-sub-text">${m.age ? `${m.age} yrs` : '-'}</span>
        </td>
        <td>
          <strong>${escapeHtml(m.planName)}</strong>
        </td>
        <td>
          <div>${formatDate(m.expiryDate)}</div>
          <div>${expirySubtext}</div>
        </td>
        <td>${renderStatusBadge(m.status)}</td>
        <td class="text-right">
          <div class="table-actions">
            <button class="icon-btn icon-btn-sm" title="View Profile & Card" onclick="openViewMemberModal('${m.id}')">
              <i data-lucide="eye"></i>
            </button>
            <button class="icon-btn icon-btn-sm" title="Edit Member" onclick="openEditMemberModal('${m.id}')">
              <i data-lucide="edit-3"></i>
            </button>
            <button class="icon-btn icon-btn-sm" title="Record Payment / Renew" onclick="quickRenewMember('${m.id}')">
              <i data-lucide="credit-card"></i>
            </button>
            <button class="icon-btn icon-btn-sm" title="Delete Member" onclick="promptDeleteMember('${m.id}')" style="color: var(--accent-red);">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  initLucideIcons();
}

/* ==========================================================================
   3. MEMBERSHIP PLANS VIEW
   ========================================================================== */
function renderPlans() {
  const container = document.getElementById('plansContainer');
  const clientGrid = document.getElementById('clientPlansGrid');
  if (!container) return;

  const currency = appData.settings.currency || '$';

  // Calculate enrolled member counts per plan
  const planEnrolledCounts = {};
  appData.plans.forEach(p => { planEnrolledCounts[p.name] = 0; });
  appData.members.forEach(m => {
    if (planEnrolledCounts[m.planName] !== undefined) {
      planEnrolledCounts[m.planName]++;
    }
  });

  // Admin View Plans Cards
  container.innerHTML = appData.plans.map(p => {
    const enrolled = planEnrolledCounts[p.name] || 0;
    const isPopular = p.tag === 'Popular' || p.tag === 'Best Value';

    return `
      <div class="plan-card ${isPopular ? 'popular-tier' : ''}">
        ${p.tag ? `<div class="plan-tag-badge">${escapeHtml(p.tag)}</div>` : ''}
        <h3 class="plan-name">${escapeHtml(p.name)}</h3>
        <p class="plan-desc">${escapeHtml(p.description || '')}</p>

        <div class="plan-pricing-box">
          <span class="plan-price-val">${currency}${Number(p.price).toFixed(2)}</span>
          <span class="plan-duration-unit"> / ${p.durationMonths} ${p.durationMonths === 1 ? 'month' : 'months'}</span>
        </div>

        <ul class="plan-features-list">
          ${(p.features || []).map(f => `
            <li><i data-lucide="check"></i> <span>${escapeHtml(f)}</span></li>
          `).join('')}
        </ul>

        <div class="plan-card-footer">
          <button class="btn btn-primary btn-sm flex-1" onclick="openEnrollMemberModal('${p.id}')">
            <i data-lucide="user-plus"></i> Enroll Member
          </button>
          <button class="icon-btn" title="Edit Plan" onclick="openEditPlanModal('${p.id}')">
            <i data-lucide="edit-2"></i>
          </button>
          <button class="icon-btn" title="Delete Plan" onclick="promptDeletePlan('${p.id}')" style="color: var(--accent-red);">
            <i data-lucide="trash-2"></i>
          </button>
        </div>

        <div class="plan-members-enrolled">
          <i data-lucide="users" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle;"></i>
          ${enrolled} active member${enrolled === 1 ? '' : 's'} assigned
        </div>
      </div>
    `;
  }).join('');

  // Client Website Plans Cards
  if (clientGrid) {
    clientGrid.innerHTML = appData.plans.map(p => {
      const isPopular = p.tag === 'Popular' || p.tag === 'Best Value';
      return `
        <div class="plan-card ${isPopular ? 'popular-tier' : ''}">
          ${p.tag ? `<div class="plan-tag-badge">${escapeHtml(p.tag)}</div>` : ''}
          <h3 class="plan-name">${escapeHtml(p.name)}</h3>
          <p class="plan-desc">${escapeHtml(p.description || '')}</p>

          <div class="plan-pricing-box">
            <span class="plan-price-val">${currency}${Number(p.price).toFixed(2)}</span>
            <span class="plan-duration-unit"> / ${p.durationMonths} ${p.durationMonths === 1 ? 'month' : 'months'}</span>
          </div>

          <ul class="plan-features-list">
            ${(p.features || []).map(f => `
              <li><i data-lucide="check"></i> <span>${escapeHtml(f)}</span></li>
            `).join('')}
          </ul>

          <button class="btn btn-primary btn-block" onclick="openClientJoinModal('${p.id}')">
            <i data-lucide="zap"></i> Join Online Now
          </button>
        </div>
      `;
    }).join('');
  }

  // Populate Plan select options in Member Modal
  const memberPlanInput = document.getElementById('memberPlanInput');
  if (memberPlanInput) {
    memberPlanInput.innerHTML = appData.plans.map(p => `
      <option value="${p.id}" data-duration="${p.durationMonths}" data-price="${p.price}">
        ${escapeHtml(p.name)} (${currency}${p.price} / ${p.durationMonths}m)
      </option>
    `).join('');
  }

  initLucideIcons();
}

/* ==========================================================================
   4. PAYMENTS & BILLING VIEW
   ========================================================================== */
function renderPayments() {
  const tableBody = document.getElementById('paymentsTableBody');
  const emptyState = document.getElementById('paymentsEmptyState');
  const countSummary = document.getElementById('paymentCountSummary');

  const payments = appData.payments;

  // KPI calculations
  const totalCollected = payments.filter(p => p.status === 'Paid').reduce((sum, p) => sum + Number(p.amount || 0), 0);
  const totalPending = payments.filter(p => p.status === 'Pending').reduce((sum, p) => sum + Number(p.amount || 0), 0);
  const totalOverdue = payments.filter(p => p.status === 'Overdue').length;

  document.getElementById('kpiTotalCollected').textContent = formatCurrency(totalCollected);
  document.getElementById('kpiTotalPending').textContent = formatCurrency(totalPending);
  document.getElementById('kpiTotalOverdue').textContent = totalOverdue;
  document.getElementById('kpiTotalTransactions').textContent = payments.length;

  // Filters
  const searchQuery = (document.getElementById('paymentSearchInput')?.value || '').toLowerCase().trim();
  const statusFilter = document.getElementById('paymentStatusFilter')?.value || 'all';
  const methodFilter = document.getElementById('paymentMethodFilter')?.value || 'all';

  const filtered = payments.filter(p => {
    const matchSearch = !searchQuery ||
      p.id.toLowerCase().includes(searchQuery) ||
      p.memberName.toLowerCase().includes(searchQuery) ||
      (p.memberId && p.memberId.toLowerCase().includes(searchQuery)) ||
      (p.planName && p.planName.toLowerCase().includes(searchQuery));

    const matchStatus = statusFilter === 'all' || p.status === statusFilter;
    const matchMethod = methodFilter === 'all' || p.method === methodFilter;

    return matchSearch && matchStatus && matchMethod;
  });

  // Sort payments by date descending
  filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

  countSummary.textContent = `Showing ${filtered.length} of ${payments.length} transactions`;

  if (filtered.length === 0) {
    tableBody.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  tableBody.innerHTML = filtered.map(p => {
    const methodIcon = p.method === 'Cash' ? 'banknote' : p.method === 'UPI' ? 'qr-code' : p.method === 'Card' ? 'credit-card' : 'landmark';

    return `
      <tr>
        <td>
          <span class="badge-code">${p.id}</span>
          ${p.reference ? `<div class="member-sub-text">${escapeHtml(p.reference)}</div>` : ''}
        </td>
        <td>
          <div class="member-name-text">${escapeHtml(p.memberName)}</div>
          <span class="member-sub-text">${p.memberId || ''}</span>
        </td>
        <td>${escapeHtml(p.planName)}</td>
        <td><strong>${formatCurrency(p.amount)}</strong></td>
        <td>${formatDate(p.date)}</td>
        <td>
          <div style="display: flex; align-items: center; gap: 6px;">
            <i data-lucide="${methodIcon}" style="width: 14px; height: 14px; color: var(--text-dim);"></i>
            <span>${p.method}</span>
          </div>
        </td>
        <td>${renderStatusBadge(p.status)}</td>
        <td class="text-right">
          <div class="table-actions">
            <button class="icon-btn icon-btn-sm" title="View / Print Receipt" onclick="openReceiptModal('${p.id}')">
              <i data-lucide="printer"></i>
            </button>
            <button class="icon-btn icon-btn-sm" title="Edit Payment" onclick="openEditPaymentModal('${p.id}')">
              <i data-lucide="edit-3"></i>
            </button>
            <button class="icon-btn icon-btn-sm" title="Delete Payment" onclick="promptDeletePayment('${p.id}')" style="color: var(--accent-red);">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  initLucideIcons();
}

/* ==========================================================================
   5. ANALYTICS & REPORTS VIEW
   ========================================================================== */
function renderAnalytics() {
  if (typeof Chart === 'undefined') return;

  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const textColor = isLight ? '#475569' : '#94a3b8';
  const gridColor = isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)';

  // 1. Monthly Collections & Dues
  const barCtx = document.getElementById('analyticsBarChart');
  if (barCtx) {
    if (analyticsBarChartInstance) analyticsBarChartInstance.destroy();

    analyticsBarChartInstance = new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [
          {
            label: 'Paid Revenue ($)',
            data: [350, 680, 520, 890, 750, 940],
            backgroundColor: '#10b981',
            borderRadius: 4
          },
          {
            label: 'Pending Dues ($)',
            data: [50, 120, 0, 130, 90, 240],
            backgroundColor: '#f59e0b',
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 12 } }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: textColor }
          },
          y: {
            grid: { color: gridColor },
            ticks: { color: textColor }
          }
        }
      }
    });
  }

  // 2. Payment Method Share
  const payCtx = document.getElementById('paymentMethodChart');
  if (payCtx) {
    if (paymentMethodChartInstance) paymentMethodChartInstance.destroy();

    const methodCounts = { Card: 0, Cash: 0, UPI: 0, 'Bank Transfer': 0 };
    appData.payments.forEach(p => {
      if (methodCounts[p.method] !== undefined) methodCounts[p.method]++;
    });

    paymentMethodChartInstance = new Chart(payCtx, {
      type: 'pie',
      data: {
        labels: Object.keys(methodCounts),
        datasets: [{
          data: Object.values(methodCounts),
          backgroundColor: ['#ff5722', '#10b981', '#06b6d4', '#8b5cf6'],
          borderColor: isLight ? '#ffffff' : '#171b26',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: textColor, font: { size: 11 } }
          }
        }
      }
    });
  }

  // 3. Demographics Chart
  const demoCtx = document.getElementById('demographicsChart');
  if (demoCtx) {
    if (demographicsChartInstance) demographicsChartInstance.destroy();

    const genderCounts = { Male: 0, Female: 0, Other: 0 };
    appData.members.forEach(m => {
      if (genderCounts[m.gender] !== undefined) genderCounts[m.gender]++;
      else genderCounts.Other++;
    });

    demographicsChartInstance = new Chart(demoCtx, {
      type: 'doughnut',
      data: {
        labels: ['Male', 'Female', 'Other'],
        datasets: [{
          data: Object.values(genderCounts),
          backgroundColor: ['#06b6d4', '#ec4899', '#8b5cf6'],
          borderColor: isLight ? '#ffffff' : '#171b26',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: textColor, font: { size: 11 } }
          }
        },
        cutout: '65%'
      }
    });
  }
}

/* ==========================================================================
   6. SETTINGS VIEW
   ========================================================================== */
function renderSettings() {
  const s = appData.settings;
  document.getElementById('settingGymName').value = s.gymName || '';
  document.getElementById('settingCurrency').value = s.currency || '$';
  document.getElementById('settingPhone').value = s.phone || '';
  document.getElementById('settingEmail').value = s.email || '';
  document.getElementById('settingAddress').value = s.address || '';
  document.getElementById('settingReceiptFooter').value = s.receiptFooter || '';

  // Update client website footer gym contact info
  const fAddress = document.getElementById('footerGymAddressText');
  const fPhone = document.getElementById('footerGymPhoneText');
  if (fAddress) fAddress.innerHTML = `<i data-lucide="map-pin"></i> ${escapeHtml(s.address || '')}`;
  if (fPhone) fPhone.innerHTML = `<i data-lucide="phone"></i> ${escapeHtml(s.phone || '')}`;
}

/* ==========================================================================
   7. CLIENT WEBSITE & MEMBER PORTAL ENGINE
   ========================================================================== */
function renderClientWebsite() {
  const statMembers = document.getElementById('clientStatMembers');
  const statPlans = document.getElementById('clientStatPlans');

  if (statMembers) statMembers.textContent = appData.members.filter(m => m.status === 'Active').length;
  if (statPlans) statPlans.textContent = appData.plans.length;

  renderPlans();
}

function handleClientLookup() {
  const input = document.getElementById('clientLookupInput');
  const query = (input?.value || '').trim().toLowerCase();
  const resultCard = document.getElementById('clientLookupResult');

  if (!query) {
    showToast('Please enter your Member ID or registered Phone Number', 'warning');
    return;
  }

  const member = appData.members.find(m =>
    m.id.toLowerCase() === query ||
    m.phone.replace(/\D/g, '') === query.replace(/\D/g, '') ||
    (m.email && m.email.toLowerCase() === query)
  );

  if (!member) {
    resultCard.classList.remove('hidden');
    resultCard.innerHTML = `
      <div style="text-align: center; padding: 24px;">
        <i data-lucide="user-x" style="width: 44px; height: 44px; color: var(--accent-red); margin-bottom: 12px;"></i>
        <h4 style="font-size: 1.1rem; font-weight: 800;">Member Not Found</h4>
        <p style="color: var(--text-muted); font-size: 0.88rem; max-width: 420px; margin: 6px auto 16px auto;">
          We could not find an active registration matching <code>${escapeHtml(query)}</code>. Please check your Member ID card or enroll in a new plan below.
        </p>
        <a href="#client-plans" class="btn btn-primary btn-sm">View Available Plans</a>
      </div>
    `;
    initLucideIcons();
    return;
  }

  // Found member! Display interactive pass card with renewal button
  const daysLeft = getDaysRemaining(member.expiryDate);
  const statusBadge = renderStatusBadge(member.status);

  resultCard.classList.remove('hidden');
  resultCard.innerHTML = `
    <div style="max-width: 680px; margin: 0 auto;">
      <div class="gym-id-card">
        <div class="id-card-top">
          <div class="id-card-brand">
            <i data-lucide="dumbbell"></i>
            <span>Apex<span class="accent-text">Fit</span></span>
          </div>
          <div>${statusBadge}</div>
        </div>

        <div class="id-card-body">
          <div class="id-avatar-circle">${getInitials(member.name)}</div>
          <div class="id-member-info">
            <h3>${escapeHtml(member.name)}</h3>
            <span class="id-badge-code">Member ID: ${member.id}</span>
            <div class="id-plan-tag">${escapeHtml(member.planName)}</div>
          </div>
        </div>

        <div class="id-card-footer">
          <div>
            <span class="id-meta-lbl">VALID FROM</span>
            <span class="id-meta-val">${formatDate(member.startDate)}</span>
          </div>
          <div>
            <span class="id-meta-lbl">EXPIRES ON</span>
            <span class="id-meta-val text-accent">${formatDate(member.expiryDate)}</span>
          </div>
          <div>
            <span class="id-meta-lbl">DAYS REMAINING</span>
            <span class="id-meta-val" style="color: ${daysLeft <= 7 ? 'var(--accent-red)' : 'var(--accent-lime)'};">
              ${daysLeft < 0 ? 'Expired' : `${daysLeft} Days`}
            </span>
          </div>
        </div>
      </div>

      <div style="display: flex; gap: 12px; justify-content: flex-end; margin-top: 16px;">
        <button class="btn btn-outline btn-sm" onclick="openViewMemberModal('${member.id}')">
          <i data-lucide="printer"></i> Print ID Badge
        </button>
        <button class="btn btn-primary btn-sm" onclick="quickRenewMember('${member.id}')">
          <i data-lucide="refresh-cw"></i> Renew Subscription
        </button>
      </div>
    </div>
  `;

  initLucideIcons();
}

function openClientJoinModal(planId) {
  const plan = appData.plans.find(p => p.id === planId) || appData.plans[0];
  const modal = document.getElementById('clientJoinModal');
  const currency = appData.settings.currency || '$';

  document.getElementById('joinPlanIdHidden').value = plan.id;
  document.getElementById('joinModalPlanName').textContent = plan.name;
  document.getElementById('joinModalPlanPrice').textContent = `${currency}${Number(plan.price).toFixed(2)}`;

  document.getElementById('clientJoinForm').reset();
  modal.classList.remove('hidden');
  initLucideIcons();
}

function handleClientJoinSubmit(e) {
  e.preventDefault();

  const planId = document.getElementById('joinPlanIdHidden').value;
  const plan = appData.plans.find(p => p.id === planId) || appData.plans[0];

  const fullName = document.getElementById('joinFullName').value.trim();
  const phone = document.getElementById('joinPhone').value.trim();
  const email = document.getElementById('joinEmail').value.trim();
  const gender = document.getElementById('joinGender').value;
  const age = parseInt(document.getElementById('joinAge').value, 10) || null;
  const paymentMethod = document.getElementById('joinPaymentMethod').value;

  const todayStr = new Date().toISOString().split('T')[0];
  const expiryStr = calculateExpiryDate(todayStr, plan.durationMonths);

  // Generate unique Member ID: GYM-xxxx
  const nextNumber = 1000 + appData.members.length + 1;
  const newMemberId = `GYM-${nextNumber}`;

  const newMember = {
    id: newMemberId,
    name: fullName,
    phone: phone,
    email: email,
    gender: gender,
    age: age,
    address: 'Registered via Online Portal',
    registrationDate: todayStr,
    planId: plan.id,
    planName: plan.name,
    startDate: todayStr,
    expiryDate: expiryStr,
    status: 'Active'
  };

  // Generate Payment Record
  const newPaymentId = `PAY-${1000 + appData.payments.length + 1}`;
  const newPayment = {
    id: newPaymentId,
    memberId: newMemberId,
    memberName: fullName,
    planName: plan.name,
    amount: Number(plan.price),
    date: todayStr,
    method: paymentMethod,
    status: paymentMethod === 'Cash' ? 'Pending' : 'Paid',
    reference: `ONLINE-REG-${Math.floor(100000 + Math.random() * 900000)}`
  };

  appData.members.unshift(newMember);
  appData.payments.unshift(newPayment);
  saveData();

  closeModal('clientJoinModal');
  renderAll();

  // Show digital receipt right away!
  openReceiptModal(newPaymentId);
  showToast(`Welcome ${fullName}! Your membership (${newMemberId}) is active.`, 'success');
}

/* ==========================================================================
   MEMBER CRUD MODALS & LOGIC
   ========================================================================== */
function openAddMemberModal() {
  const modal = document.getElementById('memberModal');
  const form = document.getElementById('memberForm');
  form.reset();

  document.getElementById('memberFormMode').value = 'add';
  document.getElementById('memberOriginalId').value = '';
  document.getElementById('memberModalTitle').textContent = 'Add New Member';
  document.getElementById('memberFormSubmitText').textContent = 'Save Member';

  // Suggest next ID
  const nextId = `GYM-${1000 + appData.members.length + 1}`;
  document.getElementById('memberIdInput').value = nextId;
  document.getElementById('memberIdInput').readOnly = false;

  // Default dates
  const todayStr = new Date().toISOString().split('T')[0];
  document.getElementById('memberStartDateInput').value = todayStr;

  const planSelect = document.getElementById('memberPlanInput');
  const selectedOption = planSelect.options[planSelect.selectedIndex];
  const duration = selectedOption ? selectedOption.getAttribute('data-duration') : 1;
  document.getElementById('memberExpiryDateInput').value = calculateExpiryDate(todayStr, duration || 1);

  document.getElementById('autoPaymentCheckboxWrapper').style.display = 'block';

  modal.classList.remove('hidden');
  initLucideIcons();
}

function openEditMemberModal(memberId) {
  const member = appData.members.find(m => m.id === memberId);
  if (!member) return;

  const modal = document.getElementById('memberModal');
  document.getElementById('memberFormMode').value = 'edit';
  document.getElementById('memberOriginalId').value = member.id;
  document.getElementById('memberModalTitle').textContent = `Edit Member: ${member.name}`;
  document.getElementById('memberFormSubmitText').textContent = 'Update Member';

  document.getElementById('memberIdInput').value = member.id;
  document.getElementById('memberIdInput').readOnly = true;
  document.getElementById('memberNameInput').value = member.name;
  document.getElementById('memberPhoneInput').value = member.phone;
  document.getElementById('memberEmailInput').value = member.email || '';
  document.getElementById('memberGenderInput').value = member.gender || 'Male';
  document.getElementById('memberAgeInput').value = member.age || '';
  document.getElementById('memberAddressInput').value = member.address || '';
  document.getElementById('memberStartDateInput').value = member.startDate || '';
  document.getElementById('memberExpiryDateInput').value = member.expiryDate || '';
  document.getElementById('memberStatusInput').value = member.status;

  // Select plan
  const planSelect = document.getElementById('memberPlanInput');
  const planMatch = appData.plans.find(p => p.name === member.planName || p.id === member.planId);
  if (planMatch) {
    planSelect.value = planMatch.id;
  }

  document.getElementById('autoPaymentCheckboxWrapper').style.display = 'none';

  modal.classList.remove('hidden');
  initLucideIcons();
}

function handleMemberFormSubmit(e) {
  e.preventDefault();

  const mode = document.getElementById('memberFormMode').value;
  const id = document.getElementById('memberIdInput').value.trim();
  const name = document.getElementById('memberNameInput').value.trim();
  const phone = document.getElementById('memberPhoneInput').value.trim();
  const email = document.getElementById('memberEmailInput').value.trim();
  const gender = document.getElementById('memberGenderInput').value;
  const age = parseInt(document.getElementById('memberAgeInput').value, 10) || null;
  const address = document.getElementById('memberAddressInput').value.trim();
  const planId = document.getElementById('memberPlanInput').value;
  const startDate = document.getElementById('memberStartDateInput').value;
  const expiryDate = document.getElementById('memberExpiryDateInput').value;
  const status = document.getElementById('memberStatusInput').value;

  const plan = appData.plans.find(p => p.id === planId);
  const planName = plan ? plan.name : 'Standard Plan';

  if (mode === 'add') {
    // Check if Member ID already exists
    if (appData.members.some(m => m.id.toLowerCase() === id.toLowerCase())) {
      showToast(`Member ID "${id}" is already in use!`, 'error');
      return;
    }

    const todayStr = new Date().toISOString().split('T')[0];
    const newMember = {
      id,
      name,
      phone,
      email,
      gender,
      age,
      address,
      registrationDate: todayStr,
      planId,
      planName,
      startDate,
      expiryDate,
      status
    };

    appData.members.unshift(newMember);

    // Initial Payment Recording
    const recordPayment = document.getElementById('recordInitialPaymentCheck').checked;
    if (recordPayment && plan) {
      const paymentId = `PAY-${1000 + appData.payments.length + 1}`;
      appData.payments.unshift({
        id: paymentId,
        memberId: id,
        memberName: name,
        planName: plan.name,
        amount: Number(plan.price),
        date: startDate,
        method: 'Cash',
        status: 'Paid',
        reference: 'Initial Registration'
      });
    }

    showToast(`Member ${name} added successfully!`, 'success');
  } else {
    // Edit mode
    const originalId = document.getElementById('memberOriginalId').value;
    const index = appData.members.findIndex(m => m.id === originalId);
    if (index !== -1) {
      appData.members[index] = {
        ...appData.members[index],
        name,
        phone,
        email,
        gender,
        age,
        address,
        planId,
        planName,
        startDate,
        expiryDate,
        status
      };
      showToast(`Member details for ${name} updated.`, 'success');
    }
  }

  saveData();
  recalculateMembershipStatuses();
  closeModal('memberModal');
  renderAll();
}

function promptDeleteMember(memberId) {
  const member = appData.members.find(m => m.id === memberId);
  if (!member) return;

  openConfirmModal(
    'Delete Member Record',
    `Are you sure you want to permanently delete member "${member.name}" (${member.id})? This will not erase historical billing receipts.`,
    () => {
      appData.members = appData.members.filter(m => m.id !== memberId);
      saveData();
      renderAll();
      showToast(`Member ${member.name} deleted.`, 'info');
    }
  );
}

function openViewMemberModal(memberId) {
  const member = appData.members.find(m => m.id === memberId);
  if (!member) return;

  const modal = document.getElementById('viewMemberModal');

  // Badge card elements
  document.getElementById('viewCardName').textContent = member.name;
  document.getElementById('viewCardId').textContent = `#${member.id}`;
  document.getElementById('viewCardPlan').textContent = member.planName;
  document.getElementById('viewCardStart').textContent = formatDate(member.startDate);
  document.getElementById('viewCardExpiry').textContent = formatDate(member.expiryDate);
  document.getElementById('viewCardAvatar').textContent = getInitials(member.name);

  const statusBadge = document.getElementById('viewCardStatusBadge');
  statusBadge.textContent = (member.status || 'ACTIVE').toUpperCase();
  statusBadge.style.background = member.status === 'Active' ? 'var(--accent-lime)' : member.status === 'Expiring Soon' ? 'var(--accent-amber)' : 'var(--accent-red)';

  // Profile details
  document.getElementById('viewMemberPhone').textContent = member.phone || '-';
  document.getElementById('viewMemberEmail').textContent = member.email || '-';
  document.getElementById('viewMemberGenderAge').textContent = `${member.gender || 'Not specified'}, ${member.age ? `${member.age} yrs old` : ''}`;
  document.getElementById('viewMemberJoined').textContent = formatDate(member.registrationDate);
  document.getElementById('viewMemberAddress').textContent = member.address || '-';

  // Member's payment history
  const memberPayments = appData.payments.filter(p => p.memberId === member.id || p.memberName === member.name);
  const payBody = document.getElementById('viewMemberPaymentsBody');

  if (memberPayments.length === 0) {
    payBody.innerHTML = `<tr><td colspan="5" class="text-center" style="color: var(--text-dim); padding: 12px;">No payment records on file for this member.</td></tr>`;
  } else {
    payBody.innerHTML = memberPayments.map(p => `
      <tr>
        <td><span class="badge-code">${p.id}</span></td>
        <td><strong>${formatCurrency(p.amount)}</strong></td>
        <td>${formatDate(p.date)}</td>
        <td>${p.method}</td>
        <td>${renderStatusBadge(p.status)}</td>
      </tr>
    `).join('');
  }

  // Edit button hook
  const editBtn = document.getElementById('viewMemberEditBtn');
  editBtn.onclick = () => {
    closeModal('viewMemberModal');
    openEditMemberModal(member.id);
  };

  modal.classList.remove('hidden');
  initLucideIcons();
}

function quickRenewMember(memberId) {
  const member = appData.members.find(m => m.id === memberId);
  if (!member) return;

  const plan = appData.plans.find(p => p.name === member.planName || p.id === member.planId) || appData.plans[0];

  // Open Payment modal pre-filled
  openAddPaymentModal();
  document.getElementById('paymentMemberSelect').value = member.id;
  document.getElementById('paymentPlanInput').value = `${plan.name} (Renewal)`;
  document.getElementById('paymentAmountInput').value = plan.price;
}

/* ==========================================================================
   PLAN CRUD MODALS & LOGIC
   ========================================================================== */
function openAddPlanModal() {
  const modal = document.getElementById('planModal');
  const form = document.getElementById('planForm');
  form.reset();

  document.getElementById('planFormMode').value = 'add';
  document.getElementById('planOriginalId').value = '';
  document.getElementById('planModalTitle').textContent = 'Create Membership Plan';
  document.getElementById('planFormSubmitText').textContent = 'Save Plan';

  modal.classList.remove('hidden');
  initLucideIcons();
}

function openEditPlanModal(planId) {
  const plan = appData.plans.find(p => p.id === planId);
  if (!plan) return;

  const modal = document.getElementById('planModal');
  document.getElementById('planFormMode').value = 'edit';
  document.getElementById('planOriginalId').value = plan.id;
  document.getElementById('planModalTitle').textContent = `Edit Plan: ${plan.name}`;
  document.getElementById('planFormSubmitText').textContent = 'Update Plan';

  document.getElementById('planNameInput').value = plan.name;
  document.getElementById('planPriceInput').value = plan.price;
  document.getElementById('planDurationMonthsInput').value = plan.durationMonths;
  document.getElementById('planDescriptionInput').value = plan.description || '';
  document.getElementById('planFeaturesInput').value = (plan.features || []).join('\n');

  modal.classList.remove('hidden');
  initLucideIcons();
}

function handlePlanFormSubmit(e) {
  e.preventDefault();

  const mode = document.getElementById('planFormMode').value;
  const name = document.getElementById('planNameInput').value.trim();
  const price = parseFloat(document.getElementById('planPriceInput').value) || 0;
  const durationMonths = parseInt(document.getElementById('planDurationMonthsInput').value, 10) || 1;
  const description = document.getElementById('planDescriptionInput').value.trim();
  const featuresText = document.getElementById('planFeaturesInput').value.trim();

  const features = featuresText.split('\n').map(s => s.trim()).filter(Boolean);

  if (mode === 'add') {
    const id = `PLAN-${appData.plans.length + 1}`;
    const newPlan = {
      id,
      name,
      price,
      durationMonths,
      tag: durationMonths >= 12 ? 'VIP' : 'Custom',
      description,
      features: features.length > 0 ? features : ['Full Gym Access']
    };
    appData.plans.push(newPlan);
    showToast(`Membership plan "${name}" created.`, 'success');
  } else {
    const originalId = document.getElementById('planOriginalId').value;
    const index = appData.plans.findIndex(p => p.id === originalId);
    if (index !== -1) {
      appData.plans[index] = {
        ...appData.plans[index],
        name,
        price,
        durationMonths,
        description,
        features: features.length > 0 ? features : appData.plans[index].features
      };
      showToast(`Plan "${name}" updated.`, 'success');
    }
  }

  saveData();
  closeModal('planModal');
  renderAll();
}

function promptDeletePlan(planId) {
  const plan = appData.plans.find(p => p.id === planId);
  if (!plan) return;

  const enrolledCount = appData.members.filter(m => m.planName === plan.name || m.planId === plan.id).length;

  if (enrolledCount > 0) {
    showToast(`Cannot delete "${plan.name}" because ${enrolledCount} member(s) are currently subscribed to it.`, 'warning');
    return;
  }

  openConfirmModal(
    'Delete Membership Plan',
    `Are you sure you want to delete "${plan.name}"? This plan will no longer be available for subscription.`,
    () => {
      appData.plans = appData.plans.filter(p => p.id !== planId);
      saveData();
      renderAll();
      showToast(`Plan "${plan.name}" deleted.`, 'info');
    }
  );
}

function openEnrollMemberModal(planId) {
  openAddMemberModal();
  const planSelect = document.getElementById('memberPlanInput');
  planSelect.value = planId;

  // trigger date recalculation
  const startDate = document.getElementById('memberStartDateInput').value;
  const plan = appData.plans.find(p => p.id === planId);
  if (plan) {
    document.getElementById('memberExpiryDateInput').value = calculateExpiryDate(startDate, plan.durationMonths);
  }
}

/* ==========================================================================
   PAYMENT CRUD & RECEIPT ENGINE
   ========================================================================== */
function openAddPaymentModal() {
  const modal = document.getElementById('paymentModal');
  const form = document.getElementById('paymentForm');
  form.reset();

  document.getElementById('paymentFormMode').value = 'add';
  document.getElementById('paymentOriginalId').value = '';
  document.getElementById('paymentModalTitle').textContent = 'Record Member Payment';
  document.getElementById('paymentFormSubmitText').textContent = 'Save Payment';

  // Populate Member dropdown
  const memberSelect = document.getElementById('paymentMemberSelect');
  memberSelect.innerHTML = `<option value="">Select Member...</option>` +
    appData.members.map(m => `<option value="${m.id}" data-name="${escapeHtml(m.name)}" data-plan="${escapeHtml(m.planName)}">${m.name} (${m.id})</option>`).join('');

  document.getElementById('paymentDateInput').value = new Date().toISOString().split('T')[0];

  modal.classList.remove('hidden');
  initLucideIcons();
}

function openEditPaymentModal(paymentId) {
  const payment = appData.payments.find(p => p.id === paymentId);
  if (!payment) return;

  const modal = document.getElementById('paymentModal');
  document.getElementById('paymentFormMode').value = 'edit';
  document.getElementById('paymentOriginalId').value = payment.id;
  document.getElementById('paymentModalTitle').textContent = `Edit Payment: ${payment.id}`;
  document.getElementById('paymentFormSubmitText').textContent = 'Update Payment';

  const memberSelect = document.getElementById('paymentMemberSelect');
  memberSelect.innerHTML = `<option value="${payment.memberId}">${payment.memberName} (${payment.memberId || 'Guest'})</option>`;
  memberSelect.value = payment.memberId;

  document.getElementById('paymentPlanInput').value = payment.planName;
  document.getElementById('paymentAmountInput').value = payment.amount;
  document.getElementById('paymentDateInput').value = payment.date;
  document.getElementById('paymentMethodSelect').value = payment.method;
  document.getElementById('paymentStatusSelect').value = payment.status;
  document.getElementById('paymentReferenceInput').value = payment.reference || '';

  modal.classList.remove('hidden');
  initLucideIcons();
}

function handlePaymentFormSubmit(e) {
  e.preventDefault();

  const mode = document.getElementById('paymentFormMode').value;
  const memberId = document.getElementById('paymentMemberSelect').value;
  const planName = document.getElementById('paymentPlanInput').value.trim();
  const amount = parseFloat(document.getElementById('paymentAmountInput').value) || 0;
  const date = document.getElementById('paymentDateInput').value;
  const method = document.getElementById('paymentMethodSelect').value;
  const status = document.getElementById('paymentStatusSelect').value;
  const reference = document.getElementById('paymentReferenceInput').value.trim();

  const member = appData.members.find(m => m.id === memberId);
  const memberName = member ? member.name : (document.getElementById('paymentMemberSelect').selectedOptions[0]?.getAttribute('data-name') || 'Guest Member');

  if (mode === 'add') {
    const newId = `PAY-${1000 + appData.payments.length + 1}`;
    const newPayment = {
      id: newId,
      memberId,
      memberName,
      planName,
      amount,
      date,
      method,
      status,
      reference
    };
    appData.payments.unshift(newPayment);

    // If paid and it's a renewal, extend membership expiry date automatically!
    if (status === 'Paid' && member) {
      const plan = appData.plans.find(p => p.name === planName || p.id === member.planId);
      const duration = plan ? plan.durationMonths : 1;
      const baseStart = member.status === 'Expired' ? date : (member.expiryDate || date);
      member.expiryDate = calculateExpiryDate(baseStart, duration);
      member.status = 'Active';
    }

    showToast(`Payment of ${formatCurrency(amount)} recorded for ${memberName}.`, 'success');
    closeModal('paymentModal');
    saveData();
    renderAll();
    openReceiptModal(newId);
  } else {
    const originalId = document.getElementById('paymentOriginalId').value;
    const idx = appData.payments.findIndex(p => p.id === originalId);
    if (idx !== -1) {
      appData.payments[idx] = {
        ...appData.payments[idx],
        planName,
        amount,
        date,
        method,
        status,
        reference
      };
      showToast(`Payment ${originalId} updated.`, 'success');
      closeModal('paymentModal');
      saveData();
      renderAll();
    }
  }
}

function promptDeletePayment(paymentId) {
  const payment = appData.payments.find(p => p.id === paymentId);
  if (!payment) return;

  openConfirmModal(
    'Delete Payment Record',
    `Are you sure you want to delete payment receipt "${payment.id}" (${formatCurrency(payment.amount)} from ${payment.memberName})?`,
    () => {
      appData.payments = appData.payments.filter(p => p.id !== paymentId);
      saveData();
      renderAll();
      showToast(`Payment receipt ${payment.id} deleted.`, 'info');
    }
  );
}

function openReceiptModal(paymentId) {
  const payment = appData.payments.find(p => p.id === paymentId);
  if (!payment) return;

  const member = appData.members.find(m => m.id === payment.memberId || m.name === payment.memberName);
  const s = appData.settings;
  const modal = document.getElementById('receiptModal');

  // Fill receipt fields
  document.getElementById('receiptGymName').textContent = s.gymName || 'ApexFit Athletic Club';
  document.getElementById('receiptGymAddress').textContent = s.address || '124 Fitness Blvd, Suite 4A';
  document.getElementById('receiptGymContact').textContent = `Tel: ${s.phone || '+1 555-019-8234'} | ${s.email || 'info@apexfitgym.com'}`;

  document.getElementById('receiptId').textContent = payment.id;
  document.getElementById('receiptDate').textContent = formatDate(payment.date);

  const statusBadge = document.getElementById('receiptStatusBadge');
  statusBadge.textContent = payment.status.toUpperCase();
  statusBadge.style.background = payment.status === 'Paid' ? '#10b981' : payment.status === 'Pending' ? '#f59e0b' : '#ef4444';

  document.getElementById('receiptMemberName').textContent = payment.memberName;
  document.getElementById('receiptMemberId').textContent = `Member ID: ${payment.memberId || 'N/A'}`;
  document.getElementById('receiptMemberPhone').textContent = `Phone: ${member ? member.phone : 'On File'}`;

  document.getElementById('receiptMethod').textContent = payment.method;
  document.getElementById('receiptRef').textContent = `Ref: ${payment.reference || 'DIRECT-VERIFIED'}`;

  document.getElementById('receiptPlanTitle').textContent = payment.planName;
  document.getElementById('receiptPeriod').textContent = 'Full Term';
  document.getElementById('receiptItemAmount').textContent = formatCurrency(payment.amount);
  document.getElementById('receiptSubtotal').textContent = formatCurrency(payment.amount);
  document.getElementById('receiptTotalAmount').textContent = formatCurrency(payment.amount);

  document.getElementById('receiptFooterTerms').textContent = s.receiptFooter || 'Thank you for your business!';

  modal.classList.remove('hidden');
  initLucideIcons();
}

/* ==========================================================================
   CSV EXPORT UTILITIES
   ========================================================================== */
function exportMembersToCSV() {
  if (appData.members.length === 0) {
    showToast('No members to export', 'warning');
    return;
  }

  const headers = ['Member ID', 'Full Name', 'Phone', 'Email', 'Gender', 'Age', 'Address', 'Registration Date', 'Plan Name', 'Start Date', 'Expiry Date', 'Status'];
  const rows = appData.members.map(m => [
    m.id,
    `"${(m.name || '').replace(/"/g, '""')}"`,
    `"${m.phone || ''}"`,
    `"${m.email || ''}"`,
    m.gender || '',
    m.age || '',
    `"${(m.address || '').replace(/"/g, '""')}"`,
    m.registrationDate || '',
    `"${(m.planName || '').replace(/"/g, '""')}"`,
    m.startDate || '',
    m.expiryDate || '',
    m.status || ''
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  downloadBlob(csvContent, `apexfit_members_${new Date().toISOString().split('T')[0]}.csv`, 'text/csv;charset=utf-8;');
  showToast('Members exported to CSV successfully.', 'success');
}

function exportPaymentsToCSV() {
  if (appData.payments.length === 0) {
    showToast('No payment records to export', 'warning');
    return;
  }

  const headers = ['Receipt ID', 'Member ID', 'Member Name', 'Plan Description', 'Amount', 'Date', 'Method', 'Status', 'Reference'];
  const rows = appData.payments.map(p => [
    p.id,
    p.memberId || '',
    `"${(p.memberName || '').replace(/"/g, '""')}"`,
    `"${(p.planName || '').replace(/"/g, '""')}"`,
    p.amount,
    p.date,
    p.method,
    p.status,
    `"${(p.reference || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  downloadBlob(csvContent, `apexfit_payments_${new Date().toISOString().split('T')[0]}.csv`, 'text/csv;charset=utf-8;');
  showToast('Payments exported to CSV successfully.', 'success');
}

function exportJsonBackup() {
  const json = JSON.stringify(appData, null, 2);
  downloadBlob(json, `apexfit_full_backup_${new Date().toISOString().split('T')[0]}.json`, 'application/json');
  showToast('Full system backup downloaded.', 'success');
}

function downloadBlob(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importJsonBackup(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (parsed.members && parsed.plans && parsed.payments) {
        appData = parsed;
        saveData();
        recalculateMembershipStatuses();
        renderAll();
        showToast('System data successfully restored from backup!', 'success');
      } else {
        showToast('Invalid backup file structure.', 'error');
      }
    } catch (err) {
      console.error(err);
      showToast('Could not parse JSON backup file.', 'error');
    }
  };
  reader.readAsText(file);
}

/* ==========================================================================
   CONFIRMATION MODAL HELPER
   ========================================================================== */
let confirmActionCallback = null;

function openConfirmModal(title, message, onConfirm) {
  document.getElementById('confirmModalTitle').textContent = title;
  document.getElementById('confirmModalMessage').textContent = message;
  confirmActionCallback = onConfirm;
  document.getElementById('confirmModal').classList.remove('hidden');
  initLucideIcons();
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('hidden');
}

/* ==========================================================================
   TOAST NOTIFICATION ENGINE
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconName = type === 'success' ? 'check-circle' : type === 'error' ? 'alert-triangle' : type === 'warning' ? 'alert-circle' : 'info';

  toast.innerHTML = `
    <i data-lucide="${iconName}" class="toast-icon"></i>
    <div class="toast-content">
      <div class="toast-title">${capitalize(type)}</div>
      <div class="toast-message">${escapeHtml(message)}</div>
    </div>
    <button class="toast-close">&times;</button>
  `;

  toast.querySelector('.toast-close').addEventListener('click', () => {
    toast.remove();
  });

  container.appendChild(toast);
  initLucideIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* ==========================================================================
   EVENT LISTENERS & BINDINGS
   ========================================================================== */
function initEventListeners() {
  // 1. System Mode Switcher (Client vs Staff)
  document.getElementById('btnSwitchToClient')?.addEventListener('click', () => switchSystemMode('client'));
  document.getElementById('btnSwitchToAdmin')?.addEventListener('click', () => switchSystemMode('admin'));
  document.getElementById('sidebarSwitchToClientBtn')?.addEventListener('click', () => switchSystemMode('client'));
  document.getElementById('clientGoToAdminBtn')?.addEventListener('click', () => switchSystemMode('admin'));
  document.getElementById('footerGoToAdminBtn')?.addEventListener('click', () => switchSystemMode('admin'));

  // 2. Navigation Sidebar Tabs
  document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sidebar-nav .nav-item').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetView = btn.getAttribute('data-view');
      document.querySelectorAll('.content-view').forEach(view => view.classList.remove('active'));
      const activeSection = document.getElementById(`view-${targetView}`);
      if (activeSection) activeSection.classList.add('active');

      // Update page title
      const titleMap = {
        dashboard: { title: 'Dashboard', sub: 'Real-time gym operations, membership statistics, and revenue' },
        members: { title: 'Members Management', sub: 'View, search, filter, register, and update gym members' },
        plans: { title: 'Membership Plans', sub: 'Configure subscription tiers, pricing, duration, and member assignments' },
        payments: { title: 'Payments & Billing', sub: 'Track cash flow, record dues, generate receipts, and manage billing' },
        analytics: { title: 'Analytics & Insights', sub: 'Financial breakdowns, membership dynamics, and demographic trends' },
        settings: { title: 'Gym Settings & Data', sub: 'Configure gym business profile, currency symbol, and backup data' }
      };

      if (titleMap[targetView]) {
        document.getElementById('pageTitle').textContent = titleMap[targetView].title;
        document.getElementById('pageSubtitle').textContent = titleMap[targetView].sub;
      }

      // Close mobile sidebar if open
      closeMobileSidebar();

      // Trigger chart re-render on tab switch
      if (targetView === 'dashboard') setTimeout(renderDashboardCharts, 50);
      if (targetView === 'analytics') setTimeout(renderAnalyticsCharts, 50);
    });
  });

  // Link button in dashboard to view all members
  document.querySelectorAll('[data-view="members"]').forEach(el => {
    if (el.tagName === 'BUTTON' && !el.classList.contains('nav-item')) {
      el.addEventListener('click', () => {
        document.querySelector('.sidebar-nav [data-view="members"]')?.click();
      });
    }
  });

  // Mobile sidebar drawer
  document.getElementById('mobileMenuBtn')?.addEventListener('click', openMobileSidebar);
  document.getElementById('closeSidebarBtn')?.addEventListener('click', closeMobileSidebar);
  document.getElementById('sidebarOverlay')?.addEventListener('click', closeMobileSidebar);

  // Theme switch
  document.getElementById('themeToggleBtn')?.addEventListener('click', toggleTheme);

  // Quick Check-in in sidebar
  document.getElementById('quickCheckinBtn')?.addEventListener('click', handleQuickCheckin);
  document.getElementById('quickCheckinInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleQuickCheckin();
  });

  // Global search input
  document.getElementById('globalSearchInput')?.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (val) {
      document.querySelector('.sidebar-nav [data-view="members"]')?.click();
      const memberSearch = document.getElementById('memberSearchInput');
      if (memberSearch) {
        memberSearch.value = val;
        renderMembers();
      }
    }
  });

  // Notifications Menu Toggle
  const notifBtn = document.getElementById('notificationBtn');
  const notifMenu = document.getElementById('notificationMenu');
  notifBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    notifMenu.classList.toggle('hidden');
  });
  document.addEventListener('click', (e) => {
    if (!notifMenu?.contains(e.target) && !notifBtn?.contains(e.target)) {
      notifMenu?.classList.add('hidden');
    }
  });
  document.getElementById('markAlertsReadBtn')?.addEventListener('click', () => {
    document.getElementById('urgentAlertBanner')?.classList.add('hidden');
    document.getElementById('notificationBadge').style.display = 'none';
    showToast('Alerts dismissed.', 'info');
  });

  // Header quick buttons
  document.getElementById('headerAddMemberBtn')?.addEventListener('click', openAddMemberModal);
  document.getElementById('headerAddPaymentBtn')?.addEventListener('click', openAddPaymentModal);
  document.getElementById('openAddMemberModalBtn')?.addEventListener('click', openAddMemberModal);
  document.getElementById('openAddPlanModalBtn')?.addEventListener('click', openAddPlanModal);
  document.getElementById('openAddPaymentModalBtn')?.addEventListener('click', openAddPaymentModal);
  document.getElementById('emptyStateAddMemberBtn')?.addEventListener('click', openAddMemberModal);
  document.getElementById('emptyStateAddPaymentBtn')?.addEventListener('click', openAddPaymentModal);

  // Dismiss urgent alert
  document.getElementById('dismissAlertBtn')?.addEventListener('click', () => {
    document.getElementById('urgentAlertBanner').classList.add('hidden');
  });
  document.getElementById('viewExpiringActionBtn')?.addEventListener('click', () => {
    document.querySelector('.sidebar-nav [data-view="members"]')?.click();
    document.getElementById('memberStatusFilter').value = 'Expiring Soon';
    renderMembers();
  });
  document.getElementById('filterExpiringQuickBtn')?.addEventListener('click', () => {
    document.querySelector('.sidebar-nav [data-view="members"]')?.click();
    document.getElementById('memberStatusFilter').value = 'Expiring Soon';
    renderMembers();
  });

  // Member search & filters
  document.getElementById('memberSearchInput')?.addEventListener('input', renderMembers);
  document.getElementById('memberStatusFilter')?.addEventListener('change', renderMembers);
  document.getElementById('memberPlanFilter')?.addEventListener('change', renderMembers);
  document.getElementById('memberGenderFilter')?.addEventListener('change', renderMembers);
  document.getElementById('resetMemberFiltersBtn')?.addEventListener('click', () => {
    document.getElementById('memberSearchInput').value = '';
    document.getElementById('memberStatusFilter').value = 'all';
    document.getElementById('memberPlanFilter').value = 'all';
    document.getElementById('memberGenderFilter').value = 'all';
    renderMembers();
  });

  // Table header sorting
  document.querySelectorAll('#view-members .data-table th.sortable').forEach(th => {
    th.addEventListener('click', () => {
      const col = th.getAttribute('data-sort');
      if (memberSortColumn === col) {
        memberSortAsc = !memberSortAsc;
      } else {
        memberSortColumn = col;
        memberSortAsc = true;
      }
      renderMembers();
    });
  });

  // Member Form dynamic expiry calculation on plan or start date change
  document.getElementById('memberPlanInput')?.addEventListener('change', (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const duration = selectedOption ? selectedOption.getAttribute('data-duration') : 1;
    const startDate = document.getElementById('memberStartDateInput').value;
    document.getElementById('memberExpiryDateInput').value = calculateExpiryDate(startDate, duration);
  });

  document.getElementById('memberStartDateInput')?.addEventListener('change', (e) => {
    const planSelect = document.getElementById('memberPlanInput');
    const selectedOption = planSelect.options[planSelect.selectedIndex];
    const duration = selectedOption ? selectedOption.getAttribute('data-duration') : 1;
    document.getElementById('memberExpiryDateInput').value = calculateExpiryDate(e.target.value, duration);
  });

  // Payment Member select auto-fill plan and amount
  document.getElementById('paymentMemberSelect')?.addEventListener('change', (e) => {
    const memberId = e.target.value;
    const member = appData.members.find(m => m.id === memberId);
    if (member) {
      document.getElementById('paymentPlanInput').value = member.planName;
      const plan = appData.plans.find(p => p.name === member.planName || p.id === member.planId);
      if (plan) {
        document.getElementById('paymentAmountInput').value = plan.price;
      }
    }
  });

  // Payment filters & search
  document.getElementById('paymentSearchInput')?.addEventListener('input', renderPayments);
  document.getElementById('paymentStatusFilter')?.addEventListener('change', renderPayments);
  document.getElementById('paymentMethodFilter')?.addEventListener('change', renderPayments);
  document.getElementById('resetPaymentFiltersBtn')?.addEventListener('click', () => {
    document.getElementById('paymentSearchInput').value = '';
    document.getElementById('paymentStatusFilter').value = 'all';
    document.getElementById('paymentMethodFilter').value = 'all';
    renderPayments();
  });

  // Form submits
  document.getElementById('memberForm')?.addEventListener('submit', handleMemberFormSubmit);
  document.getElementById('planForm')?.addEventListener('submit', handlePlanFormSubmit);
  document.getElementById('paymentForm')?.addEventListener('submit', handlePaymentFormSubmit);
  document.getElementById('clientJoinForm')?.addEventListener('submit', handleClientJoinSubmit);

  // Settings form submit
  document.getElementById('gymSettingsForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    appData.settings.gymName = document.getElementById('settingGymName').value.trim();
    appData.settings.currency = document.getElementById('settingCurrency').value;
    appData.settings.phone = document.getElementById('settingPhone').value.trim();
    appData.settings.email = document.getElementById('settingEmail').value.trim();
    appData.settings.address = document.getElementById('settingAddress').value.trim();
    appData.settings.receiptFooter = document.getElementById('settingReceiptFooter').value.trim();
    saveData();
    renderAll();
    showToast('Gym business settings saved successfully!', 'success');
  });

  // Backup & Data management buttons
  document.getElementById('exportMembersCsvBtn')?.addEventListener('click', exportMembersToCSV);
  document.getElementById('exportPaymentsCsvBtn')?.addEventListener('click', exportPaymentsToCSV);
  document.getElementById('exportJsonBackupBtn')?.addEventListener('click', exportJsonBackup);
  document.getElementById('importJsonFileInput')?.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      importJsonBackup(e.target.files[0]);
    }
  });
  document.getElementById('resetDemoDataBtn')?.addEventListener('click', () => {
    openConfirmModal(
      'Reset to Sample Data',
      'This will replace your current records with fresh default demo members, plans, and receipts. Continue?',
      () => resetToDefaultData(true)
    );
  });
  document.getElementById('wipeAllDataBtn')?.addEventListener('click', () => {
    openConfirmModal(
      'Wipe All Records',
      'WARNING: This will permanently delete ALL members and payments from local storage. Are you absolutely sure?',
      () => wipeAllData()
    );
  });

  // Print buttons
  document.getElementById('printReceiptBtn')?.addEventListener('click', () => window.print());
  document.getElementById('printMemberCardBtn')?.addEventListener('click', () => window.print());
  document.getElementById('printReportBtn')?.addEventListener('click', () => window.print());

  // Confirm dialog button
  document.getElementById('confirmModalActionBtn')?.addEventListener('click', () => {
    if (confirmActionCallback) {
      confirmActionCallback();
      confirmActionCallback = null;
    }
    closeModal('confirmModal');
  });

  // Generic modal close buttons
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.getAttribute('data-modal');
      if (modalId) closeModal(modalId);
    });
  });

  // Close modals when clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.add('hidden');
    });
  });

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.add('hidden'));
    }
  });

  // Client website self-service lookup
  document.getElementById('clientLookupSubmitBtn')?.addEventListener('click', handleClientLookup);
  document.getElementById('clientLookupInput')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleClientLookup();
  });
  document.getElementById('clientOpenStatusBtn')?.addEventListener('click', () => {
    const portal = document.getElementById('client-portal');
    portal?.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('clientLookupInput')?.focus();
  });

  // Free trial pass modal
  document.getElementById('heroOpenTrialBtn')?.addEventListener('click', () => {
    document.getElementById('trialModal').classList.remove('hidden');
    document.getElementById('trialDate').value = new Date().toISOString().split('T')[0];
    initLucideIcons();
  });
  document.getElementById('trialForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('trialName').value.trim();
    const phone = document.getElementById('trialPhone').value.trim();
    const date = document.getElementById('trialDate').value;

    closeModal('trialModal');
    showToast(`Free 1-Day Trial Pass generated for ${name} on ${formatDate(date)}!`, 'success');
  });

  // Class schedule filter tabs
  document.querySelectorAll('.sched-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.sched-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const day = tab.getAttribute('data-day');
      document.querySelectorAll('#classesGrid .class-card').forEach(card => {
        if (day === 'all' || card.getAttribute('data-day') === day) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Class booking buttons
  document.querySelectorAll('.book-class-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cls = btn.getAttribute('data-class');
      showToast(`Reserved 1 slot for "${cls}". See you on the gym floor!`, 'success');
    });
  });
}

function handleQuickCheckin() {
  const input = document.getElementById('quickCheckinInput');
  const val = (input?.value || '').trim();

  if (!val) {
    appData.liveOccupancy = (appData.liveOccupancy || 0) + 1;
    saveData();
    renderSidebarStats();
    showToast(`Floor occupancy updated: ${appData.liveOccupancy} in gym.`, 'info');
    return;
  }

  // Look up member
  const member = appData.members.find(m =>
    m.id.toLowerCase() === val.toLowerCase() ||
    m.phone.replace(/\D/g, '') === val.replace(/\D/g, '')
  );

  if (member) {
    if (member.status === 'Expired') {
      showToast(`Access Denied! ${member.name}'s pass expired on ${formatDate(member.expiryDate)}.`, 'error');
    } else {
      appData.liveOccupancy = (appData.liveOccupancy || 0) + 1;
      saveData();
      renderSidebarStats();
      showToast(`Check-In Approved: Welcome back, ${member.name}!`, 'success');
      input.value = '';
    }
  } else {
    showToast(`Member "${val}" not found in database.`, 'warning');
  }
}

function openMobileSidebar() {
  document.getElementById('sidebar')?.classList.add('open');
  document.getElementById('sidebarOverlay')?.classList.add('active');
}

function closeMobileSidebar() {
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebarOverlay')?.classList.remove('active');
}

/* ==========================================================================
   FORMATTING & UTILITY HELPERS
   ========================================================================== */
function getInitials(name) {
  if (!name) return 'MB';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function renderStatusBadge(status) {
  const s = status || 'Active';
  let badgeClass = 'active-status';
  if (s === 'Expiring Soon') badgeClass = 'expiring-status';
  else if (s === 'Expired') badgeClass = 'expired-status';
  else if (s === 'Inactive') badgeClass = 'inactive-status';
  else if (s === 'Paid') badgeClass = 'paid-status';
  else if (s === 'Pending') badgeClass = 'pending-status';
  else if (s === 'Overdue') badgeClass = 'overdue-status';

  return `<span class="status-badge ${badgeClass}">${escapeHtml(s)}</span>`;
}
