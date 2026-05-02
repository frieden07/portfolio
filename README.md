# Shivanshu Tiwari — Portfolio (Angular)


## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/         # Sticky nav with mobile hamburger
│   │   ├── hero/           # Fullscreen hero with animated orbs
│   │   ├── experience/     # Timeline-based work history
│   │   ├── skills/         # Skill cards with proficiency levels
│   │   ├── projects/       # Project showcase with impact metrics
│   │   ├── education/      # Education + IEEE publication
│   │   ├── contact/        # EmailJS contact form
│   │   └── footer/         # Footer with social links
│   └── services/
│       └── email.service.ts  # EmailJS integration
├── assets/
│   ├── logos/              # images or logo
├── styles.scss             # Global design tokens & utilities
└── index.html
```

---

## ✏️ Personalisation Checklist

| File | What to update |
|------|---------------|
| `email.service.ts` | EmailJS Service ID, Template ID, Public Key |
| `hero.component.ts` | Tagline, stats, tech stack pills |
| `navbar.component.ts` | Logo, nav links |
| `contact.component.ts` | LinkedIn URL, phone, email |
| `footer.component.ts` | Social links, LinkedIn URL |
| `education.component.ts` | Degrees, scores |
| `projects.component.ts` | Project descriptions, GitHub links |

---

## 🛠 Tech Stack

- **Angular 17** (standalone components, signals)
- **SCSS** with CSS custom properties
- **EmailJS** — free email delivery, no backend needed
- **Angular CLI** for build & serve
- **angular-cli-ghpages** for one-command GitHub Pages deploy
