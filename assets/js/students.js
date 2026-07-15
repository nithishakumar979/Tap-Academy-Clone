/* ═══════════════════════════════════════════════════════
   TAP ACADEMY – STUDENTS.JS
   Real placed student data + dynamic card & modal renderer
   ═══════════════════════════════════════════════════════ */

/* ── STUDENT DATA ──────────────────────────────────────
   Replace image paths with your uploaded filenames.
   Supported formats: .jpg / .png / .webp
   Place files in: assets/images/students/
   ─────────────────────────────────────────────────────── */
const STUDENTS = [
  {
    id: 1,
    name: 'Nithish Reddy',
    image: 'assets/images/students/nithish-reddy.png',
    /* ↑ Replace filename with your uploaded image */
    initials: 'NR',
    avatarGradient: 'linear-gradient(135deg,#1e3c72,#2a5298)',
    course: 'Full Stack Development',
    company: 'Glider',
    role: 'Associate Software Engineer',
    package: '₹5.3 LPA',
    placementYear: '2024',
    skills: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'Git'],
    story: 'Nithish joined Tap Academy with a strong desire to break into the software industry. Through Tap Academy\'s rigorous Full Stack Development program, he built multiple real-world projects that caught the attention of top recruiters. His consistent efforts in coding practice and mock interviews prepared him thoroughly for placement drives.',
    testimonial: 'Tap Academy gave me the skills, confidence, and platform I needed. The mentors were incredibly supportive and the placement support was outstanding!'
  },
  {
    id: 2,
    name: 'Sanika Santosh',
    image: 'assets/images/students/sanika-santosh.png',
    initials: 'SS',
    avatarGradient: 'linear-gradient(135deg,#f093fb,#f5576c)',
    course: 'Full Stack Development',
    company: 'Zeta',
    role: 'Software Engineer',
    package: '₹16 LPA',
    placementYear: '2024',
    skills: ['Java', 'Spring Boot', 'React.js', 'Node.js', 'Microservices', 'AWS'],
    story: 'Sanika\'s journey at Tap Academy is one of the most inspiring success stories. She joined with basic programming knowledge and, through dedicated training and mentorship, she secured a coveted role at Zeta — one of India\'s leading fintech companies — with a stunning package of ₹16 LPA. Her hard work and the academy\'s structured curriculum made the impossible possible.',
    testimonial: 'Joining Tap Academy was the best decision of my career. The quality of teaching and the real-world projects helped me crack a dream company with an amazing salary package!'
  },
  {
    id: 3,
    name: 'Kavitha B G',
    image: 'assets/images/students/kavitha-bg.png',
    initials: 'KB',
    avatarGradient: 'linear-gradient(135deg,#4facfe,#00f2fe)',
    course: 'Software Testing (QA)',
    company: 'QUALISTEST',
    role: 'Trainee Software Engineer',
    package: '₹5.15 LPA',
    placementYear: '2024',
    skills: ['Manual Testing', 'Selenium', 'Java', 'TestNG', 'JIRA', 'SQL'],
    story: 'Kavitha pursued Tap Academy\'s software testing program with a clear goal: to build a solid QA career. Her thorough understanding of testing methodologies and her practical exposure to tools like Selenium helped her stand out in the QUALISTEST placement drive. She now contributes to high-quality software delivery as a Trainee Software Engineer.',
    testimonial: 'Tap Academy\'s practical approach to learning really helped me understand the software testing field deeply. I got placed before even completing the course!'
  },
  {
    id: 4,
    name: 'Ajay Kumar Soni',
    image: 'assets/images/students/ajay-kumar-soni.png',
    initials: 'AK',
    avatarGradient: 'linear-gradient(135deg,#43e97b,#38f9d7)',
    course: 'Java Full Stack',
    company: 'LTIMindtree',
    role: 'Software Engineer',
    package: '₹5 LPA',
    placementYear: '2024',
    skills: ['Core Java', 'Spring Boot', 'Hibernate', 'MySQL', 'HTML/CSS', 'JavaScript'],
    story: 'Ajay Kumar Soni came to Tap Academy determined to land a job at a top MNC. After completing the Java Full Stack program, he developed strong coding skills and a project portfolio that impressed LTIMindtree\'s technical panel. He sailed through the interviews with flying colors and secured a software engineering role at this prestigious IT giant.',
    testimonial: 'The structured curriculum and hands-on projects at Tap Academy were exactly what I needed. I am proud to be working at LTIMindtree now!'
  },
  {
    id: 5,
    name: 'Sushma S R',
    image: 'assets/images/students/sushma-sr.png',
    initials: 'SR',
    avatarGradient: 'linear-gradient(135deg,#fa709a,#fee140)',
    course: 'Software Testing (QA)',
    company: 'QUALISTEST',
    role: 'Trainee Software Engineer',
    package: '₹5.25 LPA',
    placementYear: '2024',
    skills: ['Manual Testing', 'Automation Testing', 'Selenium', 'JIRA', 'Agile', 'SQL'],
    story: 'Sushma S R transformed her career trajectory with Tap Academy\'s Software Testing program. With zero prior IT experience, she mastered both manual and automation testing tools. Her analytical mindset and dedication during the training period made her a top performer. QUALISTEST hired her immediately after her technical assessment.',
    testimonial: 'I had no IT background before joining Tap Academy. The faculty guided me at every step and helped me build a career I had only dreamed of. Forever grateful!'
  },
  {
    id: 6,
    name: 'Guru Prasad',
    image: 'assets/images/students/guru-prasad.png',
    initials: 'GP',
    avatarGradient: 'linear-gradient(135deg,#f7971e,#ffd200)',
    course: 'Full Stack Development',
    company: 'Baxter',
    role: 'Software Trainee',
    package: '₹12 LPA',
    placementYear: '2024',
    skills: ['Java', 'Spring Boot', 'React.js', 'REST APIs', 'Docker', 'MySQL'],
    story: 'Guru Prasad is a testament to what dedication and the right training can achieve. He enrolled in Tap Academy\'s Full Stack program and emerged as one of the top performers in his batch. Baxter, a global healthcare technology leader, recruited him as a Software Trainee with an impressive ₹12 LPA package — a remarkable start to his professional journey.',
    testimonial: 'Tap Academy prepared me for global companies. The mentors pushed me to think beyond textbooks, and that is what helped me crack Baxter\'s technical rounds with confidence!'
  },
  {
    id: 7,
    name: 'Dhairya Naresh Maisheri',
    image: 'assets/images/students/dhairya-maisheri.png',
    initials: 'DM',
    avatarGradient: 'linear-gradient(135deg,#30cfd0,#330867)',
    course: 'Full Stack Development',
    company: 'IBM',
    role: 'Associate System Engineer',
    package: '₹5.25 LPA',
    placementYear: '2024',
    skills: ['Java', 'Spring Boot', 'React.js', 'DB2', 'Cloud Fundamentals', 'Git'],
    story: 'Dhairya Naresh Maisheri set his sights on IBM — one of the world\'s most iconic technology companies. Through Tap Academy\'s comprehensive Full Stack Development curriculum and the academy\'s placement support team, he was able to refine his skills and walk into IBM\'s interviews with confidence. He now proudly works as an Associate System Engineer at IBM.',
    testimonial: 'Dreaming of IBM seemed far-fetched, but Tap Academy made it real. The interview prep sessions and project work were exactly what IBM\'s recruitment team was looking for!'
  },
  {
    id: 8,
    name: 'Vinay Kumar R',
    image: 'assets/images/students/vinay-kumar-r.png',
    initials: 'VK',
    avatarGradient: 'linear-gradient(135deg,#a18cd1,#fbc2eb)',
    course: 'Java Full Stack',
    company: 'PowerSchool',
    role: 'Associate Engineer',
    package: '₹6.8 LPA',
    placementYear: '2024',
    skills: ['Java', 'Spring MVC', 'React.js', 'PostgreSQL', 'REST APIs', 'Agile/Scrum'],
    story: 'Vinay Kumar R had a passion for engineering but lacked direction. Tap Academy\'s Java Full Stack program provided the structured learning environment he needed. He excelled in live projects simulating EdTech platforms, which directly aligned with PowerSchool\'s domain. PowerSchool\'s technical team was impressed by his project quality and offered him the Associate Engineer role.',
    testimonial: 'The live project experience at Tap Academy was a game-changer for my interviews. PowerSchool loved that I already had hands-on experience with real-world applications!'
  }
];

/* ── RENDER CARDS ──────────────────────────────────── */
function renderStudents() {
  const grid = document.getElementById('success-stories-grid');
  if (!grid) return;

  grid.innerHTML = STUDENTS.map((s, i) => `
    <article class="success-card reveal" onclick="openStudentModal(${s.id})" role="button"
      tabindex="0" aria-label="Read ${s.name}'s success story"
      onkeydown="if(event.key==='Enter')openStudentModal(${s.id})"
      style="animation-delay:${i * 0.08}s">
      <div class="sc-blue-band"></div>
      <div class="sc-img-wrapper">
        <img
          src="${s.image}"
          alt="Photo of ${s.name}"
          class="sc-img"
          loading="lazy"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
        />
        <div class="sc-img-fallback" style="background:${s.avatarGradient};display:none;">
          ${s.initials}
        </div>
      </div>
      <div class="sc-content">
        <h3 class="sc-name">${s.name}</h3>
        <p class="sc-course"><i class="fas fa-graduation-cap"></i> ${s.course}</p>
        <div class="sc-divider"></div>
        <p class="sc-role"><i class="fas fa-user-tie"></i> ${s.role}</p>
        <p class="sc-company"><i class="fas fa-building"></i> ${s.company}</p>
        <div class="sc-package">
          <i class="fas fa-indian-rupee-sign"></i>${s.package}
        </div>
        <button class="btn-read-story" onclick="openStudentModal(${s.id});event.stopPropagation();" aria-label="Read ${s.name}'s story">
          Read Story <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </article>
  `).join('');

  // Re-run reveal observer on new cards
  grid.querySelectorAll('.reveal').forEach(el => {
    el.classList.remove('visible');
    if (window.revealObserver) window.revealObserver.observe(el);
    else el.classList.add('visible');
  });
}

/* ── OPEN MODAL ────────────────────────────────────── */
function openStudentModal(id) {
  const s = STUDENTS.find(st => st.id === id);
  if (!s) return;

  const overlay = document.getElementById('student-modal-overlay');
  const box = document.getElementById('student-modal-content');
  if (!overlay || !box) return;

  box.innerHTML = `
    <button class="sm-close-btn" onclick="closeStudentModal()" aria-label="Close">
      <i class="fas fa-times"></i>
    </button>

    <div class="sm-header-new">
      <div class="sm-img-container">
        <img src="${s.image}" alt="${s.name}" class="sm-large-img"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex';" />
        <div class="sm-photo-fallback" style="background:${s.avatarGradient};display:none;width:100%;height:100%;border-radius:50%;align-items:center;justify-content:center;color:#fff;font-size:2rem;font-weight:bold;">${s.initials}</div>
      </div>
      <div class="sm-info-container">
        <h2>${s.name}</h2>
        <p class="sm-role-company">${s.role} @ ${s.company}</p>
        <p class="sm-meta-item"><i class="fas fa-graduation-cap"></i> ${s.course}</p>
        <p class="sm-meta-item"><i class="fas fa-calendar-alt"></i> Placement Year: ${s.placementYear}</p>
        <span class="sm-package-badge">${s.package}</span>
      </div>
    </div>

    <div class="sm-body-new">
      <div class="sm-section-new">
        <h4><i class="fas fa-book-open"></i> Success Story</h4>
        <p>${s.story}</p>
      </div>

      <div class="sm-section-new">
        <h4><i class="fas fa-tools"></i> Skills Learned</h4>
        <div class="sm-skills-grid">
          ${s.skills.map(sk => `<span class="sm-skill-tag-new">${sk}</span>`).join('')}
        </div>
      </div>

      <div class="sm-testimonial-box">
        <i class="fas fa-quote-left quote-icon"></i>
        <p><em>"${s.testimonial}"</em></p>
      </div>
    </div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/* ── CLOSE MODAL ───────────────────────────────────── */
function closeStudentModal() {
  const overlay = document.getElementById('student-modal-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeStudentModal(); });
document.addEventListener('DOMContentLoaded', renderStudents);
