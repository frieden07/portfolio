import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="edu-section">
      <div class="container">
        <div class="edu-inner">

          <div class="edu-header reveal">
            <div class="section-label">
              <div class="label-rule"></div>
              <span class="label-text">Education</span>
            </div>
            <h2 class="section-title">Academic<br><em>Foundation</em></h2>
          </div>

          <div class="edu-content">
            <!-- Degrees -->
            <div class="degrees reveal">
              @for (d of degrees; track d.school) {
                <div class="degree-row">
                  <div class="degree-year mono muted">{{ d.year }}</div>
                  <div class="degree-main">
                    <div class="degree-title">{{ d.degree }}</div>
                    <div class="degree-school">{{ d.school }} — {{ d.location }}</div>
                  </div>
                  <div class="degree-score">
                    <span class="score-big amber">{{ d.score }}</span>
                    <span class="score-note mono muted">{{ d.scoreNote }}</span>
                  </div>
                </div>
              }
            </div>

            <!-- Publication -->
            <div class="pub-block reveal">
              <div class="pub-eyebrow">
                <span class="pub-badge mono">IEEE Publication · 2024</span>
              </div>
              <blockquote class="pub-title">
                "Real Time Network Monitoring and Reporting Using Network Intrusion Detection System"
              </blockquote>
              <p class="pub-venue mono muted">
                9th International Conference for Convergence in Technology, Pune, India
              </p>
              <div class="pub-tags">
                @for (t of pubTags; track t) {
                  <span class="pill pill--ivory">{{ t }}</span>
                }
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .edu-section {
      padding: 8rem 0;
      border-top: 1px solid var(--rule);
    }

    .edu-inner {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 5rem;
      align-items: start;
    }

    .edu-header { position: sticky; top: calc(var(--nav-h) + 2rem); }

    .edu-content {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    /* Degrees */
    .degrees {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .degree-row {
      display: grid;
      grid-template-columns: 80px 1fr auto;
      gap: 2rem;
      align-items: center;
      padding: 1.75rem 0;
      border-bottom: 1px solid var(--rule);

      &:first-child { border-top: 1px solid var(--rule); }

      &:hover { background: rgba(255,255,255,0.01); }
    }

    .degree-year { font-size: 0.68rem; letter-spacing: 0.1em; }

    .degree-title {
      font-family: var(--ff-display);
      font-size: 1.1rem;
      font-weight: 400;
      color: var(--ivory);
      margin-bottom: 0.25rem;
    }

    .degree-school {
      font-size: 0.82rem;
      color: var(--ivory-dim);
      font-weight: 300;
    }

    .degree-score {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.15rem;
    }

    .score-big {
      font-family: var(--ff-display);
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1;
    }

    .score-note { font-size: 0.62rem; letter-spacing: 0.08em; }

    /* Publication */
    .pub-block {
      background: var(--ink-2);
      border: 1px solid var(--rule);
      border-radius: 4px;
      padding: 2.25rem;
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        left: 0; top: 0; bottom: 0;
        width: 2px;
        background: var(--amber);
      }
    }

    .pub-eyebrow { margin-bottom: 1.25rem; }

    .pub-badge {
      font-size: 0.68rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--amber);
      background: var(--amber-dim);
      border: 1px solid var(--amber-mid);
      padding: 0.25rem 0.75rem;
      border-radius: 2px;
    }

    .pub-title {
      font-family: var(--ff-display);
      font-size: 1.25rem;
      font-weight: 300;
      font-style: italic;
      color: var(--ivory);
      line-height: 1.45;
      margin-bottom: 0.75rem;
      border: none;
      padding: 0;
    }

    .pub-venue {
      font-size: 0.72rem;
      letter-spacing: 0.04em;
      margin-bottom: 1.25rem;
    }

    .pub-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

    @media (max-width: 860px) {
      .edu-inner { grid-template-columns: 1fr; gap: 3rem; }
      .edu-header { position: static; }
    }

    @media (max-width: 560px) {
      .edu-section { padding: 5rem 0; }
      .degree-row { grid-template-columns: 1fr; gap: 0.5rem; }
      .degree-score { align-items: flex-start; flex-direction: row; align-items: baseline; gap: 0.75rem; }
    }
  `]
})
export class EducationComponent {
  degrees = [
    {
      year: '2024',
      degree: "Bachelor of Engineering",
      school: "Army Institute of Technology",
      location: "Pune",
      score: "9.34",
      scoreNote: "GPA / 10",
    },
    {
      year: '2019',
      degree: "Intermediate (Class XII)",
      school: "Kendriya Vidyalaya 1 STC",
      location: "Jabalpur",
      score: "91.4%",
      scoreNote: "Board score",
    },
  ];

  pubTags = ['Network Security', 'NIDS', 'Real-Time Systems', 'IEEE Xplore'];
}
