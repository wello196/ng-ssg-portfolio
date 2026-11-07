import { Component, afterNextRender, ElementRef, inject } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {

  private elementRef = inject(ElementRef);

  constructor() {
    afterNextRender(() => {
      this.initializeScrollObserver();
    });
  }

  private initializeScrollObserver() {
    const steps = this.elementRef.nativeElement.querySelectorAll(
      '[data-scroll-step]'
    );

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -45% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const step = entry.target as HTMLElement;

        const badge = step.querySelector('.step-badge');
        const content = step.querySelector('.step-content');
        const title = step.querySelector('.step-title');
        const desc = step.querySelector('.step-desc');

        if (!badge || !content || !title || !desc) return;

        if (entry.isIntersecting) {
          badge.classList.add(
            'border-neon',
            'text-neon',
            'shadow-[0_0_12px_rgba(163,230,53,0.5)]'
          );

          content.classList.add('border-neon', 'pl-5');
          content.classList.remove('pl-3');

          title.classList.add('text-neon');
          title.classList.remove('text-dim');

          desc.classList.add('text-paper');
          desc.classList.remove('text-dim');

        } else {
          badge.classList.remove(
            'border-neon',
            'text-neon',
            'shadow-[0_0_12px_rgba(163,230,53,0.5)]'
          );

          content.classList.remove('border-neon', 'pl-5');
          content.classList.add('pl-3');

          title.classList.remove('text-neon');
          title.classList.add('text-dim');

          desc.classList.remove('text-paper');
          desc.classList.add('text-dim');
        }
      });
    }, observerOptions);

    steps.forEach((step: Element) => observer.observe(step));
  }
}