import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './core/hero/hero';
import { About } from './core/about/about';
import { Contact } from './core/contact/contact';
import { Footer } from './core/footer/footer';
import { ChapterIndex } from './core/chapter-index/chapter-index';
import { Header } from './core/header/header';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Hero, About, Contact, Footer, ChapterIndex, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myPortfolio');
}
