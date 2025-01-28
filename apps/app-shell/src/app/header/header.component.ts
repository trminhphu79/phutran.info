import { Component, OnInit, HostListener } from '@angular/core';
import { RouterLink, RouterModule, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive],
  template: `
    <header class="site-header" [class.scrolled]="isScrolled">
      <div class="header-backdrop"></div>
      <nav>
        <div class="logo-text" routerLink="/">&lt;TMP /&gt;</div>
        <ul class="nav-links">
          <li>
            <a routerLink="/" 
               routerLinkActive="active" 
               [routerLinkActiveOptions]="{exact: true}">Me</a>
          </li>
          <li>
            <a routerLink="/blog" 
               routerLinkActive="active"
               [routerLinkActiveOptions]="{exact: true}">Blog</a>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [
    `
      .site-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 70px;
        z-index: 1000;
        transition: all 0.3s ease;
      }

      .header-backdrop {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        transition: all 0.3s ease;
      }

      .site-header.scrolled .header-backdrop {
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      }

      :host-context(.dark-theme) .header-backdrop {
        background: rgba(18, 18, 18, 0.7);
      }

      :host-context(.dark-theme) .site-header.scrolled .header-backdrop {
        background: rgba(18, 18, 18, 0.9);
      }

      nav {
        position: relative;
        max-width: 85%;
        margin: 0 auto;
        padding: 0 2rem;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo-text {
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--color-text);
        font-family: 'Fira Code', monospace;
        transition: color 0.3s ease;
        cursor: pointer;
        
        &:hover {
          color: var(--color-primary);
        }
      }

      .nav-links {
        display: flex;
        gap: 2rem;
        list-style: none;
        margin: 0;
        padding: 0;
        align-items: center;
      }

      .nav-links a {
        text-decoration: none;
        color: var(--color-text);
        font-weight: 500;
        transition: all 0.2s ease;
        position: relative;
        padding: 0.5rem 0;
        opacity: 0.8;
        
        &:hover {
          opacity: 1;
        }
      }

      .nav-links a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 50%;
        background-color: var(--color-primary);
        transition: all 0.3s ease;
        transform: translateX(-50%);
        opacity: 0;
      }

      .nav-links a:hover::after {
        width: 100%;
        opacity: 1;
      }

      .nav-links a.active {
        color: var(--color-primary);
        font-weight: 600;
        opacity: 1;
      }

      .nav-links a.active::after {
        width: 100%;
        opacity: 1;
      }

      .theme-toggle {
        background: none;
        border: none;
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-text);
        transition: all 0.3s ease;
      }

      .theme-toggle:hover {
        background: var(--color-border);
      }

      :host-context(.dark-theme) .theme-toggle:hover {
        background: rgba(255, 255, 255, 0.1);
      }

      .theme-toggle .icon {
        width: 20px;
        height: 20px;
      }

      @media (max-width: 768px) {
        nav {
          padding: 0 1rem;
        }

        .nav-links {
          gap: 1rem;
        }

        .logo-text {
          font-size: 1.2rem;
        }

        .theme-toggle {
          width: 32px;
          height: 32px;
        }
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isDarkTheme = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  ngOnInit() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.isDarkTheme = true;
      document.body.classList.add('dark-theme');
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }
}
