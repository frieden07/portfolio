import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="hero">

      <div class="hero-bg">
        <div class="glow glow-1"></div>
        <div class="glow glow-2"></div>
        <div class="grid-overlay"></div>
      </div>

      <div class="hero-body">
        <div class="container">
          <div class="hero-layout">

            <!-- LEFT -->
            <div class="hero-left">

              <div class="eyebrow">
                <span class="status-ring"><span class="status-core"></span></span>
                <span class="eyebrow-text">Senior Technical Analyst &middot; Deutsche Bank Group</span>
              </div>

              <h1 class="hero-h1">
                <span class="h1-dim">Backend</span>
                <span class="h1-bright">Engineer<span class="caret"></span></span>
              </h1>

              <p class="hero-copy">
                I design and build distributed systems that operate at scale —
                turning complex stakeholder requirements into
                <span class="amber-text">measurable performance gains</span>.
                Based in Pune, India.
              </p>

              <div class="hero-actions">
                <a href="#contact" class="btn-solid">
                  Let's connect
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                    stroke="currentColor" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M2 7h10M8 3l4 4-4 4"/>
                  </svg>
                </a>
                <a href="#experience" class="btn-ghost">View my work</a>
              </div>

              <div class="hero-metrics">
                @for (m of metrics; track m.label) {
                  <div class="metric-item">
                    <span class="metric-val">{{ m.val }}</span>
                    <span class="metric-label">{{ m.label }}</span>
                  </div>
                }
              </div>
            </div>

            <!-- RIGHT: Stats panel -->
            <aside class="hero-panel">
              <div class="panel-top">
                <span class="panel-tag">Performance Snapshot</span>
              </div>
              <div class="panel-stats">
                @for (s of stats; track s.label) {
                  <div class="pstat">
                    <div class="pstat-head">
                      <span class="pstat-val">{{ s.val }}</span>
                      <span class="pstat-pct">{{ s.pct }}</span>
                    </div>
                    <div class="pstat-track">
                      <div class="pstat-fill" [style.width]="s.pct"></div>
                    </div>
                    <span class="pstat-label">{{ s.label }}</span>
                  </div>
                }
              </div>
              <div class="panel-bottom">
                <div class="avail-badge">
                  <span class="avail-dot"></span>Open to Roles
                </div>
                <div class="stack-line">Backend &middot; Distributed Systems &middot; Fintech</div>
              </div>
            </aside>

          </div>
        </div>
      </div>

      <!-- Tech strip -->
      <div class="tech-strip">
        <div class="container tech-inner">
          @for (t of techItems; track t) {
            <span class="tech-chip">{{ t }}</span>
          }
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="scroll-cue">
        <div class="scroll-bar"><div class="scroll-fill"></div></div>
        <span class="scroll-label">scroll</span>
      </div>

    </section>
  `,
  styles: [`
    /* ─── Section ─── */
    .hero {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      background: #0d0d0d;          /* explicit — never inherits */
      color: #f2ede6;               /* explicit — never inherits */
      position: relative;
      overflow: hidden;
    }

    /* ─── Background layer (z-index -1 so it never covers content) ─── */
    .hero-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
      pointer-events: none;
    }

    .glow {
      position: absolute;
      border-radius: 50%;
      filter: blur(130px);
    }
    .glow-1 {
      width: 700px; height: 500px;
      background: rgba(232,160,32,0.10);
      top: -80px; left: -200px;
      animation: driftA 20s ease-in-out infinite alternate;
    }
    .glow-2 {
      width: 500px; height: 500px;
      background: rgba(232,160,32,0.06);
      bottom: 0; right: -100px;
      animation: driftB 25s ease-in-out infinite alternate;
    }
    @keyframes driftA { to { transform: translate(60px,40px); } }
    @keyframes driftB { to { transform: translate(-40px,-60px); } }

    .grid-overlay {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
      background-size: 80px 80px;
      mask-image: radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 80%);
    }

    /* ─── Content (always above bg) ─── */
    .hero-body {
      position: relative;
      z-index: 1;                   /* above .hero-bg */
      flex: 1;
      display: flex;
      align-items: center;
      padding-top: calc(72px + 3rem);
      padding-bottom: 4rem;
    }

    .hero-layout {
      display: grid;
      grid-template-columns: 1fr 360px;
      gap: 4rem;
      align-items: center;
    }

    /* ─── Left ─── */
    .hero-left {
      display: flex;
      flex-direction: column;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 2rem;
    }

    .status-ring {
      width: 12px; height: 12px;
      border-radius: 50%;
      border: 1.5px solid #e8a020;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      animation: ringPulse 3s ease-in-out infinite;
    }
    @keyframes ringPulse {
      0%,100% { box-shadow: 0 0 0 0 rgba(232,160,32,0.5); }
      50%      { box-shadow: 0 0 0 6px rgba(232,160,32,0); }
    }

    .status-core {
      width: 5px; height: 5px;
      border-radius: 50%;
      background: #e8a020;
    }

    .eyebrow-text {
      font-family: 'DM Mono', monospace;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      color: #a89e92;               /* explicit warm grey */
    }

    /* Headline */
    .hero-h1 {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-weight: 300;
      line-height: 0.92;
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
    }

    .h1-dim {
      font-size: clamp(3rem, 7vw, 6rem);
      color: rgba(242,237,230,0.4);  /* explicitly semi-transparent ivory */
      letter-spacing: -0.02em;
      font-style: italic;
    }

    .h1-bright {
      font-size: clamp(3.5rem, 9vw, 8rem);
      color: #f2ede6;                /* explicit ivory */
      letter-spacing: -0.03em;
    }

    .caret {
      display: inline-block;
      width: 3px;
      height: 0.72em;
      background: #e8a020;
      margin-left: 5px;
      vertical-align: baseline;
      animation: caretBlink 1.1s step-end infinite;
    }
    @keyframes caretBlink { 0%,100%{opacity:1} 50%{opacity:0} }

    /* Body copy */
    .hero-copy {
      font-size: 1.05rem;
      color: #8a8078;               /* explicit mid-grey */
      max-width: 500px;
      line-height: 1.8;
      margin-bottom: 2.5rem;
      font-weight: 300;
    }

    .amber-text { color: #e8a020; }

    /* Buttons */
    .hero-actions {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      margin-bottom: 3.5rem;
      flex-wrap: wrap;
    }

    .btn-solid {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      background: #e8a020;
      color: #0d0d0d;
      font-family: 'DM Mono', monospace;
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 0.9rem 1.8rem;
      border-radius: 2px;
      text-decoration: none;
      transition: all 0.25s cubic-bezier(0.16,1,0.3,1);

      &:hover {
        background: #f2ede6;
        transform: translateY(-2px);
        box-shadow: 0 12px 35px rgba(232,160,32,0.25);
      }
    }

    .btn-ghost {
      font-family: 'DM Mono', monospace;
      font-size: 0.75rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #a89e92;
      text-decoration: none;
      border-bottom: 1px solid rgba(232,160,32,0.35);
      padding-bottom: 2px;
      transition: color 0.2s, border-color 0.2s;

      &:hover { color: #e8a020; border-color: #e8a020; }
    }

    /* Metrics */
    .hero-metrics {
      display: flex;
      gap: 2.5rem;
      padding-top: 2.5rem;
      border-top: 1px solid rgba(255,255,255,0.07);
      flex-wrap: wrap;
    }

    .metric-item { display: flex; flex-direction: column; gap: 0.2rem; }

    .metric-val {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.9rem;
      font-weight: 400;
      color: #e8a020;
      line-height: 1;
    }

    .metric-label {
      font-family: 'DM Mono', monospace;
      font-size: 0.62rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #5a5450;
    }

    /* ─── Right panel ─── */
    .hero-panel {
      background: rgba(255,255,255,0.035);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 6px;
      padding: 1.75rem;
    }

    .panel-top {
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }

    .panel-tag {
      font-family: 'DM Mono', monospace;
      font-size: 0.62rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #5a5450;
    }

    .panel-stats {
      display: flex;
      flex-direction: column;
      gap: 1.4rem;
      margin-bottom: 1.5rem;
    }

    .pstat-head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 0.5rem;
    }

    .pstat-val {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.25rem;
      font-weight: 400;
      color: #f2ede6;
    }

    .pstat-pct {
      font-family: 'DM Mono', monospace;
      font-size: 0.65rem;
      color: #e8a020;
      letter-spacing: 0.06em;
    }

    .pstat-track {
      height: 2px;
      background: rgba(255,255,255,0.06);
      border-radius: 1px;
      overflow: hidden;
      margin-bottom: 0.4rem;
    }

    .pstat-fill {
      height: 100%;
      background: linear-gradient(90deg, #e8a020 0%, rgba(232,160,32,0.3) 100%);
      border-radius: 1px;
      animation: barGrow 1.4s cubic-bezier(0.16,1,0.3,1) 0.8s both;
    }
    @keyframes barGrow { from { width: 0 !important; } }

    .pstat-label {
      font-family: 'DM Mono', monospace;
      font-size: 0.62rem;
      letter-spacing: 0.06em;
      color: #5a5450;
    }

    .panel-bottom {
      padding-top: 1.25rem;
      border-top: 1px solid rgba(255,255,255,0.06);
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }

    .avail-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-family: 'DM Mono', monospace;
      font-size: 0.68rem;
      letter-spacing: 0.08em;
      color: #e8a020;
      background: rgba(232,160,32,0.1);
      border: 1px solid rgba(232,160,32,0.2);
      padding: 0.3rem 0.8rem;
      border-radius: 100px;
      width: fit-content;
    }

    .avail-dot {
      width: 6px; height: 6px;
      border-radius: 50%;
      background: #e8a020;
      animation: caretBlink 1.8s step-end infinite;
    }

    .stack-line {
      font-family: 'DM Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.06em;
      color: #4a4440;
    }

    /* ─── Tech strip ─── */
    .tech-strip {
      position: relative;
      z-index: 1;
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 1rem 0;
    }

    .tech-inner {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0;
    }

    .tech-chip {
      font-family: 'DM Mono', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #4a4440;
      padding: 0 1.5rem;
      border-right: 1px solid rgba(255,255,255,0.06);
      white-space: nowrap;
      cursor: default;
      transition: color 0.2s;

      &:first-child { padding-left: 0; }
      &:last-child  { border-right: none; }
      &:hover       { color: #e8a020; }
    }

    /* ─── Scroll cue ─── */
    .scroll-cue {
      position: absolute;
      bottom: 2.5rem; right: 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      z-index: 1;
    }

    .scroll-bar {
      width: 1px; height: 56px;
      background: rgba(255,255,255,0.08);
      overflow: hidden;
    }

    .scroll-fill {
      width: 100%; height: 50%;
      background: #e8a020;
      animation: scrollDrop 2.2s ease-in-out infinite;
    }
    @keyframes scrollDrop {
      0%   { transform: translateY(-200%); }
      100% { transform: translateY(300%); }
    }

    .scroll-label {
      font-family: 'DM Mono', monospace;
      font-size: 0.58rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #5a5450;
      writing-mode: vertical-rl;
    }

    /* ─── Entrance animations ─── */
    .eyebrow   { animation: fadeUp 0.6s 0.05s cubic-bezier(0.16,1,0.3,1) both; }
    .hero-h1   { animation: fadeUp 0.8s 0.15s cubic-bezier(0.16,1,0.3,1) both; }
    .hero-copy { animation: fadeUp 0.7s 0.28s cubic-bezier(0.16,1,0.3,1) both; }
    .hero-actions  { animation: fadeUp 0.7s 0.38s cubic-bezier(0.16,1,0.3,1) both; }
    .hero-metrics  { animation: fadeUp 0.7s 0.48s cubic-bezier(0.16,1,0.3,1) both; }
    .hero-panel    { animation: fadeUp 0.8s 0.55s cubic-bezier(0.16,1,0.3,1) both; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    /* ─── Responsive ─── */
    @media (max-width: 960px) {
      .hero-layout { grid-template-columns: 1fr; gap: 3rem; }
      .hero-panel  { display: none; }
    }

    @media (max-width: 640px) {
      .hero-body { padding-bottom: 5rem; }
      .hero-metrics { gap: 1.5rem; }
      .metric-val { font-size: 1.5rem; }
      .scroll-cue { display: none; }
      .tech-chip  { border: none; padding: 0.25rem 0.5rem; }
    }
  `]
})
export class HeroComponent {
  metrics = [
    { val: '80%',    label: 'API latency cut'      },
    { val: '1,200+', label: 'Counterparties served' },
    { val: '9.34',   label: 'Cumulative GPA'        },
  ];

  stats = [
    { val: '80% improvement',  pct: '80%', label: 'API response time (850ms → 170ms)' },
    { val: '1,200+ entities',  pct: '72%', label: 'Counterparties via re-platforming'  },
    { val: '45% faster',       pct: '45%', label: 'Document retrieval latency'          },
    { val: '75% queue cut',    pct: '75%', label: 'ETL job wait (12 min → 3 min)'       },
  ];

  techItems = [
    'Java', 'Spring Boot', 'GraphQL', 'Python', 'Django',
    'AWS S3', 'Elasticsearch', 'Apache NiFi', 'Docker', 'Ray',
  ];
}
