/* ═══════════════════════════════════════════════════════
   TAP ACADEMY – COURSE DETAIL JS
   Loads course data from URL param, populates page
   ═══════════════════════════════════════════════════════ */

const COURSE_DATA = {
  java: {
    title: 'Java Full Stack Development',
    level: 'Advanced',
    levelClass: 'advanced',
    duration: '6 Months',
    projects: '8 Projects',
    feeOriginal: '₹60,000',
    fee: '₹45,000',
    overview: 'Master enterprise-grade Java development with Spring Boot, React.js, MySQL, and cloud deployment. This comprehensive program takes you from fundamentals to building and deploying production-ready full-stack applications.',
    imgSrc: 'assets/images/java_course.jpg',
    syllabus: [
      { module: 'Module 1: Core Java', topics: ['OOP Concepts', 'Collections & Generics', 'Exception Handling', 'Multithreading', 'File I/O & Streams'], count: '5 Topics' },
      { module: 'Module 2: Advanced Java', topics: ['JDBC', 'Servlets & JSP', 'Java EE Concepts', 'Design Patterns', 'Build Tools (Maven)'], count: '5 Topics' },
      { module: 'Module 3: Spring Ecosystem', topics: ['Spring Core & IoC', 'Spring Boot', 'Spring MVC', 'Spring Security', 'Spring Data JPA'], count: '5 Topics' },
      { module: 'Module 4: Database', topics: ['MySQL Advanced', 'Hibernate ORM', 'Query Optimization', 'Transactions', 'NoSQL Introduction'], count: '5 Topics' },
      { module: 'Module 5: React.js Frontend', topics: ['React Fundamentals', 'Hooks & State', 'Redux Toolkit', 'React Router', 'API Integration'], count: '5 Topics' },
      { module: 'Module 6: DevOps & Cloud', topics: ['Git & GitHub', 'Docker Containers', 'AWS EC2 & RDS', 'CI/CD Pipeline', 'Deployment'], count: '5 Topics' },
    ],
    outcomes: [
      { icon: 'fas fa-code', title: 'Build Full Stack Apps', desc: 'Develop complete enterprise-grade applications from frontend to backend.' },
      { icon: 'fas fa-cloud', title: 'Deploy to Cloud', desc: 'Deploy apps to AWS, set up CI/CD pipelines, and manage containers with Docker.' },
      { icon: 'fas fa-database', title: 'Database Mastery', desc: 'Design efficient database schemas and write optimized SQL queries.' },
      { icon: 'fas fa-shield-alt', title: 'Secure Applications', desc: 'Implement JWT authentication, OAuth, and Spring Security best practices.' },
      { icon: 'fas fa-project-diagram', title: 'System Design', desc: 'Design scalable microservices architectures used in top tech companies.' },
      { icon: 'fas fa-briefcase', title: 'Interview Ready', desc: 'Crack Java interviews at top MNCs with 200+ practice problems and mock rounds.' },
    ],
    instructor: {
      name: 'Rajesh Kumar',
      title: 'Senior Java Architect',
      exp: '12+ Years at Infosys, Cognizant & IBM',
      bio: 'Rajesh is a Java Champion with 12 years of enterprise development experience. He has led teams of 50+ engineers building banking and e-commerce platforms. His teaching style combines deep technical knowledge with real-world problem-solving scenarios that prepare students for actual job challenges.'
    }
  },
  dsa: {
    title: 'Data Structures & Algorithms',
    level: 'Intermediate',
    levelClass: 'intermediate',
    duration: '3 Months',
    projects: '5 Projects',
    feeOriginal: '₹25,000',
    fee: '₹18,000',
    overview: 'Master the art of problem-solving and algorithmic thinking required to crack FAANG and top product company interviews. Covers arrays to system design with 300+ problems, timed contests, and mock FAANG rounds.',
    imgSrc: 'assets/images/dsa_course.jpg',
    syllabus: [
      { module: 'Module 1: Fundamentals', topics: ['Arrays & Strings', 'Recursion & Backtracking', 'Sorting & Searching', 'Big O Analysis', 'Math Algorithms'], count: '5 Topics' },
      { module: 'Module 2: Data Structures', topics: ['Linked Lists', 'Stacks & Queues', 'Trees & BST', 'Heaps & Priority Queues', 'Tries & Segment Trees'], count: '5 Topics' },
      { module: 'Module 3: Graphs', topics: ['Graph Representation', 'BFS & DFS', 'Shortest Paths', 'MST Algorithms', 'Topological Sort'], count: '5 Topics' },
      { module: 'Module 4: Advanced Algorithms', topics: ['Dynamic Programming', 'Greedy Algorithms', 'Divide & Conquer', 'Bit Manipulation', 'Two Pointers'], count: '5 Topics' },
      { module: 'Module 5: System Design', topics: ['Scalability Basics', 'Load Balancing', 'Caching', 'Database Sharding', 'CAP Theorem'], count: '5 Topics' },
    ],
    outcomes: [
      { icon: 'fas fa-brain', title: 'Algorithmic Thinking', desc: 'Develop the problem-solving mindset to tackle any coding challenge efficiently.' },
      { icon: 'fas fa-tachometer-alt', title: 'Optimize Solutions', desc: 'Analyze time and space complexity and write optimal solutions.' },
      { icon: 'fas fa-trophy', title: 'Crack FAANG Interviews', desc: 'Solve 300+ curated problems covering all interview patterns.' },
      { icon: 'fas fa-network-wired', title: 'System Design', desc: 'Design large-scale distributed systems like senior engineers.' },
    ],
    instructor: {
      name: 'Siva Prasad',
      title: 'ex-Google SDE & DSA Expert',
      exp: '10+ Years at Google & Goldman Sachs',
      bio: 'Siva cracked Google, Amazon, and Facebook interviews and now dedicates himself to helping others do the same. His 10-year experience includes working on search algorithms and recommendation systems. Known for making complex topics crystal clear through vivid analogies and step-by-step explanations.'
    }
  },
  web: {
    title: 'Web Development',
    level: 'Beginner',
    levelClass: 'beginner',
    duration: '4 Months',
    projects: '6 Projects',
    feeOriginal: '₹35,000',
    fee: '₹25,000',
    overview: 'A comprehensive beginner-to-professional course covering the entire web stack. From your first HTML tag to deploying full-stack applications with Node.js and MongoDB. Perfect for absolute beginners.',
    imgSrc: 'assets/images/web_course.jpg',
    syllabus: [
      { module: 'Module 1: HTML & CSS', topics: ['HTML5 Semantic Tags', 'CSS Flexbox & Grid', 'Responsive Design', 'CSS Animations', 'Bootstrap 5'], count: '5 Topics' },
      { module: 'Module 2: JavaScript', topics: ['Core JS & ES6+', 'DOM Manipulation', 'Async JS & Promises', 'Fetch API', 'Local Storage'], count: '5 Topics' },
      { module: 'Module 3: React.js', topics: ['Components & JSX', 'State & Props', 'React Hooks', 'React Router', 'Context API'], count: '5 Topics' },
      { module: 'Module 4: Backend', topics: ['Node.js Fundamentals', 'Express.js Framework', 'REST API Design', 'Authentication (JWT)', 'File Uploads'], count: '5 Topics' },
      { module: 'Module 5: Database & Deployment', topics: ['MongoDB & Mongoose', 'SQL Basics', 'Git & GitHub', 'Heroku/Vercel Deploy', 'Domain Setup'], count: '5 Topics' },
    ],
    outcomes: [
      { icon: 'fas fa-paint-brush', title: 'Beautiful UI Design', desc: 'Create stunning, responsive user interfaces using modern CSS techniques.' },
      { icon: 'fas fa-mobile-alt', title: 'Mobile-First Development', desc: 'Build websites that work perfectly on all devices and screen sizes.' },
      { icon: 'fas fa-server', title: 'Full-Stack Capability', desc: 'Build and deploy complete web applications from scratch.' },
      { icon: 'fas fa-folder-open', title: 'Strong Portfolio', desc: 'Graduate with 6+ polished projects ready to impress recruiters.' },
    ],
    instructor: {
      name: 'Kavitha Ramesh',
      title: 'Full Stack Developer & Educator',
      exp: '8+ Years at Freshworks & Zoho',
      bio: 'Kavitha has trained 2000+ students in web development and placed them at leading companies. Her industry experience at Freshworks gives her unique insight into what modern companies expect from developers. She specializes in making complex full-stack concepts accessible to absolute beginners.'
    }
  },
  frontend: {
    title: 'Front-End Development',
    level: 'Intermediate',
    levelClass: 'intermediate',
    duration: '3 Months',
    projects: '5 Projects',
    feeOriginal: '₹30,000',
    fee: '₹22,000',
    overview: 'Deep-dive into modern frontend engineering with React, TypeScript, Redux, and UI/UX principles. Build production-quality, performant interfaces that delight users. Perfect for developers looking to specialize in frontend.',
    imgSrc: null,
    imgPlaceholder: { bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', icon: 'fas fa-paint-brush', label: 'Front-End Development' },
    syllabus: [
      { module: 'Module 1: Advanced HTML & CSS', topics: ['CSS Architecture (BEM)', 'CSS Variables & Themes', 'Advanced Animations', 'CSS Grid Mastery', 'Performance Optimization'], count: '5 Topics' },
      { module: 'Module 2: TypeScript', topics: ['Type System Basics', 'Interfaces & Generics', 'Decorators', 'Advanced Types', 'TS + React'], count: '5 Topics' },
      { module: 'Module 3: React Advanced', topics: ['Custom Hooks', 'Performance (memo, lazy)', 'Testing (RTL, Jest)', 'Server Components', 'Next.js 14'], count: '5 Topics' },
      { module: 'Module 4: State Management', topics: ['Redux Toolkit', 'Zustand', 'React Query', 'Jotai', 'Context vs Redux'], count: '5 Topics' },
      { module: 'Module 5: UI/UX & Build Tools', topics: ['Figma to Code', 'Vite & Webpack', 'Storybook', 'Accessibility (WCAG)', 'Core Web Vitals'], count: '5 Topics' },
    ],
    outcomes: [
      { icon: 'fas fa-react', title: 'React Mastery', desc: 'Build complex React applications with advanced patterns and best practices.' },
      { icon: 'fas fa-check-double', title: 'TypeScript Proficiency', desc: 'Write type-safe code that scales with your team.' },
      { icon: 'fas fa-bolt', title: 'Performance Optimization', desc: 'Build lightning-fast UIs with Core Web Vitals in mind.' },
      { icon: 'fas fa-palette', title: 'UI/UX Skills', desc: 'Translate designs from Figma to pixel-perfect code.' },
    ],
    instructor: {
      name: 'Priya Shankar',
      title: 'Senior Frontend Engineer',
      exp: '9+ Years at Razorpay & PhonePe',
      bio: 'Priya has been at the forefront of frontend development in India, having built UI systems used by millions daily at Razorpay. She brings her real-world experience with performance optimization, accessibility, and design systems directly into the classroom.'
    }
  },
  backend: {
    title: 'Back-End Development',
    level: 'Intermediate',
    levelClass: 'intermediate',
    duration: '3 Months',
    projects: '5 Projects',
    feeOriginal: '₹30,000',
    fee: '₹22,000',
    overview: 'Build robust, scalable backend systems using Node.js, Express, databases, authentication, and APIs. Learn the architecture patterns used in top tech companies to build highly available services.',
    imgSrc: null,
    imgPlaceholder: { bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', icon: 'fas fa-server', label: 'Back-End Development' },
    syllabus: [
      { module: 'Module 1: Node.js Core', topics: ['Event Loop & Async', 'Modules & NPM', 'File System', 'HTTP Module', 'Streams & Buffers'], count: '5 Topics' },
      { module: 'Module 2: Express.js', topics: ['Routing & Middleware', 'REST API Design', 'Error Handling', 'Request Validation', 'Rate Limiting'], count: '5 Topics' },
      { module: 'Module 3: Databases', topics: ['MongoDB & Mongoose', 'PostgreSQL & Sequelize', 'Redis Caching', 'Database Design', 'Query Optimization'], count: '5 Topics' },
      { module: 'Module 4: Security & Auth', topics: ['JWT & OAuth 2.0', 'Password Hashing', 'CORS & Helmet', 'SQL Injection Prevention', 'HTTPS & TLS'], count: '5 Topics' },
      { module: 'Module 5: Architecture', topics: ['Microservices Pattern', 'Message Queues (RabbitMQ)', 'WebSockets', 'GraphQL Basics', 'Serverless Functions'], count: '5 Topics' },
    ],
    outcomes: [
      { icon: 'fas fa-plug', title: 'API Development', desc: 'Design and build RESTful and GraphQL APIs following industry best practices.' },
      { icon: 'fas fa-lock', title: 'Security Implementation', desc: 'Implement robust authentication and protect against common vulnerabilities.' },
      { icon: 'fas fa-database', title: 'Database Engineering', desc: 'Design efficient schemas and optimize queries for high-traffic applications.' },
      { icon: 'fas fa-expand-arrows-alt', title: 'Scalable Architecture', desc: 'Architect microservices and event-driven systems for millions of users.' },
    ],
    instructor: {
      name: 'Arun Selvam',
      title: 'Backend Architect',
      exp: '11+ Years at Swiggy & OLA',
      bio: 'Arun built the backend systems that power food delivery for millions of Indians. His experience with high-load systems, real-time tracking, and payment integrations at Swiggy directly shapes the curriculum. He focuses heavily on real-world patterns over theoretical concepts.'
    }
  },
  python: {
    title: 'Python Programming',
    level: 'Beginner',
    levelClass: 'beginner',
    duration: '4 Months',
    projects: '6 Projects',
    feeOriginal: '₹35,000',
    fee: '₹25,000',
    overview: 'From zero Python knowledge to building AI-powered applications. This comprehensive program covers Python fundamentals, data science with Pandas & NumPy, machine learning with Scikit-learn, and deep learning with TensorFlow.',
    imgSrc: null,
    imgPlaceholder: { bg: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', icon: 'fab fa-python', label: 'Python Programming' },
    syllabus: [
      { module: 'Module 1: Python Basics', topics: ['Syntax & Variables', 'Control Flow & Loops', 'Functions & Modules', 'OOP in Python', 'File Handling & JSON'], count: '5 Topics' },
      { module: 'Module 2: Data Science', topics: ['NumPy Arrays', 'Pandas DataFrames', 'Matplotlib & Seaborn', 'Data Cleaning', 'EDA Techniques'], count: '5 Topics' },
      { module: 'Module 3: Machine Learning', topics: ['Scikit-learn Library', 'Regression Models', 'Classification Algorithms', 'Clustering (K-Means)', 'Model Evaluation'], count: '5 Topics' },
      { module: 'Module 4: Deep Learning', topics: ['Neural Networks (ANN)', 'CNNs for Images', 'RNNs for Sequences', 'TensorFlow & Keras', 'Transfer Learning'], count: '5 Topics' },
      { module: 'Module 5: Deployment', topics: ['Flask REST APIs', 'Streamlit Dashboards', 'Docker for ML', 'Cloud ML Services', 'MLflow Tracking'], count: '5 Topics' },
    ],
    outcomes: [
      { icon: 'fab fa-python', title: 'Python Mastery', desc: 'Write clean, efficient Python code using best practices and design patterns.' },
      { icon: 'fas fa-chart-line', title: 'Data Analysis Skills', desc: 'Analyze real-world datasets and extract actionable insights.' },
      { icon: 'fas fa-robot', title: 'Build ML Models', desc: 'Design, train, and evaluate machine learning models for real use cases.' },
      { icon: 'fas fa-cloud-upload-alt', title: 'Deploy AI Apps', desc: 'Deploy ML models as REST APIs and web dashboards to the cloud.' },
    ],
    instructor: {
      name: 'Dr. Meena Krishnan',
      title: 'AI/ML Researcher & Educator',
      exp: 'PhD in ML | 8+ Years at IIT Chennai & TCS Research',
      bio: 'Dr. Meena holds a PhD in Machine Learning from IIT Madras and has published 15+ research papers. She bridges the gap between academic research and industry application, teaching students to build ML models that actually work in production environments.'
    }
  }
};

(function initCoursePage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id') || 'java';
  const course = COURSE_DATA[id];
  if (!course) return;

  // Set page title
  document.getElementById('page-title').textContent = course.title + ' – Tap Academy';

  // Hero
  document.getElementById('cd-level-badge').textContent = course.level;
  document.getElementById('cd-level-badge').classList.add(course.levelClass);
  document.getElementById('cd-title').textContent = course.title;
  document.getElementById('cd-overview').textContent = course.overview;
  document.getElementById('cd-duration').textContent = course.duration;
  document.getElementById('cd-level').textContent = course.level;
  document.getElementById('cd-projects').textContent = course.projects;
  document.getElementById('cd-fee').textContent = course.fee;
  document.getElementById('cd-fee-original').textContent = course.feeOriginal;
  document.getElementById('enroll-course-name').textContent = course.title;

  // Image
  const imgWrap = document.getElementById('cd-img-wrap');
  if (course.imgSrc) {
    imgWrap.innerHTML = `<img src="${course.imgSrc}" alt="${course.title}" style="width:100%;height:100%;object-fit:cover;" />`;
  } else if (course.imgPlaceholder) {
    const p = course.imgPlaceholder;
    imgWrap.innerHTML = `
      <div style="width:100%;height:100%;background:${p.bg};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;color:rgba(255,255,255,0.9);font-size:4rem;">
        <i class="${p.icon}"></i>
        <span style="font-size:1rem;font-weight:700;">${p.label}</span>
      </div>`;
  }

  // Syllabus
  const syllabusEl = document.getElementById('cd-syllabus');
  syllabusEl.innerHTML = course.syllabus.map(mod => `
    <div class="syllabus-module">
      <div class="sm-head">
        <h4>${mod.module}</h4>
        <span>${mod.count}</span>
      </div>
      <ul class="sm-topics">
        ${mod.topics.map(t => `<li>${t}</li>`).join('')}
      </ul>
    </div>
  `).join('');

  // Outcomes
  const outcomesEl = document.getElementById('cd-outcomes');
  outcomesEl.innerHTML = course.outcomes.map(o => `
    <div class="outcome-item">
      <div class="oi-icon"><i class="${o.icon}"></i></div>
      <div class="oi-text">
        <h4>${o.title}</h4>
        <p>${o.desc}</p>
      </div>
    </div>
  `).join('');

  // Instructor
  const inst = course.instructor;
  document.getElementById('cd-instructor').innerHTML = `
    <div class="inst-header">
      <div class="inst-avatar"><i class="fas fa-chalkboard-teacher"></i></div>
      <div class="inst-meta">
        <h3>${inst.name}</h3>
        <p class="inst-title">${inst.title}</p>
        <p class="inst-exp"><i class="fas fa-briefcase"></i> ${inst.exp}</p>
      </div>
    </div>
    <p class="inst-bio">${inst.bio}</p>
    <div class="inst-skills">
      <span class="sm-skill-tag">Expert Mentor</span>
      <span class="sm-skill-tag">Industry Veteran</span>
      <span class="sm-skill-tag">Placement Focused</span>
      <span class="sm-skill-tag">Hands-On Teaching</span>
    </div>
  `;

})();
