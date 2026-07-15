/* ═══════════════════════════════════════════════════════
   TAP ACADEMY – HIRE PAGE JS
   Form submission handling
   ═══════════════════════════════════════════════════════ */

function submitHireForm(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-hire-btn');
  if (btn) {
    btn.innerHTML = '<i class="fas fa-check-circle"></i> Request Sent! We\'ll contact you within 24 hours.';
    btn.style.background = 'linear-gradient(135deg, #43e97b, #38f9d7)';
    btn.style.color = '#0a0e27';
    btn.disabled = true;
  }
  setTimeout(() => {
    if (btn) {
      btn.innerHTML = 'Send Hiring Request <i class="fas fa-paper-plane"></i>';
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
    }
    e.target.reset();
  }, 5000);
}
