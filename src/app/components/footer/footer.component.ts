import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer>
      <div class="container foot-inner">
        <div class="foot-left">
          <a class="foot-wordmark" href="#hero">
            <span class="fw-name">Shivanshu Tiwari</span>
            <span class="fw-role mono muted">Software Engineer · Pune, India</span>
          </a>
        </div>

        <nav class="foot-nav">
          @for (l of links; track l.label) {
            <a [href]="l.href" class="foot-link">{{ l.label }}</a>
          }
        </nav>

        <div class="foot-right">
          <div class="foot-socials">

            <!-- GitHub -->
            <a href="https://github.com/frieden07" target="_blank" class="social-icon" title="GitHub">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                  0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
                  -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
                  .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
                  -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004
                  1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7
                  1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855
                  0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017
                  C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>

            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/shivanshu-tiwari-61b018207/" target="_blank" class="social-icon" title="LinkedIn">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136
                  1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85
                  3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065
                  2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225
                  0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2
                  24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            <!-- Email -->
            <a href="mailto:tiwarishivanshu535@gmail.com" class="social-icon" title="Email">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9
                  2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>

          </div>
          <span class="foot-copy mono muted">© {{ year }} Shivanshu Tiwari</span>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background: var(--ink);
      border-top: 1px solid var(--rule);
      padding: 2.5rem 0;
      position: relative;
      z-index: 1;
    }

    .foot-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .foot-wordmark {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      text-decoration: none;

      .fw-name {
        font-family: var(--ff-display);
        font-size: 1rem;
        font-weight: 400;
        color: var(--ivory);
        transition: color 0.2s;
      }

      .fw-role { font-size: 0.68rem; letter-spacing: 0.08em; }

      &:hover .fw-name { color: var(--amber); }
    }

    .foot-nav {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .foot-link {
      font-family: var(--ff-mono);
      font-size: 0.7rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--ivory-faint);
      text-decoration: none;
      transition: color 0.2s;
      &:hover { color: var(--amber); }
    }

    .foot-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.75rem;
    }

    .foot-socials {
      display: flex;
      gap: 0.75rem;
    }

    .social-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px; height: 32px;
      border: 1px solid var(--rule);
      border-radius: 2px;
      color: var(--ivory-faint);
      text-decoration: none;
      transition: all 0.2s;

      &:hover {
        color: var(--amber);
        border-color: rgba(232,160,32,0.25);
        background: rgba(232,160,32,0.08);
      }
    }

    .foot-copy { font-size: 0.65rem; letter-spacing: 0.08em; }

    @media (max-width: 768px) {
      .foot-inner { flex-direction: column; align-items: flex-start; gap: 1.5rem; }
      .foot-right { align-items: flex-start; }
      .foot-nav { gap: 1.25rem; }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();

  links = [
    { label: 'Experience', href: '#experience' },
    { label: 'Skills',     href: '#skills'     },
    { label: 'Projects',   href: '#projects'   },
    { label: 'Education',  href: '#education'  },
    { label: 'Contact',    href: '#contact'    },
  ];
}