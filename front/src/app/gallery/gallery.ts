import type { OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Component, inject, DOCUMENT } from '@angular/core';

import { PhotoCard } from './photo-card';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'art-gallery',
  imports: [PhotoCard, AsyncPipe],
  template: `
    <article class="article">
      <h1>Book</h1>
      <div class="gallery">
        @for (photo of gallery | async; track photo.alt) {
          <art-photo-card [photo]="photo"></art-photo-card>
        }
      </div>
    </article>
  `,
  styles: `
    .gallery {
      display: grid;
      width: min(100%, 100rem);
      margin: 0 auto;
      grid-template-columns: repeat(auto-fill, 20rem);
      grid-auto-rows: minmax(20rem, auto);
      grid-auto-flow: row dense;
      justify-content: center;
      place-items: center;
      gap: 3rem;
    }
  `,
})
export class Gallery implements OnInit {
  private readonly _document = inject(DOCUMENT);
  protected readonly gallery = inject(HttpClient).get<Photo[]>('http://localhost:4200/images.json');
  protected breakpoint = 3;

  ngOnInit() {
    this._size();
  }

  private _size() {
    if (this._document.defaultView) {
      this.breakpoint = this._document.defaultView.innerWidth <= 500 ? 1 : 3;
    }
  }
}
