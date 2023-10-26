import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Osman Abrar Khan";
  @ViewChild('mainApp', {static: false}) mainApp!: ElementRef;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this.mainApp.nativeElement.classList.add('intro-bg-color');
          this.mainApp.nativeElement.classList.remove('projects-bg-color');
          this.mainApp.nativeElement.classList.remove('chirp-bg-color');
          this.mainApp.nativeElement.classList.remove('task-bg-color');
          this.mainApp.nativeElement.classList.remove('contact-bg-color');
        } else if (event.url === '/projects') {
          this.mainApp.nativeElement.classList.add('projects-bg-color');
          this.mainApp.nativeElement.classList.remove('intro-bg-color');
          this.mainApp.nativeElement.classList.remove('chirp-bg-color');
          this.mainApp.nativeElement.classList.remove('task-bg-color');
          this.mainApp.nativeElement.classList.remove('contact-bg-color');
        } else if (event.url === '/projects/chirp') {
          this.mainApp.nativeElement.classList.add('chirp-bg-color');
          this.mainApp.nativeElement.classList.remove('intro-bg-color');
          this.mainApp.nativeElement.classList.remove('projects-bg-color');
          this.mainApp.nativeElement.classList.remove('task-bg-color');
          this.mainApp.nativeElement.classList.remove('contact-bg-color');
        } else if (event.url === '/projects/taskmanager') {
          this.mainApp.nativeElement.classList.add('task-bg-color');
          this.mainApp.nativeElement.classList.remove('intro-bg-color');
          this.mainApp.nativeElement.classList.remove('projects-bg-color');
          this.mainApp.nativeElement.classList.remove('chirp-bg-color');
          this.mainApp.nativeElement.classList.remove('contact-bg-color');
        }
        else if (event.url === '/contact') {
          this.mainApp.nativeElement.classList.add('contact-bg-color');
          this.mainApp.nativeElement.classList.remove('intro-bg-color');
          this.mainApp.nativeElement.classList.remove('projects-bg-color');
          this.mainApp.nativeElement.classList.remove('chirp-bg-color');
          this.mainApp.nativeElement.classList.remove('task-bg-color');
        }
      }
    });
  }
}
