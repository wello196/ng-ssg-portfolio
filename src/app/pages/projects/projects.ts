import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ProjectService } from './services/project-service';
import { Project } from './models/project-interface';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects implements OnInit {
private projectService=inject(ProjectService);
private destroyRef=inject(DestroyRef);

projects = signal<Project[]>([]);

  ngOnInit() {
    return this.getAllProjects();
  }

  getAllProjects() {
    const sub=this.projectService.getProjects().subscribe((data: Project[]) => {
      console.log(data);
      this.projects.set(data);
    })

    this.destroyRef.onDestroy(() => {
      sub.unsubscribe();
    })
  }
}
