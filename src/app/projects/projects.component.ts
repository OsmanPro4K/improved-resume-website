import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private router: Router) {}

  onTinDogViewClicked() {
    this.router.navigate(['projects/tindog']);
  }

  onChirpViewClicked() {
    this.router.navigate(['projects/chirp']);
  }

  onTaskManagerViewClicked() {
    this.router.navigate(['projects/taskmanager']);
  }

  onWeatherViewClicked() {
    this.router.navigate(['projects/weatherapp']);
  }

  onContactBtnClicked() {
    this.router.navigate(['contact']);
  }
}
