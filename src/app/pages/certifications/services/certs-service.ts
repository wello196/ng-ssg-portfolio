import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { CourseCard } from '../models/courseCard.interface';

@Service()
export class CertsService {
    jsonUrl = 'certificates.json';
    private http = inject(HttpClient);

    getCertificates() {
        return this.http.get<CourseCard[]>(this.jsonUrl);
    }
}
