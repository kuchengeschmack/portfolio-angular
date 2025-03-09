import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { version } from '../../../../package.json';
import header from '../../public/header.json';
import { environment } from '../environments/environment';

@Component({
  selector: 'art-root',
  imports: [RouterOutlet, RouterLink],
  template: `
    <header class="header">
      <div class="header-container">
        <div class="left-side">
          <h1>Marie-Cécile Caron, artiste-peintre</h1>
        </div>
        <div class="divider" role="separator" aria-label="Divider"></div>
        <div class="right-side">
          <nav class="pill-group">
            @for (item of header; track item.title) {
              <a class="pill" [routerLink]="item.link" rel="noopener">
                <span>{{ item.title }}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  viewBox="0 -960 960 960"
                  width="14"
                  fill="currentColor"
                >
                  <path
                    d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
                  />
                </svg>
              </a>
            }
          </nav>
        </div>
      </div>
    </header>

    <main class="main">
      <router-outlet />
    </main>

    <footer class="footer">
      <div class="container">
        <div class="version" [hidden]="hidden">v{{ version }}</div>
        <address class="address">mc-caron.com</address>
        <div class="social-links">
          <a
            href="https://www.facebook.com/mariececile.caron"
            aria-label="Facebook"
            target="_blank"
            rel="noopener"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              alt="Facebook"
            >
              <path
                d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .header {
      position: sticky;
      top: 0px;
      width: 100%;
      min-height: fit-content;
      display: grid;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      background-color: white;
      margin-bottom: 1rem;
      box-shadow: 0px 2px 8px gray;
      z-index: 1;
    }

    .main,
    .footer,
    .header {
      box-sizing: border-box;
    }

    .container {
      display: grid;
      width: 100%;
      height: 40px;
      background-color: white;
      text-align: center;
      align-items: center;
      justify-items: center;
    }

    .address,
    a {
      width: fit-content;
      align-content: center;
    }

    .social-links {
      display: flex;
      align-content: center;
      width: fit-content;
      height: 40px;
      position: fixed;
      right: 10px;
      bottom: 0px;
      z-index: 1;
      gap: 5px;

      path {
        transition: fill 0.3s ease;
        fill: var(--gray-400);
      }

      a:hover svg path {
        fill: var(--gray-900);
      }
    }

    .version {
      align-content: center;
      width: fit-content;
      height: 40px;
      position: fixed;
      left: 10px;
      bottom: 0px;
      z-index: 1;
    }

    .header-container {
      width: 100%;
      height: fit-content;
      display: grid;
      justify-content: start;
    }

    .divider {
      height: 1px;
      writing-mode: vertical-lr;
      margin-inline: 1rem;
      background: var(--red-to-pink-to-purple-horizontal-gradient);
    }

    .left-side {
      text-align: center;
      margin: 1rem 0 1rem;
      h1 {
        font-size: 1.5rem;
        color: var(--gray-900);
        font-weight: 500;
        line-height: 100%;
        letter-spacing: -0.125rem;
      }
    }

    .right-side {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem 0 1rem;
    }

    .pill {
      display: flex;
      align-items: center;
      --pill-accent: var(--bright-blue);
      background: color-mix(in srgb, var(--pill-accent) 5%, transparent);
      color: var(--pill-accent);
      padding-inline: 0.75rem;
      padding-block: 0.375rem;
      border-radius: 2.75rem;
      border: 0;
      transition: background 0.3s ease;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.4rem;
      letter-spacing: -0.00875rem;
      text-decoration: none;

      &:hover {
        background: color-mix(in srgb, var(--pill-accent) 15%, transparent);
      }
    }

    .pill-group {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1.25rem;

      .pill {
        &:nth-child(6n + 1) {
          --pill-accent: var(--bright-blue);
        }

        &:nth-child(6n + 2) {
          --pill-accent: var(--french-violet);
        }

        &:nth-child(6n + 3),
        &:nth-child(6n + 4),
        &:nth-child(6n + 5) {
          --pill-accent: var(--hot-red);
        }
      }

      svg {
        margin-inline-start: 0.25rem;
      }
    }

    @media screen and (min-width: 500px) {
      .header-container {
        grid-template-columns: 1fr 81px 1fr;
      }

      .divider {
        height: 100%;
        width: 1px;
        justify-self: center;
        margin-inline: 2.5rem;
        writing-mode: horizontal-tb;
        background: var(--red-to-pink-to-purple-vertical-gradient);
      }

      .left-side {
        justify-self: end;
        h1 {
          text-align: right;
          font-size: 2.125rem;
        }
      }

      .right-side {
        justify-self: start;

        .pill-group {
          flex-direction: row;
          justify-content: start;
        }
      }
    }
  `,
})
export class App {
  protected readonly hidden = environment.production;
  protected readonly header = header;
  protected readonly version = version;
}
