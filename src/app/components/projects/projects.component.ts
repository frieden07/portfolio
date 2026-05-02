import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="projects-section">
      <div class="container">
        <div class="section-label reveal">
          <div class="label-rule"></div>
          <span class="label-text">Projects</span>
        </div>

        <div class="projects-header reveal">
          <h2 class="section-title">Selected<br><em>Work</em></h2>
          <p class="proj-sub">
            Systems designed, optimised, and shipped.
          </p>
        </div>

        <!-- Featured project -->
        <div class="featured-project reveal">
          <div class="feat-label mono muted">Featured Project</div>
          <div class="feat-grid">
            <div class="feat-visual">
              <div class="feat-metric-display">
                <span class="big-num">80<span class="big-pct">%</span></span>
                <span class="big-label mono muted">API Latency Reduction</span>
              </div>
              <div class="feat-sub-metrics">
                <div class="sub-m">
                  <span class="sub-val">850ms</span>
                  <span class="sub-arrow">→</span>
                  <span class="sub-val amber">170ms</span>
                </div>
                <div class="sub-m">
                  <span class="mono muted" style="font-size:0.7rem">avg. response time across 15+ endpoints</span>
                </div>
              </div>
            </div>
            <div class="feat-content">
              <h3 class="feat-title">Credit Risk GraphQL API</h3>
              <p class="feat-desc">
                Redesigned Deutsche Bank's data quality metrics API layer from REST to GraphQL,
                eliminating over-fetching across 15+ endpoints. The 80% latency reduction
                unblocked daily reporting for 6 banking teams and re-platformed 4 legacy dashboards
                to restore credit ratings access for 1,200+ counterparties.
              </p>
              <div class="feat-tags">
                @for (t of featuredProject.tags; track t) {
                  <span class="pill pill--amber">{{ t }}</span>
                }
              </div>
            </div>
          </div>
        </div>

        <!-- Other projects grid -->
        <div class="proj-grid">
          @for (p of otherProjects; track p.name) {
            <div class="proj-card card reveal">
              <div class="proj-card-top">
                <span class="proj-icon">{{ p.icon }}</span>
                @if (p.github) {
                  <a [href]="p.github" target="_blank" class="proj-gh-link" title="GitHub">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                }
              </div>
              <h3 class="proj-name">{{ p.name }}</h3>
              <p class="proj-desc">{{ p.desc }}</p>
              @if (p.impact) {
                <div class="proj-impact">
                  <span class="impact-val amber">{{ p.impact.val }}</span>
                  <span class="impact-label mono muted">{{ p.impact.label }}</span>
                </div>
              }
              <div class="proj-tags">
                @for (t of p.tags; track t) {
                  <span class="pill pill--ivory">{{ t }}</span>
                }
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `,
  styles: [`
    .projects-section {
      padding: 8rem 0;
      border-top: 1px solid var(--rule);
      background: var(--ink-2);
    }

    .projects-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 2rem;
      margin-bottom: 4rem;
      flex-wrap: wrap;
    }

    .proj-sub {
      font-size: 0.9rem;
      color: var(--ivory-dim);
      font-weight: 300;
      max-width: 260px;
      line-height: 1.6;
      text-align: right;
    }

    /* Featured */
    .featured-project {
      border: 1px solid var(--rule);
      border-radius: 4px;
      padding: 2.5rem;
      margin-bottom: 2rem;
      background: var(--ink);
      position: relative;
      overflow: hidden;

      &::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 2px;
        background: linear-gradient(90deg, var(--amber), rgba(232,160,32,0.2));
      }
    }

    .feat-label {
      font-size: 0.65rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 2rem;
    }

    .feat-grid {
      display: grid;
      grid-template-columns: 1fr 1.4fr;
      gap: 3rem;
      align-items: center;
    }

    .feat-visual {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .feat-metric-display {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .big-num {
      font-family: var(--ff-display);
      font-size: clamp(4rem, 8vw, 7rem);
      font-weight: 300;
      color: var(--amber);
      line-height: 1;

      .big-pct { font-size: 0.5em; }
    }

    .big-label { font-size: 0.7rem; letter-spacing: 0.12em; }

    .feat-sub-metrics {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }

    .sub-m {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .sub-val {
      font-family: var(--ff-mono);
      font-size: 0.85rem;
      color: var(--ivory-dim);

      &.amber { color: var(--amber); }
    }

    .sub-arrow { color: var(--ivory-faint); font-size: 0.8rem; }

    .feat-title {
      font-family: var(--ff-display);
      font-size: 1.7rem;
      font-weight: 300;
      color: var(--ivory);
      margin-bottom: 1rem;
      line-height: 1.2;
    }

    .feat-desc {
      font-size: 0.92rem;
      color: var(--ivory-dim);
      line-height: 1.75;
      margin-bottom: 1.5rem;
      font-weight: 300;
    }

    .feat-tags { display: flex; flex-wrap: wrap; gap: 0.5rem; }

    /* Grid */
    .proj-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    }

    .proj-card {
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 0.9rem;
    }

    .proj-card-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .proj-icon { font-size: 1.5rem; }

    .proj-gh-link {
      color: var(--ivory-faint);
      transition: color 0.2s;
      display: flex;
      &:hover { color: var(--amber); }
    }

    .proj-name {
      font-family: var(--ff-display);
      font-size: 1.1rem;
      font-weight: 400;
      color: var(--ivory);
    }

    .proj-desc {
      font-size: 0.85rem;
      color: var(--ivory-dim);
      line-height: 1.65;
      flex: 1;
      font-weight: 300;
    }

    .proj-impact {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;

      .impact-val {
        font-family: var(--ff-display);
        font-size: 1.3rem;
        font-weight: 400;
      }

      .impact-label { font-size: 0.65rem; letter-spacing: 0.06em; }
    }

    .proj-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }

    @media (max-width: 860px) {
      .feat-grid { grid-template-columns: 1fr; }
      .proj-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 560px) {
      .projects-section { padding: 5rem 0; }
      .proj-grid { grid-template-columns: 1fr; }
      .projects-header { flex-direction: column; }
      .proj-sub { text-align: left; max-width: none; }
    }
  `]
})
export class ProjectsComponent {
  featuredProject = {
    tags: ['Spring Boot', 'GraphQL', 'Java', 'Microservices'],
  };

  otherProjects = [
    {
      icon: '🔄',
      name: 'Financial ETL Pipeline',
      github: null,
      desc: 'Parallel ingestion pipelines using Apache NiFi + Ray for structured and unstructured financial data, with Celery-driven async task management.',
      impact: { val: '75%', label: 'Queue wait reduction' },
      tags: ['Apache NiFi', 'Ray', 'Celery', 'Python'],
    },
    {
      icon: '📦',
      name: 'MRM Vault Inventory',
      github: null,
      desc: 'Full backend for Model Risk Management vault. Led LLD decisions on data modelling with AWS S3 + Elasticsearch, cutting document retrieval latency by 45%.',
      impact: { val: '45%', label: 'Retrieval speed-up' },
      tags: ['Django', 'AWS S3', 'Elasticsearch', 'REST API'],
    },
    {
      icon: '💬',
      name: 'Learn With Frieden',
      github: 'https://github.com/frieden07',
      desc: 'Collaborative learning platform with real-time chat via Django Channels + WebSockets, study group management, designed for <100ms message latency.',
      impact: { val: '<100ms', label: 'Message latency' },
      tags: ['Django', 'WebSockets', 'Channels', 'HTML/CSS'],
    },
  ];
}
