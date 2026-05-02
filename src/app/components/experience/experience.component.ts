import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Role {
  title: string;
  period: string;
  current?: boolean;
  bullets: string[];
  tags: string[];
}

interface Company {
  name: string;
  location: string;
  type: string;
  logo: string;
  roles: Role[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="exp-section">
      <div class="container">
        <div class="exp-inner">

          <div class="exp-header reveal">
            <div class="section-label">
              <div class="label-rule"></div>
              <span class="label-text">Experience</span>
            </div>
            <h2 class="section-title">Where I've<br><em>made an impact</em></h2>
          </div>

          <!-- Timeline -->
          <div class="timeline">
            @for (company of companies; track company.name; let ci = $index) {
              <div class="company-block reveal">

                <!-- Company header (sticky-ish) -->
                <div class="company-card">
                  <div class="company-logo">
                    <img [src]="company.logo" [alt]="company.name" />
                  </div>
                  <div class="company-info">
                    <h3 class="company-name">{{ company.name }}</h3>
                    <div class="company-meta">
                      <span class="mono muted">{{ company.location }}</span>
                      <span class="meta-sep">·</span>
                      <span class="pill pill--ivory">{{ company.type }}</span>
                    </div>
                  </div>
                </div>

                <!-- Roles within this company -->
                <div class="roles-list">
                  @for (role of company.roles; track role.title; let ri = $index) {
                    <div class="role-item" [class.is-current]="role.current">
                      <!-- Timeline node -->
                      <div class="node-col">
                        <div class="node" [class.node-current]="role.current">
                          @if (role.current) { <div class="node-pulse"></div> }
                        </div>
                        @if (!isLastRole(ci, ri)) {
                          <div class="node-line"></div>
                        }
                      </div>

                      <!-- Role content -->
                      <div class="role-content">
                        <div class="role-header">
                          <div class="role-left">
                            <h4 class="role-title">{{ role.title }}</h4>
                            @if (role.current) {
                              <span class="current-badge">
                                <span class="badge-dot"></span>Current
                              </span>
                            }
                          </div>
                          <span class="role-period mono muted">{{ role.period }}</span>
                        </div>

                        <ul class="role-bullets">
                          @for (b of role.bullets; track b) {
                            <li [innerHTML]="b"></li>
                          }
                        </ul>

                        <div class="role-tags">
                          @for (t of role.tags; track t) {
                            <span class="pill pill--ivory">{{ t }}</span>
                          }
                        </div>
                      </div>
                    </div>
                  }
                </div>

              </div>
            }
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .exp-section {
      padding: 8rem 0;
      border-top: 1px solid var(--rule);
      background: linear-gradient(180deg, var(--ink) 0%, var(--ink-2) 100%);
    }

    .exp-inner {
      display: grid;
      grid-template-columns: 340px 1fr;
      gap: 6rem;
      align-items: start;
    }

    .exp-header { position: sticky; top: calc(var(--nav-h) + 2rem); }

    .section-label { margin-bottom: 1.5rem; }

    /* Timeline container */
    .timeline {
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
    }

    /* Company block */
    .company-block {}

    .company-card {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1.25rem 1.5rem;
      background: var(--ink-2);
      border: 1px solid var(--rule);
      border-radius: 4px;
      margin-bottom: 2rem;
    }

  .company-logo {
    width: 52px;
    height: 52px;
    background: var(--ink-3);
    border: 1px solid var(--rule);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;   /* ensures image doesn't overflow */
  }

  .company-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* keeps aspect ratio */
  }

    .company-name {
      font-family: var(--ff-display);
      font-size: 1.3rem;
      font-weight: 400;
      color: var(--ivory);
      margin-bottom: 0.35rem;
    }

    .company-meta {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      flex-wrap: wrap;
    }

    .meta-sep { color: var(--ivory-faint); font-size: 0.75rem; }

    /* Roles list */
    .roles-list {
      display: flex;
      flex-direction: column;
      gap: 0;
      padding-left: 1.5rem;
    }

    .role-item {
      display: grid;
      grid-template-columns: 28px 1fr;
      gap: 1.5rem;
      position: relative;
    }

    /* Node column */
    .node-col {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 0.35rem;
    }

    .node {
      width: 12px; height: 12px;
      border-radius: 50%;
      border: 2px solid var(--ivory-faint);
      background: var(--ink);
      flex-shrink: 0;
      z-index: 2;
      position: relative;
      transition: border-color 0.3s;

      &.node-current {
        border-color: var(--amber);
        background: var(--amber);
      }
    }

    .node-pulse {
      position: absolute;
      inset: -5px;
      border-radius: 50%;
      border: 1px solid var(--amber);
      animation: nodePulse 2.5s ease-in-out infinite;
    }
    @keyframes nodePulse {
      0%,100% { transform: scale(1); opacity: 0.5; }
      50%      { transform: scale(1.5); opacity: 0; }
    }

    .node-line {
      width: 1px;
      flex: 1;
      min-height: 24px;
      background: linear-gradient(to bottom, var(--rule-hi), var(--rule));
      margin-top: 4px;
      margin-bottom: 0;
    }

    /* Role content */
    .role-content {
      padding-bottom: 2.5rem;
    }

    .role-item:last-child .role-content { padding-bottom: 0; }

    .role-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.25rem;
      flex-wrap: wrap;
    }

    .role-left {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
    }

    .role-title {
      font-family: var(--ff-display);
      font-size: 1.15rem;
      font-weight: 400;
      color: var(--ivory);
    }

    .current-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-family: var(--ff-mono);
      font-size: 0.62rem;
      letter-spacing: 0.1em;
      color: var(--amber);
      background: var(--amber-dim);
      border: 1px solid var(--amber-mid);
      padding: 0.2rem 0.6rem;
      border-radius: 100px;
      text-transform: uppercase;

      .badge-dot {
        width: 5px; height: 5px;
        border-radius: 50%;
        background: var(--amber);
        animation: blink 1.5s step-end infinite;
      }
    }

    .role-period { font-size: 0.7rem; }

    /* Bullets */
    .role-bullets {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.7rem;
      margin-bottom: 1.25rem;

      li {
        font-size: 0.92rem;
        color: var(--ivory-dim);
        padding-left: 1.25rem;
        position: relative;
        line-height: 1.7;

        &::before {
          content: '—';
          position: absolute;
          left: 0;
          color: var(--amber);
          font-size: 0.75rem;
          top: 0.1em;
        }

        ::ng-deep strong {
          color: var(--ivory);
          font-weight: 500;
        }
      }
    }

    .role-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
    }

    @media (max-width: 900px) {
      .exp-inner { grid-template-columns: 1fr; gap: 3rem; }
      .exp-header { position: static; }
    }

    @media (max-width: 600px) {
      .exp-section { padding: 5rem 0; }
      .company-card { flex-direction: column; align-items: flex-start; }
      .roles-list { padding-left: 0.75rem; }
    }
  `]
})
export class ExperienceComponent {
  companies: Company[] = [
    {
      name: 'Deutsche Bank Group',
      location: 'Pune, India',
      type: 'Full-time',
      logo: 'assets/logos/db.png',
      roles: [
        {
          title: 'Senior Technical Analyst',
          period: 'Oct 2025 – Present',
          current: true,
          bullets: [
            'Stepped up as <strong>de-facto team lead</strong> in the absence of senior leadership — managing sprint delivery, unblocking teammates, and owning component-level production incidents from root cause to hotfix.',
            'Provided <strong>solution design for Credit Risk</strong> feature requests, translating stakeholder requirements into actionable low-level technical specs.',
            'Established logging standards and drove <strong>SonarQube coverage improvements</strong> across all team-owned components, eliminating critical code smells.',
          ],
          tags: ['Java', 'Spring Boot', 'Credit Risk', 'SonarQube', 'Tech Lead'],
        },
        {
          title: 'Technical Analyst',
          period: 'Jul 2024 – Sep 2025',
          bullets: [
            'Redesigned the data quality metrics API layer using <strong>Spring Boot + GraphQL</strong>, cutting average API response time from ~850 ms to ~170 ms — an <strong>80% improvement</strong> that unblocked daily reporting for 6 banking teams.',
            'Decommissioned 4 legacy Flux-based portfolio dashboards and re-platformed to Spring Boot, restoring credit ratings access for <strong>~1,200 counterparties</strong> and eliminating ~40 engineer-hours of quarterly migration work.',
          ],
          tags: ['GraphQL', 'Spring Boot', 'Microservices', 'Java'],
        },
      ],
    },
    {
      name: 'Solytics Partners',
      location: 'Pune, India',
      type: 'Internship',
      logo: 'assets/logos/solytics.jpg',
      roles: [
        {
          title: 'Backend Developer Intern',
          period: 'Apr 2023 – Jun 2024',
          bullets: [
            'Designed and built the <strong>Inventory Management System</strong> backend for MRM Vault using Python, Django, and REST APIs; led low-level design on data modelling and storage (AWS S3 + Elasticsearch), reducing document retrieval latency by <strong>~45%</strong>.',
            'Built ETL pipelines with <strong>Apache NiFi and Ray</strong> for parallel ingestion of structured and unstructured financial data; introduced Celery async task management, cutting job queue wait time from <strong>~12 min to ~3 min</strong>.',
          ],
          tags: ['Python', 'Django', 'AWS S3', 'Elasticsearch', 'Apache NiFi', 'Ray', 'Celery'],
        },
      ],
    },
  ];

  isLastRole(companyIdx: number, roleIdx: number): boolean {
    return roleIdx === this.companies[companyIdx].roles.length - 1;
  }
}
