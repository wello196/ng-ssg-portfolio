import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Project } from '../models/project-interface';

@Service()
export class ProjectService {
    private http = inject(HttpClient);
    jsonUrl = 'projects.json';

    getProjects() {
        return this.http.get<Project[]>(this.jsonUrl);
    }
    
}
