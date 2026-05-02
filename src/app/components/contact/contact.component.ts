import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmailService, ContactForm } from '../../services/email.service';

type State = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="contact-inner">

          <!-- Left info -->
          <div class="contact-info reveal">
            <div class="section-label">
              <div class="label-rule"></div>
              <span class="label-text">Contact</span>
            </div>

            <h2 class="section-title">Let's work<br><em>together</em></h2>

            <p class="contact-sub">
              Open to backend engineering roles, distributed systems consulting,
              and meaningful technical collaborations.
              I respond within 24 hours.
            </p>

            <div class="direct-links">
              @for (l of links; track l.label) {
                <a [href]="l.href" [target]="l.external ? '_blank' : '_self'" class="direct-link">
                  <span class="dl-icon">{{ l.icon }}</span>
                  <div class="dl-body">
                    <span class="dl-label mono muted">{{ l.label }}</span>
                    <span class="dl-value">{{ l.value }}</span>
                  </div>
                  <span class="dl-arrow">→</span>
                </a>
              }
            </div>
          </div>

          <!-- Right form -->
          <div class="form-side reveal">
            @if (state() === 'success') {
              <div class="success-screen">
                <div class="success-check">✓</div>
                <h3>Message received.</h3>
                <p>I'll get back to you shortly. Thank you for reaching out.</p>
                <button class="btn btn--outline" (click)="reset()">Send another</button>
              </div>
            } @else {
              <form (ngSubmit)="submit()" #f="ngForm" novalidate>
                <div class="form-row-2">
                  <div class="fgroup">
                    <label>Name</label>
                    <input
                      name="name" type="text"
                      [(ngModel)]="form.from_name"
                      placeholder="Your name"
                      required #nameRef="ngModel"
                      [class.err]="nameRef.invalid && nameRef.touched"
                    />
                    @if (nameRef.invalid && nameRef.touched) {
                      <span class="err-msg">Required</span>
                    }
                  </div>
                  <div class="fgroup">
                    <label>Email</label>
                    <input
                      name="email" type="email"
                      [(ngModel)]="form.from_email"
                      placeholder="you@example.com"
                      required email #emailRef="ngModel"
                      [class.err]="emailRef.invalid && emailRef.touched"
                    />
                    @if (emailRef.invalid && emailRef.touched) {
                      <span class="err-msg">Valid email required</span>
                    }
                  </div>
                </div>

                <div class="fgroup">
                  <label>Subject</label>
                  <input
                    name="subject" type="text"
                    [(ngModel)]="form.subject"
                    placeholder="What's on your mind?"
                    required #subjRef="ngModel"
                    [class.err]="subjRef.invalid && subjRef.touched"
                  />
                  @if (subjRef.invalid && subjRef.touched) {
                    <span class="err-msg">Required</span>
                  }
                </div>

                <div class="fgroup">
                  <label>Message</label>
                  <textarea
                    name="message"
                    [(ngModel)]="form.message"
                    placeholder="Tell me about the role, project, or idea..."
                    required minlength="20" #msgRef="ngModel"
                    [class.err]="msgRef.invalid && msgRef.touched"
                    rows="6"
                  ></textarea>
                  @if (msgRef.invalid && msgRef.touched) {
                    <span class="err-msg">Min. 20 characters</span>
                  }
                </div>

                @if (state() === 'error') {
                  <div class="form-err-banner">
                    Something went wrong. Please email me directly at tiwarishivanshu535&#64;gmail.com
                  </div>
                }

                <button
                  type="submit"
                  class="submit-btn"
                  [disabled]="f.invalid || state() === 'sending'"
                >
                  @if (state() === 'sending') {
                    <span class="spinner"></span> Sending...
                  } @else {
                    Send message →
                  }
                </button>
              </form>
            }
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 8rem 0;
      border-top: 1px solid var(--rule);
      background: var(--ink-2);
    }

    .contact-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6rem;
      align-items: start;
    }

    .contact-sub {
      font-size: 0.92rem;
      color: var(--ivory-dim);
      line-height: 1.8;
      font-weight: 300;
      margin-top: 1.5rem;
      margin-bottom: 2.5rem;
      max-width: 380px;
    }

    /* Direct links */
    .direct-links {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .direct-link {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.1rem 0;
      border-bottom: 1px solid var(--rule);
      text-decoration: none;
      transition: all 0.2s;

      &:first-child { border-top: 1px solid var(--rule); }

      &:hover {
        padding-left: 0.5rem;
        .dl-arrow { color: var(--amber); }
        .dl-value { color: var(--amber); }
      }
    }

    .dl-icon {
      font-size: 1.1rem;
      width: 34px;
      text-align: center;
      flex-shrink: 0;
    }

    .dl-body {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
      flex: 1;

      .dl-label { font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase; }
      .dl-value { font-size: 0.88rem; color: var(--ivory-dim); transition: color 0.2s; }
    }

    .dl-arrow {
      color: var(--ivory-faint);
      font-size: 0.9rem;
      transition: color 0.2s;
    }

    /* Form side */
    .form-side {
      background: var(--ink);
      border: 1px solid var(--rule);
      border-radius: 4px;
      padding: 2.5rem;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .form-row-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.25rem;
    }

    .fgroup {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      label {
        font-family: var(--ff-mono);
        font-size: 0.68rem;
        color: var(--ivory-faint);
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      input, textarea {
        background: var(--ink-2);
        border: 1px solid var(--rule);
        border-radius: 2px;
        padding: 0.85rem 1rem;
        color: var(--ivory);
        font-family: var(--ff-body);
        font-size: 0.9rem;
        font-weight: 300;
        outline: none;
        transition: border-color 0.2s, box-shadow 0.2s;
        resize: vertical;

        &::placeholder { color: var(--ivory-faint); }

        &:focus {
          border-color: var(--amber-mid);
          box-shadow: 0 0 0 3px rgba(232,160,32,0.08);
        }

        &.err { border-color: #c0392b; }
      }

      .err-msg {
        font-family: var(--ff-mono);
        font-size: 0.65rem;
        color: #e74c3c;
        letter-spacing: 0.06em;
      }
    }

    .form-err-banner {
      background: rgba(192,57,43,0.12);
      border: 1px solid rgba(192,57,43,0.3);
      color: #e88080;
      padding: 0.85rem 1rem;
      border-radius: 2px;
      font-size: 0.82rem;
      line-height: 1.5;
    }

    .submit-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--amber);
      color: var(--ink);
      font-family: var(--ff-mono);
      font-size: 0.78rem;
      font-weight: 500;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 1rem 2rem;
      border: none;
      border-radius: 2px;
      cursor: pointer;
      align-self: flex-start;
      transition: all 0.25s var(--ease-out-expo);

      &:hover:not(:disabled) {
        background: var(--ivory);
        transform: translateY(-2px);
        box-shadow: 0 10px 30px rgba(232,160,32,0.2);
      }

      &:disabled {
        opacity: 0.45;
        cursor: not-allowed;
      }
    }

    .spinner {
      width: 13px; height: 13px;
      border: 2px solid rgba(0,0,0,0.2);
      border-top-color: var(--ink);
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }

    /* Success */
    .success-screen {
      text-align: center;
      padding: 3rem 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      .success-check {
        width: 56px; height: 56px;
        background: var(--amber-dim);
        border: 1px solid var(--amber-mid);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: var(--amber);
        animation: popIn 0.5s var(--ease-out-expo);
      }

      h3 {
        font-family: var(--ff-display);
        font-size: 1.5rem;
        font-weight: 300;
        color: var(--ivory);
      }

      p {
        font-size: 0.88rem;
        color: var(--ivory-dim);
        max-width: 280px;
        line-height: 1.6;
      }
    }

    @keyframes popIn {
      from { transform: scale(0.5); opacity: 0; }
      to   { transform: scale(1);   opacity: 1; }
    }

    @media (max-width: 860px) {
      .contact-inner { grid-template-columns: 1fr; gap: 3rem; }
    }

    @media (max-width: 560px) {
      .contact-section { padding: 5rem 0; }
      .form-side { padding: 1.5rem; }
      .form-row-2 { grid-template-columns: 1fr; }
    }
  `]
})
export class ContactComponent {
  state = signal<State>('idle');

  form: ContactForm = { from_name: '', from_email: '', subject: '', message: '' };

  links = [
    { icon: '✉', label: 'Email',    value: 'tiwarishivanshu535@gmail.com',   href: 'mailto:tiwarishivanshu535@gmail.com',          external: false },
    { icon: '☎', label: 'Phone',    value: '+91 74896 41156',                 href: 'tel:+917489641156',                            external: false },
    { icon: '⌥', label: 'GitHub',   value: 'github.com/frieden07',            href: 'https://github.com/frieden07',                 external: true  },
    { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/in/shivanshu-tiwari',href: 'https://linkedin.com/in/shivanshu-tiwari',     external: true  },
  ];

  constructor(private email: EmailService) {}

  async submit() {
    if (this.state() === 'sending') return;
    this.state.set('sending');
    try {
      await this.email.send(this.form);
      this.state.set('success');
    } catch {
      this.state.set('error');
    }
  }

  reset() {
    this.form = { from_name: '', from_email: '', subject: '', message: '' };
    this.state.set('idle');
  }
}
