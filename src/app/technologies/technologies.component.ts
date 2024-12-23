import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {

  technologies:any = [
    { name: "Java", src: "Asset/images/java.png", width: "3rem" },
    { name: "JavaScript", src: "Asset/images/JS.png", width: "3rem" },
    { name: "TypeScript", src: "Asset/images/TS.png", width: "3rem" },
    { name: "Angular", src: "Asset/images/favicon.ico", width: "3rem" },
    { name: "Springboot", src: "Asset/images/Springboot.png", width: "5rem" },
    { name: "MYSQL", src: "Asset/images/MYSQL.png", width: "3rem" },
    { name: "HTML", src: "Asset/images/html.png", width: "3rem" },
    { name: "CSS", src: "Asset/images/css.png", width: "3rem" },
    { name: "Bootstrap", src: "Asset/images/bootstrap.png", width: "3rem" },
    { name: "Postman", src: "Asset/images/Postman.png", width: "3rem" },
    { name: "Git", src: "Asset/images/Git.png", width: "3rem" },
    { name: "GitHub", src: "Asset/images/icons8-github-30.png", width: "3rem"}
  ];  
}
