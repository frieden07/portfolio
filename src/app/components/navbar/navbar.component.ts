import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header [class.scrolled]="scrolled()">
      <div class="nav-wrap">
        <!-- Wordmark -->
        <a class="wordmark" href="#hero">
          <span class="wm-first">Shivanshu</span>
          <span class="wm-dot"></span>
          <span class="wm-last">Tiwari</span>
        </a>

        <!-- Desktop links -->
        <nav class="nav-links">
          @for (l of links; track l.id) {
            <a [href]="'#' + l.id" class="nav-link">{{ l.label }}</a>
          }
        </nav>

        <!-- CTA -->
        <a href="#contact" class="nav-cta">Available for work</a>

        <!-- Mobile toggle -->
        <button class="burger" (click)="open.set(!open())" [class.is-open]="open()" aria-label="menu">
          <span></span><span></span>
        </button>
      </div>

      <!-- Mobile drawer -->
      <div class="mobile-drawer" [class.is-open]="open()">
        @for (l of links; track l.id) {
          <a [href]="'#' + l.id" (click)="open.set(false)" class="drawer-link">
            {{ l.label }}
          </a>
        }
        <a href="#contact" (click)="open.set(false)" class="drawer-cta">Get in touch →</a>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 1000;
      height: var(--nav-h);
      transition: background 0.4s, border-color 0.4s, backdrop-filter 0.4s;
      border-bottom: 1px solid transparent;

      &.scrolled {
        background: rgba(13,13,13,0.92);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        border-color: var(--rule);
      }
    }

    .nav-wrap {
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 2.5rem;
      height: 100%;
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    /* Wordmark */
    .wordmark {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      flex-shrink: 0;
    }

    .wm-first, .wm-last {
      font-family: var(--ff-display);
      font-size: 1.1rem;
      font-weight: 400;
      color: var(--ivory);
      letter-spacing: 0.02em;
      transition: color 0.2s;
    }

    .wordmark:hover .wm-first,
    .wordmark:hover .wm-last { color: var(--amber); }

    .wm-dot {
      width: 4px; height: 4px;
      background: var(--amber);
      border-radius: 50%;
      flex-shrink: 0;
    }

    /* Nav links */
    .nav-links {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      margin-left: auto;
    }

    .nav-link {
      font-family: var(--ff-mono);
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--ivory-faint);
      text-decoration: none;
      transition: color 0.2s;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -3px; left: 0; right: 0;
        height: 1px;
        background: var(--amber);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.25s var(--ease-out-expo);
      }

      &:hover {
        color: var(--ivory);
        &::after { transform: scaleX(1); }
      }
    }

    /* CTA pill */
    .nav-cta {
      font-family: var(--ff-mono);
      font-size: 0.7rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--amber);
      border: 1px solid var(--amber-mid);
      padding: 0.45rem 1rem;
      border-radius: 2px;
      text-decoration: none;
      flex-shrink: 0;
      transition: background 0.2s, color 0.2s;

      &::before {
        content: '●';
        font-size: 0.5rem;
        margin-right: 0.4rem;
        vertical-align: middle;
        animation: blink 2s step-end infinite;
      }

      &:hover {
        background: var(--amber);
        color: var(--ink);
      }
    }

    /* Burger */
    .burger {
      display: none;
      flex-direction: column;
      gap: 6px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      margin-left: auto;

      span {
        display: block;
        width: 22px;
        height: 1px;
        background: var(--ivory);
        transition: all 0.3s;
      }

      &.is-open {
        span:first-child { transform: translateY(7px) rotate(45deg); }
        span:last-child  { transform: translateY(-7px) rotate(-45deg); }
      }
    }

    /* Mobile drawer */
    .mobile-drawer {
      position: fixed;
      top: var(--nav-h);
      left: 0; right: 0;
      background: var(--ink-2);
      border-bottom: 1px solid var(--rule);
      padding: 2rem 2.5rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      transform: translateY(-110%);
      transition: transform 0.4s var(--ease-out-expo);

      &.is-open { transform: translateY(0); }
    }

    .drawer-link {
      font-family: var(--ff-mono);
      font-size: 0.85rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--ivory-dim);
      text-decoration: none;
      transition: color 0.2s;
      &:hover { color: var(--amber); }
    }

    .drawer-cta {
      font-family: var(--ff-mono);
      font-size: 0.8rem;
      color: var(--amber);
      text-decoration: none;
      padding-top: 1rem;
      border-top: 1px solid var(--rule);
    }

    @media (max-width: 860px) {
      .nav-links, .nav-cta { display: none; }
      .burger { display: flex; }
    }

    @media (max-width: 480px) {
      .nav-wrap { padding: 0 1.25rem; }
    }
  `]
})
export class NavbarComponent {
  scrolled = signal(false);
  open     = signal(false);

  links = [
    { id: 'experience', label: 'Experience' },
    { id: 'skills',     label: 'Skills'     },
    { id: 'projects',   label: 'Projects'   },
    { id: 'education',  label: 'Education'  },
    { id: 'contact',    label: 'Contact'    },
  ];

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 50); }
}
