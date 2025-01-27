import { Component, OnInit, HostListener } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, RouterLink],
  template: `
    <header class="site-header" [class.scrolled]="isScrolled">
      <div class="header-backdrop"></div>
      <nav>
        <div class="logo-text">&lt;TMP /&gt;</div>
        <ul class="nav-links">
          <li><a routerLink="/">About me</a></li>
          <li><a routerLink="/blog">Blog</a></li>
        </ul>
        <!-- <button
          class="theme-toggle"
          (click)="toggleTheme()"
          aria-label="Toggle theme"
        >
          @if (isDarkTheme) {
          <svg viewBox="0 0 24 24" class="icon">
            <path
              fill="currentColor"
              d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"
            />
          </svg>
          } @if (!isDarkTheme) {
          <svg viewBox="0 0 24 24" class="icon">
            <path
              fill="currentColor"
              d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"
            />
          </svg>
          }
        </button> -->
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
        background: var(--color-backdrop);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        transition: all 0.3s ease;
      }

      .site-header.scrolled .header-backdrop {
        background: var(--color-backdrop-solid);
      }

      :host-context(.dark-theme) .header-backdrop {
        background: rgba(0, 0, 0, 0.5);
      }

      :host-context(.dark-theme) .site-header.scrolled .header-backdrop {
        background: rgba(0, 0, 0, 0.6);
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
      }

      .nav-links a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 50%;
        background-color: var(--color-accent);
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }

      .nav-links a:hover::after {
        width: 100%;
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
