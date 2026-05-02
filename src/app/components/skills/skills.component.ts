import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="skills-section">
      <div class="container">
        <div class="skills-inner">

          <div class="skills-header reveal">
            <div class="section-label">
              <div class="label-rule"></div>
              <span class="label-text">Skills</span>
            </div>
            <h2 class="section-title">Technical<br><em>Arsenal</em></h2>
            <p class="skills-sub">
              Technologies I've shipped production systems with.
              <span class="amber">Amber</span> = primary stack.
            </p>
          </div>

          <div class="skills-body">
            @for (cat of categories; track cat.title) {
              <div class="cat-block reveal">
                <div class="cat-title-row">
                  <span class="cat-icon">{{ cat.icon }}</span>
                  <span class="cat-name mono">{{ cat.title }}</span>
                </div>
                <div class="cat-pills">
                  @for (s of cat.skills; track s.name) {
                    <span class="skill-pill" [class.skill-primary]="s.primary">
                      {{ s.name }}
                    </span>
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
    .skills-section {
      padding: 8rem 0;
      border-top: 1px solid var(--rule);
    }

    .skills-inner {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 5rem;
      align-items: start;
    }

    .skills-header { position: sticky; top: calc(var(--nav-h) + 2rem); }

    .skills-sub {
      margin-top: 1.5rem;
      font-size: 0.88rem;
      color: var(--ivory-dim);
      line-height: 1.7;
      font-weight: 300;
    }

    /* Skills body */
    .skills-body {
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .cat-block {
      padding: 1.75rem 0;
      border-bottom: 1px solid var(--rule);
      display: grid;
      grid-template-columns: 180px 1fr;
      gap: 2rem;
      align-items: center;
      transition: background 0.2s;

      &:first-child { border-top: 1px solid var(--rule); }

      &:hover { background: rgba(255,255,255,0.015); }
    }

    .cat-title-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .cat-icon {
      font-size: 1.1rem;
      width: 32px;
      text-align: center;
      flex-shrink: 0;
    }

    .cat-name {
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--ivory-dim);
    }

    /* Pills */
    .cat-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .skill-pill {
      font-family: var(--ff-mono);
      font-size: 0.72rem;
      letter-spacing: 0.04em;
      padding: 0.3rem 0.8rem;
      border-radius: 2px;
      border: 1px solid var(--rule-hi);
      color: var(--ivory-dim);
      background: transparent;
      transition: all 0.2s;
      cursor: default;

      &:hover {
        border-color: var(--ivory-faint);
        color: var(--ivory);
      }

      &.skill-primary {
        border-color: var(--amber-mid);
        color: var(--amber);
        background: var(--amber-dim);

        &:hover {
          background: rgba(232,160,32,0.2);
          border-color: var(--amber);
        }
      }
    }

    @media (max-width: 900px) {
      .skills-inner { grid-template-columns: 1fr; gap: 3rem; }
      .skills-header { position: static; }
    }

    @media (max-width: 600px) {
      .skills-section { padding: 5rem 0; }
      .cat-block { grid-template-columns: 1fr; gap: 1rem; }
    }
  `]
})
export class SkillsComponent {
  categories = [
    {
      icon: '⚡', title: 'Languages',
      skills: [
        { name: 'Java',       primary: true  },
        { name: 'Python',     primary: true  },
        { name: 'SQL',        primary: true  },
        { name: 'TypeScript', primary: false },
        { name: 'JavaScript', primary: false },
        { name: 'C++',        primary: false },
      ],
    },
    {
      icon: '🏗', title: 'Frameworks',
      skills: [
        { name: 'Spring Boot',   primary: true  },
        { name: 'GraphQL',       primary: true  },
        { name: 'Django',        primary: true  },
        { name: 'REST API',      primary: true  },
        { name: 'Microservices', primary: true  },
        { name: 'Angular',       primary: false },
        { name: 'Cucumber',      primary: false },
      ],
    },
    {
      icon: '📦', title: 'Libraries',
      skills: [
        { name: 'Ray',      primary: true  },
        { name: 'Celery',   primary: true  },
        { name: 'JUnit',    primary: true  },
        { name: 'pandas',   primary: false },
        { name: 'boto3',    primary: false },
        { name: 'pytest',   primary: false },
        { name: 'plotly',   primary: false },
        { name: 'pyiceberg',primary: false },
      ],
    },
    {
      icon: '☁️', title: 'Cloud & Storage',
      skills: [
        { name: 'AWS S3',        primary: true  },
        { name: 'Elasticsearch', primary: true  },
        { name: 'Docker',        primary: true  },
        { name: 'AWS Athena',    primary: false },
      ],
    },
    {
      icon: '🔧', title: 'Dev Tools',
      skills: [
        { name: 'Git',       primary: true  },
        { name: 'Jenkins',   primary: true  },
        { name: 'Jira',      primary: true  },
        { name: 'Postman',   primary: false },
        { name: 'Swagger',   primary: false },
        { name: 'SonarLint', primary: false },
        { name: 'Sealight',  primary: false },
      ],
    },
    {
      icon: '🎯', title: 'Practices',
      skills: [
        { name: 'Agile / Scrum',       primary: true  },
        { name: 'CI/CD',               primary: true  },
        { name: 'Low-Level Design',    primary: true  },
        { name: 'Distributed Systems', primary: true  },
        { name: 'Apache NiFi',         primary: false },
      ],
    },
  ];
}
