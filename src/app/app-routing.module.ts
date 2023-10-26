import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { ProjectsComponent } from './projects/projects.component';
import { TindogComponent } from './projects/tindog/tindog.component';
import { ChirpComponent } from './projects/chirp/chirp.component';
import { TaskManagerComponent } from './projects/task-manager/task-manager.component';
import { ContactComponent } from './contact/contact.component';
import { WeatherAppComponent } from './projects/weather-app/weather-app.component';

const routes: Routes = [
  {path: "", component: IntroductionComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "projects/tindog", component: TindogComponent},
  {path: "projects/chirp", component: ChirpComponent},
  {path: "projects/taskmanager", component: TaskManagerComponent},
  {path: "projects/weatherapp", component: WeatherAppComponent},
  {path: "contact", component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
