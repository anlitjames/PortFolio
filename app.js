/**
 * Anlit James - Developer Portfolio
 * Interactive Functionality & Modal System
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initCodeEditor();
  initProjectModals();
  initCopyClipboard();
  initContactForm();
  initScrollSpy();
});

/* ==========================================================================
   NAVIGATION & MOBILE MENU
   ========================================================================== */
function initNavigation() {
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile Menu Toggle
  if (mobileToggle && navbar) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navbar.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ==========================================================================
   SCROLL SPY (Active Link Tracking)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    const scrollY = window.scrollY + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
}

/* ==========================================================================
   HERO CODE EDITOR TAB SWITCHER
   ========================================================================== */
function initCodeEditor() {
  const tabs = document.querySelectorAll('.editor-tab');
  const codeBlocks = {
    backend: document.getElementById('code-backend'),
    frontend: document.getElementById('code-frontend')
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.getAttribute('data-tab');

      // Set active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Switch code block
      Object.keys(codeBlocks).forEach(key => {
        if (codeBlocks[key]) {
          codeBlocks[key].classList.toggle('active', key === tabName);
        }
      });
    });
  });
}

/* ==========================================================================
   PROJECT DATA & MODAL SYSTEM
   ========================================================================== */
const projectData = {
  penair: {
    title: "PenAir",
    subtitle: "Travel Agency Management Solution",
    category: "Travel & Aviation | Full-Stack Web Application",
    description: "A travel agency management application supporting bookings, customer records, operational workflows, booking updates, and agency management functionality.",
    keyFeatures: [
      "Folder Search for agency records and documents",
      "Booking Management & Operational Workflows",
      "PNR-based Booking Updates via Dreamlake and Lime integrations",
      "Staff, Branch, and Affiliate Commission Management workflows",
      "High-performance REST API Integration",
      "SQL Query Optimization for fast operational data retrieval"
    ],
    providers: ["Dreamlake", "Lime"],
    technologies: ["Angular", ".NET Core Web API", "C#", "Entity Framework Core", "MS SQL Server", "REST APIs"],
    architectureFlow: [
      "Angular (Frontend)",
      ".NET Core Web API",
      "Provider APIs (Dreamlake / Lime)",
      "MS SQL Server"
    ],
    contribution: [
      "Maintained and enhanced travel agency management functionality.",
      "Created folder search features for efficient agency record location.",
      "Developed booking management functionality using Angular.",
      "Integrated PNR-based booking updates with Dreamlake and Lime providers.",
      "Enhanced Staff, Branch, and Affiliate commission workflows.",
      "Optimized SQL queries and data access logic for improved data retrieval performance."
    ]
  },
  penibe: {
    title: "PenIBE",
    subtitle: "Flight Booking Engine",
    category: "Travel & Aviation | Flight Booking Engine",
    description: "A flight booking application providing flight search, search results, More Flights functionality, booking order management, and PNR-based booking retrieval.",
    keyFeatures: [
      "Flight Search with origin, destination, and schedule criteria",
      "Flight Search Result Listing with real-time fare options",
      "More Flights functionality for exploring alternate flight schedules",
      "Booking Order Management workflows",
      "PNR-based Booking Retrieval",
      "Airline API Integrations (Amadeus, Sabre, Air Arabia)",
      "Modern, responsive, cross-device Angular UI"
    ],
    providers: ["Amadeus", "Sabre", "Air Arabia"],
    technologies: ["Angular", "TypeScript", "HTML5", "CSS3", "REST APIs"],
    architectureFlow: [
      "Angular Client UI",
      "RESTful API Layer",
      "Airline Provider Integrations (Amadeus, Sabre, Air Arabia)"
    ],
    contribution: [
      "Built clean, responsive Angular user interfaces.",
      "Developed comprehensive flight search features.",
      "Developed dynamic search result listing and rendering logic.",
      "Implemented the More Flights functionality for expanded travel options.",
      "Worked on booking order management screens and workflows.",
      "Implemented PNR-based booking retrieval features.",
      "Connected frontend modules seamlessly with RESTful APIs.",
      "Created modular, reusable Angular components.",
      "Collaborated closely with backend developers for airline provider integrations."
    ]
  },
  eventzet: {
    title: "EventZet",
    subtitle: "Event Management System",
    category: "Event Management | Full-Stack Web Application",
    description: "An event management platform supporting event creation, attendee registration, ticket booking, and volunteer management.",
    keyFeatures: [
      "Event Creation and configuration workflows",
      "Attendee Registration and profile management",
      "Ticket Booking and allotment tracking",
      "Volunteer Management and task assignment",
      "REST API Integration for full-stack communication",
      "Secure JWT Authentication and Role-Based Access Control",
      "Responsive Angular UI and Entity Framework Core Database Operations"
    ],
    providers: [],
    technologies: ["Angular", ".NET Core Web API", "C#", "Entity Framework Core", "SQL Server", "JWT"],
    architectureFlow: [
      "Angular Frontend",
      "JWT-Protected REST APIs",
      ".NET Core Web API",
      "Entity Framework Core",
      "MS SQL Server"
    ],
    contribution: [
      "Developed and maintained enterprise web application features.",
      "Implemented responsive Angular interfaces across all client devices.",
      "Implemented RESTful API integration connecting frontend services with backend endpoints.",
      "Worked with JWT authentication for secure session management and role-based access.",
      "Managed database operations and schema mappings using Entity Framework Core and SQL Server.",
      "Collaborated with the development team to deliver scalable, reliable web applications."
    ]
  }
};

function initProjectModals() {
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

  if (!modal || !modalContent) return;

  function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    let providersHtml = '';
    if (data.providers && data.providers.length > 0) {
      providersHtml = `
        <h4 class="modal-section-title">Integrated Airline / Travel Providers</h4>
        <div class="modal-tech-list">
          ${data.providers.map(p => `<span class="tech-badge">${p}</span>`).join('')}
        </div>
      `;
    }

    let archFlowHtml = '';
    if (data.architectureFlow && data.architectureFlow.length > 0) {
      archFlowHtml = `
        <h4 class="modal-section-title">Architecture Flow</h4>
        <div class="modal-arch-box">
          ${data.architectureFlow.map((step, idx) => `
            <span class="arch-node">${step}</span>
            ${idx < data.architectureFlow.length - 1 ? '<span class="arch-arrow-symbol">➔</span>' : ''}
          `).join('')}
        </div>
      `;
    }

    modalContent.innerHTML = `
      <div class="modal-project-badge">${data.category}</div>
      <h3 class="modal-project-title" id="modalTitle">${data.title}</h3>
      <div class="modal-project-sub">${data.subtitle}</div>

      <h4 class="modal-section-title">Project Overview</h4>
      <p class="modal-text">${data.description}</p>

      <h4 class="modal-section-title">Key Features</h4>
      <ul class="modal-list">
        ${data.keyFeatures.map(feat => `<li>${feat}</li>`).join('')}
      </ul>

      ${archFlowHtml}
      ${providersHtml}

      <h4 class="modal-section-title">My Concrete Contribution</h4>
      <ul class="modal-list">
        ${data.contribution.map(c => `<li>${c}</li>`).join('')}
      </ul>

      <h4 class="modal-section-title">Technologies Used</h4>
      <div class="modal-tech-list">
        ${data.technologies.map(t => `<span class="tech-badge">${t}</span>`).join('')}
      </div>
    `;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  viewDetailsButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-project-id');
      openModal(id);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   COPY TO CLIPBOARD & TOAST NOTIFICATION
   ========================================================================== */
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function initCopyClipboard() {
  const copyButtons = document.querySelectorAll('.copy-btn[data-copy]');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy');
      if (!text) return;

      try {
        await navigator.clipboard.writeText(text);
        showToast(`Copied to clipboard: ${text}`);
      } catch (err) {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied: ${text}`);
      }
    });
  });
}

/* ==========================================================================
   CONTACT FORM VALIDATION & RECRUITER HELPER
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const messageInput = document.getElementById('contactMessage');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const feedback = document.getElementById('formFeedback');

  if (!form) return;

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    nameInput.classList.remove('invalid');
    emailInput.classList.remove('invalid');
    messageInput.classList.remove('invalid');
    feedback.style.display = 'none';

    // Validate Name
    if (!nameInput.value.trim()) {
      nameError.textContent = 'Please enter your name.';
      nameInput.classList.add('invalid');
      isValid = false;
    }

    // Validate Email
    if (!emailInput.value.trim()) {
      emailError.textContent = 'Please enter your email address.';
      emailInput.classList.add('invalid');
      isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      emailInput.classList.add('invalid');
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageError.textContent = 'Please enter a message.';
      messageInput.classList.add('invalid');
      isValid = false;
    }

    if (isValid) {
      const name = encodeURIComponent(nameInput.value.trim());
      const email = encodeURIComponent(emailInput.value.trim());
      const userMessage = encodeURIComponent(messageInput.value.trim());
      const subject = encodeURIComponent(`Software Engineer Opportunity - ${nameInput.value.trim()}`);
      const mailtoUrl = `mailto:anlitjames7@gmail.com?subject=${subject}&body=From: ${name} (${email})%0D%0A%0D%0A${userMessage}`;

      feedback.className = 'form-feedback success';
      feedback.innerHTML = `
        <strong>Thank you, ${nameInput.value.trim()}!</strong><br>
        Your message has been formatted. <br>
        <a href="${mailtoUrl}" class="btn btn-primary" style="margin-top: 0.75rem; font-size: 0.85rem; padding: 0.4rem 1rem;">
          Click here to send directly via your email client
        </a>
      `;
      feedback.style.display = 'block';

      // Automatically offer to launch email client
      window.location.href = mailtoUrl;
    }
  });

  // Clear errors on input
  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('invalid');
      const err = document.getElementById(input.name + 'Error');
      if (err) err.textContent = '';
    });
  });
}
