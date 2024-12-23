import { Component } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  ngAfterViewInit(): void
  {
    gsap.from(".intro-container",
      {
        opacity:0,
        y:30,
        duration:2,
        stagger:4
      }
    );
    
  }  
}
