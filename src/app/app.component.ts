import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { IntroComponent } from "./intro/intro.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TechnologiesComponent } from "./technologies/technologies.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IntroComponent, ProjectsComponent, TechnologiesComponent, FooterComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Portfolio';
  introVisibility:any=true;
  projectVisibility:any=true;
  displayProfile() {
    throw new Error('Method not implemented.');
    }
    displayProject() {
      this.introVisibility=false;
      this.projectVisibility=true;
    }
    displayall() {
    this.introVisibility=true;
    this.projectVisibility=true;
    }
}
