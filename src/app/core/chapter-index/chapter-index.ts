import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-chapter-index',
  styleUrl: './chapter-index.css',
  templateUrl: './chapter-index.html',
})
export class ChapterIndex {}
