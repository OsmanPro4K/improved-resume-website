import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { WeatherAppComponent } from './projects/weather-app/weather-app.component';
import { TindogComponent } from './projects/tindog/tindog.component';
import { ChirpComponent } from './projects/chirp/chirp.component';
import { TaskManagerComponent } from './projects/task-manager/task-manager.component';
import { NewTaskComponent } from './projects/task-manager/new-task/new-task.component';
import { TasksComponent } from './projects/task-manager/tasks/tasks.component';
import { TaskService } from './projects/task-manager/task.service';
import { ContactComponent } from './contact/contact.component';
import { WeatherService } from './projects/weather-app/services/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    IntroductionComponent,
    SkillsComponent,
    ProjectsComponent,
    TaskManagerComponent,
    WeatherAppComponent,
    TindogComponent,
    ChirpComponent,
    TaskManagerComponent,
    TasksComponent,
    NewTaskComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
