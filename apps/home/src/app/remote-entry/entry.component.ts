
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TypingAnimationDirective } from '@tmp/directives';

@Component({
  imports: [CommonModule, TypingAnimationDirective],
  selector: 'app-home-entry',
  template: `
    <div class="container">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <div class="hero-text">
            <div class="greeting-wrapper">
              <span class="greeting-badge">👋 Welcome to my portfolio</span>
            </div>
            <h1>Hi, I'm <span class="highlight">Phu</span></h1>
            <h2 class="role">Software Engineer</h2>
            <p
              class="hero-description"
              tmpTypingAnimation
              [typingSpeed]="30"
              [startDelay]="1000"
              [showCursor]="true"
              [cursorColor]="'var(--color-accent)'"
              [loop]="true"
              [loopDelay]="2000"
              [deleteSpeed]="30"
            >
              With over 4 years of experience as a Software Engineer, I am
              highly skilled in front-end development, specializing in the
              Angular framework for building responsive, dynamic and scalable
              web applications. Additionally, I have solid experience in backend
              technologies such as NodeJs and NestJS, enabling me to work
              effectively as a full-stack developer, bridging the gap between
              client-side and server-side systems to deliver seamless,
              high-quality solutions.
            </p>
            <div class="cta-group">
              <a href="/assets/cv.pdf" download class="download-cv">
                <span class="button-content">
                  <span class="button-text">Download CV</span>
                  <svg viewBox="0 0 24 24" class="download-icon">
                    <path
                      fill="currentColor"
                      d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                    />
                  </svg>
                </span>
              </a>
              <div class="social-links">
                <a
                  href="https://github.com/trminhphu79"
                  target="_blank"
                  class="social-link github"
                >
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/tmp-dev79"
                  target="_blank"
                  class="social-link linkedin"
                >
                  <svg viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="hero-image">
            <div class="image-wrapper">
              <img
                src="assets/logotmp.jpg"
                alt="Profile"
                class="profile-image"
              />
              <div class="experience-badge">
                <span class="years">4+</span>
                <span class="text">Years of<br />Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Technical Skills Section -->
      <section class="skills">
        <h2>Technical Expertise</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <h3>Frontend Development</h3>
            <ul>
              <li>Javascript, Typescript, Angular, HTML5/CSS3</li>
              <li>
                UI libraries: Bootstrap, Angular Material, Ant Design,
                TailwindCSS
              </li>
              <li>State management: RxJS, Ngrx</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Backend Development</h3>
            <ul>
              <li>NodeJs, NestJS</li>
              <li>Microservices (NATS), PostgreSQL, Redis</li>
              <li>Real-time communication: WebSockets, Socket.IO</li>
              <li>RESTful API Design</li>
            </ul>
          </div>
          <div class="skill-category">
            <h3>Tools & Platforms</h3>
            <ul>
              <li>Nx - Monorepo, Docker, Linux</li>
              <li>Unit tests: Karma, Jasmine and Jest</li>
              <li>Version Control: Git, GitHub</li>
              <li>CI/CD Pipelines</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section class="experience">
        <h2>Professional Journey</h2>
        <div class="timeline">
          <div class="experience-item">
            <div class="year">Dec 2024 - Present</div>
            <div class="content">
              <h3>Senior Frontend Developer</h3>
              <div class="company">CMC Global Company Limited</div>
              <div class="location">Ho Chi Minh City, Vietnam · On-site</div>
              <div class="skills-used">
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">Angular</span>
                <span class="skill-tag">NestJS</span>
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">Express.js</span>
                <span class="skill-tag">RxJS</span>
                <span class="skill-tag">Docker</span>
                <span class="skill-tag">PostgreSQL</span>
                <span class="skill-tag">PrimeNG</span>
                <span class="skill-tag">Nx</span>
              </div>
            </div>
          </div>

          <div class="experience-item">
            <div class="year">Jun 2023 - Dec 2024 · 1 yr 7 mos</div>
            <div class="content">
              <h3>Software Engineer</h3>
              <div class="company">VNG Corporation</div>
              <div class="location">Ho Chi Minh City, Vietnam · On-site</div>
              <div class="skills-used">
                <span class="skill-tag">Angular</span>
                <span class="skill-tag">React.js</span>
                <span class="skill-tag">RxJS</span>
                <span class="skill-tag">Functional Programming</span>
                <span class="skill-tag">SOLID Design Principles</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">OOP</span>
              </div>
            </div>
          </div>

          <div class="experience-item">
            <div class="year">Jun 2022 - May 2023 · 1 yr</div>
            <div class="content">
              <h3>Frontend Engineer</h3>
              <div class="company">EcoTruck - Ecosystem for Trucking</div>
              <div class="location">Ho Chi Minh City, Vietnam · On-site</div>
              <p class="description">
                EcoTruck offers an effective solution for enterprise logistics
                operations. With breakthrough technology solutions and
                professional staff, EcoTruck elevates the service quality of the
                transportation industry.
              </p>
              <div class="skills-used">
                <span class="skill-tag">HTML</span>
                <span class="skill-tag">Angular</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">RxJS</span>
                <span class="skill-tag">CSS</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">GitFlow</span>
                <span class="skill-tag">REST APIs</span>
              </div>
            </div>
          </div>

          <div class="experience-item">
            <div class="year">Jan 2021 - May 2022 · 1 yr 5 mos</div>
            <div class="content">
              <h3>Frontend Developer</h3>
              <div class="company">Appvity</div>
              <div class="location">Vietnam</div>
              <div class="skills-used">
                <span class="skill-tag">HTML</span>
                <span class="skill-tag">Angular</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">RxJS</span>
                <span class="skill-tag">Angular Material</span>
                <span class="skill-tag">JavaScript</span>
                <span class="skill-tag">GitFlow</span>
                <span class="skill-tag">REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 100%;
        margin: 0 auto;
        padding: 4rem 2rem;
        font-family: 'Inter', sans-serif;
        color: var(--color-text);
        background: var(--color-surface);
      }

      .hero {
        padding: 120px 24px 80px;
        background: var(--color-background);
        position: relative;
        overflow: hidden;
      }

      .hero-content {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1.2fr 1fr;
        gap: 64px;
        align-items: center;
      }

      .greeting-wrapper {
        margin-bottom: 24px;
      }

      .greeting-badge {
        background: rgba(var(--color-primary-rgb), 0.1);
        color: var(--color-primary);
        padding: 8px 16px;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 500;
        display: inline-block;
      }

      .hero-text h1 {
        font-size: 56px;
        font-weight: 700;
        color: var(--color-text);
        margin-bottom: 16px;
        line-height: 1.1;
      }

      .highlight {
        color: var(--color-primary);
        position: relative;
        display: inline-block;
      }

      .role {
        font-size: 24px;
        color: var(--color-text-secondary);
        margin-bottom: 24px;
        font-weight: 500;
      }

      .hero-text {
        max-width: 600px;
      }

      .hero-description {
        min-height: 180px;
        display: block;
        line-height: 1.6;
        color: var(--color-text-secondary);
        margin: 1.5rem 0 2rem;
        position: relative;
        font-size: 1rem;
      }

      .hero-description::after {
        // content: '|';
        position: absolute;
        right: -2px;
        animation: blink 1s infinite;
      }

      @keyframes blink {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }

      .cta-group {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        margin-top: 2rem;
      }

      .download-cv {
        position: relative;
        display: inline-flex;
        align-items: center;
        padding: 12px 28px;
        background: var(--color-accent);
        color: var(--color-surface);
        text-decoration: none;
        border-radius: 50px;
        font-weight: 500;
        font-size: 16px;
        border: 2px solid var(--color-accent);
        overflow: hidden;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .button-content {
        display: flex;
        align-items: center;
        gap: 8px;
        position: relative;
        z-index: 1;
        transition: transform 0.3s ease;
      }

      .download-icon {
        width: 20px;
        height: 20px;
        transition: all 0.3s ease;
        position: relative;
        top: 0;
      }

      .download-cv:hover {
        background: transparent;
        color: var(--color-accent);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(var(--color-primary-rgb), 0.4);
      }

      .download-cv:hover .button-content {
        transform: translateX(-4px);
      }

      .download-cv:hover .download-icon {
        transform: translateY(4px);
        animation: bounce 1s infinite;
      }

      @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(4px);
        }
        60% {
          transform: translateY(2px);
        }
      }

      .social-links {
        display: flex;
        gap: 1rem;
        align-items: center;
      }

      .social-link {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: var(--color-text);
        background: var(--color-surface);
        border: 2px solid var(--color-border);
        transition: all 0.2s ease;
      }

      .social-link svg {
        width: 20px;
        height: 20px;
        transition: all 0.2s ease;
      }

      .social-link.github:hover {
        background: #24292e;
        border-color: #24292e;
        color: white;
        transform: translateY(-2px);
        box-shadow: var(--shadow-sm);
      }

      .social-link.linkedin:hover {
        background: #0077b5;
        border-color: #0077b5;
        color: white;
        transform: translateY(-2px);
        box-shadow: var(--shadow-sm);
      }

      .social-link:hover svg {
        transform: scale(1.1);
      }

      /* Dark theme adjustments */
      :host-context(.dark-theme) .social-link {
        background: var(--color-surface);
        border-color: var(--color-border);
      }

      :host-context(.dark-theme) .download-cv {
        box-shadow: 0 0 20px rgba(var(--color-primary-rgb), 0.2);
      }

      :host-context(.dark-theme) .download-cv:hover {
        box-shadow: 0 0 30px rgba(var(--color-primary-rgb), 0.4);
      }

      .image-wrapper {
        position: relative;
        display: inline-block;
      }

      .profile-image {
        width: 380px;
        height: 380px;
        border-radius: 30px;
        object-fit: cover;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
      }

      .experience-badge {
        position: absolute;
        bottom: 30px;
        right: -20px;
        background: white;
        padding: 16px;
        border-radius: 16px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        text-align: center;
      }

      .experience-badge .years {
        font-size: 24px;
        font-weight: 700;
        color: var(--color-primary);
        display: block;
      }

      .experience-badge .text {
        font-size: 14px;
        color: var(--color-text-secondary);
        line-height: 1.4;
      }

      .subtitle {
        font-size: 1.5rem;
        color: #666;
        margin-bottom: 2rem;
      }

      .social-links {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin: 1rem 0;
      }

      .social-icon {
        color: #000;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        border: 1px solid #eee;
      }

      .social-icon:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        background: #000;
        color: #fff;
        border-color: #000;
      }

      .icon {
        width: 20px;
        height: 20px;
      }

      section h2 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 3rem;
        text-align: center;
        position: relative;
      }

      section h2:after {
        content: '';
        position: absolute;
        bottom: -1rem;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 3px;
        background: #000;
      }

      .skills {
        margin-top: 100px;
      }
      .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 6rem;
      }

      .skill-category {
        padding: 2rem;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        transition: var(--transition-default);
        position: relative;
        overflow: hidden;
      }

      .skill-category::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 4px;
        height: 100%;
        background: var(--color-accent);
        transform: scaleY(0);
        transition: transform 0.3s ease;
      }

      .skill-category:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow-md);
      }

      .skill-category:hover::before {
        transform: scaleY(1);
      }

      .skill-category h3 {
        font-size: 1.25rem;
        margin-bottom: 1.5rem;
        color: var(--color-text);
      }

      .skill-category ul {
        list-style: none;
        padding: 0;
      }

      .skill-category li {
        margin-bottom: 1rem;
        padding-left: 1.5rem;
        position: relative;
      }

      .skill-category li:before {
        content: '→';
        position: absolute;
        left: 0;
        color: var(--color-accent);
      }

      .timeline {
        max-width: 800px;
        margin: 0 auto;
      }

      .experience-item {
        position: relative;
        padding: 2rem;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        margin-bottom: 2rem;
        transition: var(--transition-default);
      }

      .experience-item:hover {
        transform: translateX(10px);
        box-shadow: var(--shadow-md);
      }

      .year {
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--color-text);
        margin-bottom: 1rem;
      }

      .company {
        font-size: 1.1rem;
        color: var(--color-text-secondary);
        margin-bottom: 1rem;
      }

      .experience-item ul {
        list-style: none;
        padding: 0;
      }

      .experience-item li {
        margin-bottom: 0.5rem;
        padding-left: 1.5rem;
        position: relative;
      }

      .experience-item li:before {
        content: '•';
        position: absolute;
        left: 0;
        color: var(--color-accent);
      }

      footer {
        text-align: center;
        margin-top: 6rem;
        padding-top: 3rem;
        border-top: 1px solid var(--color-border);
      }

      .website {
        color: var(--color-text);
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s;
      }

      .website:hover {
        opacity: 0.7;
      }

      .logo {
        width: 120px;
        height: 120px;
        margin-bottom: 1rem;
      }

      .logo-svg {
        width: 100%;
        height: 100%;
        stroke-width: 2;
        color: #000;
      }

      .logo-text {
        font-size: 32px;
        font-weight: bold;
        font-family: 'Inter', sans-serif;
        fill: currentColor;
      }

      .location {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }

      .skills-used {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
      }

      .skill-tag {
        background: var(--color-border);
        padding: 0.3rem 0.8rem;
        border-radius: 3px;
        font-size: 0.85rem;
        color: var(--color-text);
        transition: var(--transition-default);
      }

      .skill-tag:hover {
        background: var(--color-accent);
        color: var(--color-surface);
      }

      .description {
        margin: 1rem 0;
        line-height: 1.6;
        color: var(--color-text-secondary);
      }

      .experience-item {
        border-left: 3px solid var(--color-border);
        padding-left: 2rem;
        position: relative;
      }

      .experience-item::before {
        content: '';
        position: absolute;
        left: -6px;
        top: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--color-accent);
      }

      @media (max-width: 768px) {
        .container {
          padding: 2rem 1rem;
        }

        .hero-content {
          grid-template-columns: 1fr;
          text-align: center;
          gap: 40px;
        }

        .hero-text h1 {
          font-size: 40px;
        }

        .cta-group {
          flex-direction: column;
          align-items: stretch;
          gap: 1rem;
        }

        .social-links {
          justify-content: center;
        }

        .download-cv {
          text-align: center;
          justify-content: center;
        }

        .profile-image {
          width: 280px;
          height: 280px;
        }

        .experience-badge {
          right: 0;
          bottom: 20px;
        }

        .hero-description {
          min-height: 240px;
        }
      }

      @media (max-width: 480px) {
        .hero-description {
          min-height: 300px;
        }
      }
    `,
  ],
})
export class RemoteEntryComponent implements OnInit {
  isDarkTheme = false;

  ngOnInit() {
    // Check for saved theme preference and sync with header
    const savedTheme = localStorage.getItem('theme');
    this.isDarkTheme = savedTheme === 'dark';
    if (this.isDarkTheme) {
      document.body.classList.add('dark-theme');
    }

    // Listen for theme changes
    window.addEventListener('storage', (event) => {
      if (event.key === 'theme') {
        this.isDarkTheme = event.newValue === 'dark';
        document.body.classList.toggle('dark-theme', this.isDarkTheme);
      }
    });
  }
}
