import { Component, input } from '@angular/core';
import { CourseCard } from '../../models/courseCard.interface';

@Component({
  imports: [],
  selector: 'app-certs-card',
  styleUrl: './certs-card.css',
  templateUrl: './certs-card.html',
})
export class CertsCard {
  certsData=input<CourseCard[]>();
}
