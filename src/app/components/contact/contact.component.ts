import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="contact-section">
      <div class="contact-glow"></div>
      <div class="container">

        <!-- Header -->
        <div class="contact-header reveal">
          <div class="section-label">
            <div class="label-rule"></div>
            <span class="label-text">Contact</span>
          </div>
          <div class="header-row">
            <h2 class="section-title contact-title">
              Let's build<br>something <em>great</em>
            </h2>
            <p class="contact-intro">
              Open to Software engineering roles, distributed systems consulting,
              and meaningful technical collaborations.
            </p>
          </div>
        </div>

        <!-- Big email CTA -->
        <div class="big-email-wrap reveal">
          <a href="mailto:tiwarishivanshu535@gmail.com" class="big-email-link">
            <span class="big-email-text">tiwarishivanshu535&#64;gmail.com</span>
            <span class="big-email-arrow">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 14h18M16 7l7 7-7 7"/>
              </svg>
            </span>
          </a>
          <div class="big-email-rule"></div>
        </div>

        <div class="channels reveal">

          <a href="mailto:tiwarishivanshu535@gmail.com" class="channel-card">
            <div class="ch-icon-wrap">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9
                  2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div class="ch-body">
              <span class="ch-platform">Email</span>
              <span class="ch-value">tiwarishivanshu535&#64;gmail.com</span>
            </div>
            <div class="ch-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </div>
          </a>

          <a href="tel:+917489641156" class="channel-card">
            <div class="ch-icon-wrap">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27
                  .67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55
                  -.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1
                  1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div class="ch-body">
              <span class="ch-platform">Phone</span>
              <span class="ch-value">+91 74896 41156</span>
            </div>
            <div class="ch-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </div>
          </a>

          <a href="https://github.com/frieden07" target="_blank" class="channel-card">
            <div class="ch-icon-wrap">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839
                  9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782
                  .605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
                  -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892
                  1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253
                  -4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253
                  -.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112
                  6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027
                  2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028
                  2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855
                  0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019
                  0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </div>
            <div class="ch-body">
              <span class="ch-platform">GitHub</span>
              <span class="ch-value">github.com/frieden07</span>
            </div>
            <div class="ch-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/shivanshu-tiwari-61b018207/" target="_blank" class="channel-card">
            <div class="ch-icon-wrap">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852
                  -3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h
                  .046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267
                  5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064
                  0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225
                  0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771
                  24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0
                  22.222 0h.003z"/>
              </svg>
            </div>
            <div class="ch-body">
              <span class="ch-platform">LinkedIn</span>
              <span class="ch-value">linkedin.com/in/shivanshu-tiwari-61b018207</span>
            </div>
            <div class="ch-arrow">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </div>
          </a>

        </div>

        <!-- Footer row -->
        <div class="contact-footer reveal">
          <div class="avail-pill">
            <span class="avail-dot"></span>
            Currently open to new opportunities
          </div>
          <span class="resp-note mono muted">Typical response: within 24 hours</span>
        </div>

      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 8rem 0 7rem;
      border-top: 1px solid var(--rule);
      background: var(--ink-2);
      position: relative;
      overflow: hidden;
    }

    .contact-glow {
      position: absolute;
      width: 800px; height: 600px;
      background: radial-gradient(ellipse, rgba(232,160,32,0.06) 0%, transparent 70%);
      top: -100px; left: 50%;
      transform: translateX(-50%);
      pointer-events: none;
      filter: blur(60px);
    }

    .contact-header { margin-bottom: 4rem; }

    .section-label { margin-bottom: 2rem; }

    .header-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: end;
    }

    .contact-title { font-size: clamp(2.5rem, 5vw, 4rem); }

    .contact-intro {
      font-size: 0.95rem;
      color: #7a7068;
      line-height: 1.8;
      font-weight: 300;
      max-width: 420px;
    }

    /* Big email */
    .big-email-wrap { margin-bottom: 3.5rem; }

    .big-email-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 2.25rem 0;
      text-decoration: none;
      border-top: 1px solid rgba(255,255,255,0.08);
      transition: all 0.3s var(--ease-out-expo);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg, rgba(232,160,32,0.04), transparent);
        transform: translateX(-100%);
        transition: transform 0.4s var(--ease-out-expo);
      }

      &:hover {
        padding-left: 1.5rem;
        &::before { transform: translateX(0); }
        .big-email-text { color: var(--amber); }
        .big-email-arrow { color: var(--amber); transform: translate(4px,-4px); }
      }
    }

    .big-email-text {
      font-family: var(--ff-display);
      font-size: clamp(1.2rem, 3vw, 2.2rem);
      font-weight: 300;
      color: var(--ivory);
      letter-spacing: -0.01em;
      transition: color 0.3s;
    }

    .big-email-arrow {
      color: var(--ivory-faint);
      flex-shrink: 0;
      transition: all 0.3s var(--ease-out-expo);
    }

    .big-email-rule {
      height: 1px;
      background: rgba(255,255,255,0.08);
    }

    /* Channel cards */
    .channels {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 3rem;
    }

    .channel-card {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      padding: 2rem 1.75rem;
      background: var(--ink-2);
      text-decoration: none;
      transition: background 0.25s;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 0; left: 0; right: 0;
        height: 2px;
        background: var(--amber);
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s var(--ease-out-expo);
      }

      &:hover {
        background: rgba(232,160,32,0.04);
        &::after { transform: scaleX(1); }
        .ch-arrow { color: var(--amber); transform: translate(3px,-3px); }
        .ch-value { color: var(--amber); }
      }
    }

    .ch-icon-wrap {
      width: 40px; height: 40px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: var(--ivory-dim);
    }

    .ch-body {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      flex: 1;
    }

    .ch-platform {
      font-family: var(--ff-mono);
      font-size: 0.62rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #5a5450;
    }

    .ch-value {
      font-size: 0.88rem;
      color: var(--ivory-dim);
      transition: color 0.25s;
      word-break: break-all;
    }

    .ch-arrow {
      color: rgba(255,255,255,0.15);
      align-self: flex-end;
      transition: all 0.25s var(--ease-out-expo);
    }

    /* Footer */
    .contact-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .avail-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      font-family: var(--ff-mono);
      font-size: 0.72rem;
      letter-spacing: 0.08em;
      color: var(--amber);
      background: rgba(232,160,32,0.08);
      border: 1px solid rgba(232,160,32,0.2);
      padding: 0.45rem 1rem;
      border-radius: 100px;
    }

    .avail-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: var(--amber);
      animation: blink 2s step-end infinite;
    }

    .resp-note { font-size: 0.68rem; letter-spacing: 0.08em; }

    @media (max-width: 900px) {
      .header-row { grid-template-columns: 1fr; gap: 1.5rem; }
      .channels { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 560px) {
      .contact-section { padding: 5rem 0; }
      .channels { grid-template-columns: 1fr; }
      .big-email-text { font-size: 1.1rem; word-break: break-all; }
      .contact-footer { flex-direction: column; align-items: flex-start; }
    }
  `]
})
export class ContactComponent {}
