import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CertsCard } from './components/certs-card/certs-card';
import { CertsService } from './services/certs-service';
import { CourseCard } from './models/courseCard.interface';

@Component({
  imports: [CertsCard],
  selector: 'app-certifications',
  styleUrl: './certifications.css',
  templateUrl: './certifications.html',
})
export class Certifications {
  certsData=signal<CourseCard[]>([]);
  private certsService = inject(CertsService);
  private destroyRef=inject(DestroyRef)
  
  ngOnInit() {
    return this.getCertificates();
  }
  getCertificates() {
     const subscription = this.certsService.getCertificates().subscribe((data: CourseCard[]) => {
      console.log(data);
      this.certsData.set(data);
    })

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })

  }
}
