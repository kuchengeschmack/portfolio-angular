import { Component, Input } from '@angular/core';

@Component({
  selector: 'art-photo-card',
  template: `
    <div class="photo-card">
      <div class="photo-card-header">
        <h1>{{ photo.alt }}</h1>
      </div>
      <div class="photo-card-img">
        <img [src]="photo.src" [alt]="photo.alt" />
      </div>
    </div>
  `,
  styles: `
    .photo-card-header {
      display: flex;
      justify-content: center;
      height: 32px;
      padding: 16px;
      transition: 1s ease-in-out;

      h1 {
        margin: 0px;
        font-weight: 500;
      }
    }

    .photo-card-img {
      display: grid;
      width: 100%;
      height: 100%;
      overflow: hidden;
      place-items: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .photo-card {
      max-width: 300px;
      height: 100%;
      overflow: hidden;
      border-radius: 10px;
      transition: 1s ease-in-out;
      box-shadow: 2px 2px 8px gray;
    }

    @media screen and (min-width: 500px) {
      .photo-card {
        .photo-card-header {
          margin-bottom: -64px;
        }

        &:hover,
        &:active {
          transform: scale(1.1);
          .photo-card-header {
            margin-bottom: 0px;
          }
        }
      }
    }
  `,
})
export class PhotoCard {
  @Input() photo = {} as Photo;
}
