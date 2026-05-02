import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero">
      <!-- Ambient glow -->
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>

      <!-- Vertical rule left -->
      <div class="v-rule"></div>

      <div class="container hero-grid">

        <!-- LEFT column -->
        <div class="hero-left">
          <div class="eyebrow animate-0">
            <span class="status-ring"></span>
            <span class="mono muted">Senior Technical Analyst · Deutsche Bank</span>
          </div>

          <h1 class="hero-h1 animate-1">
            <span class="line-muted">Software</span>
            <span class="line-main">Engineer<span class="caret"></span></span>
          </h1>

          <p class="hero-copy animate-2">
            I design and build distributed systems that operate at scale —
            turning complex stakeholder requirements into measurable performance gains.
            Based in <em>Pune, India</em>.
          </p>

          <div class="hero-actions animate-3">
            <a href="#contact" class="btn btn--solid">Start a conversation</a>
            <a href="#experience" class="btn btn--ghost">
              View my work
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- RIGHT column — stat panel -->
        <aside class="hero-panel animate-4">
          <div class="panel-header">
            <span class="mono muted" style="font-size:0.65rem;letter-spacing:0.15em;">PERFORMANCE SNAPSHOT</span>
          </div>
          @for (s of stats; track s.label) {
            <div class="stat-row">
              <div class="stat-bar-track">
                <div class="stat-bar" [style.width]="s.pct"></div>
              </div>
              <div class="stat-info">
                <span class="stat-num">{{ s.val }}</span>
                <span class="stat-label mono muted">{{ s.label }}</span>
              </div>
            </div>
          }
          <div class="panel-footer">
            <span class="pill pill--amber">Open to Roles</span>
            <span class="pill pill--ivory">Backend · Distributed Systems</span>
          </div>
        </aside>
      </div>

      <!-- Bottom bar -->
      <div class="hero-bottom">
        <div class="container hero-bottom-inner">
          @for (t of techItems; track t) {
            <span class="tech-item mono muted">{{ t }}</span>
          }
        </div>
      </div>

      <!-- Scroll cue -->
      <div class="scroll-cue">
        <div class="scroll-track"><div class="scroll-thumb"></div></div>
        <span class="mono muted" style="font-size:0.6rem;letter-spacing:0.18em;">SCROLL</span>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: calc(var(--nav-h) + 4rem) 0 8rem;
      overflow: hidden;
      position: relative;
    }

    /* Glows */
    .glow {
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      pointer-events: none;
    }
    .glow-1 {
      width: 500px; height: 400px;
      background: rgba(232,160,32,0.06);
      top: 10%; left: -10%;
      animation: driftA 18s ease-in-out infinite alternate;
    }
    .glow-2 {
      width: 400px; height: 400px;
      background: rgba(232,160,32,0.04);
      bottom: 10%; right: 5%;
      animation: driftB 22s ease-in-out infinite alternate;
    }
    @keyframes driftA { to { transform: translate(40px, 30px); } }
    @keyframes driftB { to { transform: translate(-30px, -40px); } }

    /* Vertical rule */
    .v-rule {
      position: absolute;
      left: calc((100vw - 1120px) / 2 - 1px);
      top: 0; bottom: 0;
      width: 1px;
      background: linear-gradient(to bottom, transparent, var(--rule) 20%, var(--rule) 80%, transparent);
      pointer-events: none;
    }

    /* Grid */
    .hero-grid {
      display: grid;
      grid-template-columns: 1fr 380px;
      gap: 4rem;
      align-items: center;
      flex: 1;
      position: relative;
      z-index: 2;
    }

    /* Left */
    .hero-left { padding: 2rem 0; }

    .eyebrow {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      margin-bottom: 2rem;
    }
    .status-ring {
      width: 10px; height: 10px;
      border-radius: 50%;
      border: 1.5px solid var(--amber);
      position: relative;
      flex-shrink: 0;

      &::after {
        content: '';
        position: absolute;
        inset: 2px;
        border-radius: 50%;
        background: var(--amber);
        animation: pulse-dot 2.5s ease-in-out infinite;
      }
    }
    @keyframes pulse-dot {
      0%,100% { transform: scale(1); opacity: 1; }
      50%      { transform: scale(0.6); opacity: 0.5; }
    }

    .hero-h1 {
      font-family: var(--ff-display);
      font-weight: 300;
      line-height: 0.95;
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
    }

    .line-muted {
      font-size: clamp(3.5rem, 7vw, 6.5rem);
      color: var(--ivory-faint);
      letter-spacing: -0.02em;
      font-style: italic;
    }

    .line-main {
      font-size: clamp(4rem, 9vw, 8.5rem);
      color: var(--ivory);
      letter-spacing: -0.03em;
    }

    .caret {
      display: inline-block;
      width: 3px;
      height: 0.75em;
      background: var(--amber);
      margin-left: 6px;
      vertical-align: baseline;
      animation: blink 1.1s step-end infinite;
    }

    .hero-copy {
      font-size: 1.05rem;
      color: var(--ivory-dim);
      max-width: 480px;
      line-height: 1.75;
      margin-bottom: 2.5rem;
      font-weight: 300;

      em { font-style: normal; color: var(--ivory); }
    }

    .hero-actions {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    /* Panel (right) */
    .hero-panel {
      background: var(--ink-2);
      border: 1px solid var(--rule);
      border-radius: 4px;
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .panel-header {
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--rule);
    }

    .stat-row {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .stat-bar-track {
      height: 2px;
      background: rgba(255,255,255,0.06);
      border-radius: 1px;
      overflow: hidden;
    }

    .stat-bar {
      height: 100%;
      background: linear-gradient(90deg, var(--amber), rgba(232,160,32,0.4));
      border-radius: 1px;
      animation: growBar 1.2s var(--ease-out-expo) both;
    }

    @keyframes growBar {
      from { width: 0 !important; }
    }

    .stat-info {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 1rem;
    }

    .stat-num {
      font-family: var(--ff-display);
      font-size: 1.4rem;
      font-weight: 400;
      color: var(--ivory);
    }

    .stat-label { font-size: 0.65rem; }

    .panel-footer {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      padding-top: 0.5rem;
      border-top: 1px solid var(--rule);
    }

    /* Bottom tech bar */
    .hero-bottom {
      border-top: 1px solid var(--rule);
      margin-top: 4rem;
      padding: 1.25rem 0;
    }
    .hero-bottom-inner {
      display: flex;
      align-items: center;
      gap: 2.5rem;
      flex-wrap: wrap;
    }
    .tech-item {
      font-size: 0.68rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      opacity: 0.5;
      transition: opacity 0.2s;

      &:hover { opacity: 1; color: var(--amber); }
    }

    /* Scroll cue */
    .scroll-cue {
      position: absolute;
      right: 2.5rem;
      bottom: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.6rem;
    }
    .scroll-track {
      width: 1px; height: 60px;
      background: var(--rule);
      position: relative;
      overflow: hidden;
    }
    .scroll-thumb {
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 40%;
      background: var(--amber);
      animation: scrollDown 2s ease-in-out infinite;
    }
    @keyframes scrollDown {
      0%   { top: -40%; }
      100% { top: 140%; }
    }

    /* Entrance animations */
    .animate-0 { animation: fadeUp 0.6s 0.1s var(--ease-out-expo) both; }
    .animate-1 { animation: fadeUp 0.8s 0.2s var(--ease-out-expo) both; }
    .animate-2 { animation: fadeUp 0.7s 0.35s var(--ease-out-expo) both; }
    .animate-3 { animation: fadeUp 0.7s 0.45s var(--ease-out-expo) both; }
    .animate-4 { animation: fadeUp 0.8s 0.55s var(--ease-out-expo) both; }

    @media (max-width: 960px) {
      .hero-grid { grid-template-columns: 1fr; gap: 3rem; }
      .hero-panel { display: none; }
      .v-rule { display: none; }
    }

    @media (max-width: 480px) {
      .hero { padding-top: calc(var(--nav-h) + 2rem); padding-bottom: 5rem; }
      .hero-actions { flex-direction: column; align-items: flex-start; }
      .scroll-cue { display: none; }
    }
  `]
})
export class HeroComponent {
  stats = [
    { val: '80%',    label: 'API latency reduction',   pct: '80%'  },
    { val: '1,200+', label: 'Counterparties unblocked', pct: '72%'  },
    { val: '9.34',   label: 'Cumulative GPA / 10',      pct: '93%'  },
    { val: '45%',    label: 'Doc retrieval speed-up',   pct: '45%'  },
  ];

  techItems = [
    'Java', 'Spring Boot', 'GraphQL', 'Python', 'Django',
    'Elasticsearch', 'AWS', 'Docker', 'Apache NiFi', 'Ray',
  ];
}
