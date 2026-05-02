import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavbarComponent }     from './components/navbar/navbar.component';
import { HeroComponent }       from './components/hero/hero.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent }     from './components/skills/skills.component';
import { ProjectsComponent }   from './components/projects/projects.component';
import { EducationComponent }  from './components/education/education.component';
import { ContactComponent }    from './components/contact/contact.component';
import { FooterComponent }     from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent, HeroComponent, ExperienceComponent,
    SkillsComponent, ProjectsComponent, EducationComponent,
    ContactComponent, FooterComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero></app-hero>
      <app-experience></app-experience>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-education></app-education>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`main { position: relative; z-index: 1; }`]
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }
}
