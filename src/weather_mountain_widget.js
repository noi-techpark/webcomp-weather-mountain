import Glide from '@glidejs/glide';
import { html, LitElement } from 'lit-element';
import moment from 'moment';
import 'moment/locale/cs';
import 'moment/locale/de';
import 'moment/locale/fr';
import 'moment/locale/it';
import 'moment/locale/nl';
import 'moment/locale/ru';
import { basic_weather_request } from './api';
import { render__mountain_slide } from './components/mountain_slide';
import style_glide_theme from './styles/glide-theme.css';
import style_glide_core from './styles/glide.css';
import main from './styles/main.css';
import style__placeholder_loading from './styles/placeholder-loading.css';
import style__typography from './styles/typography.css';
import { p } from './translations';

class MeteoMountain extends LitElement {
  constructor() {
    super();
    this.language_translation = 'it';
    this.weather_data = {};
    this.token = `iJ9gIQJ-LFaNT2m-R_dazqCf2XoXO8trlqZsgN6ENAMD9lrWsdKKxoOYkHdNQt9UAUJlMosEiF-njEUtoNwT3V6AtIt08bxrLa0DKLJYroj54I_C1kCPiWV69KR1IXUZj18av-nuofuYDzpE8jRYL02SI97jHEGWfnRLNOfLyEsp3pAp17rm-p6hst-t7Z0bYJkIqFvERMd4QHshaRvAb89EUPb_zEHj1JwgBUOwFIHf0e8Bm-1-nL8d9o9AIEGGDAIiJfvjGmNT-54vteKx1E_r7liUDuXfL0pctOpu5w5Mb_yBmnJsDGFjq7YHVL9dIqZzUvXnRXq1x4novqquK0jiEXRI3XxQN-qKuMpYQ8XqsXQWTjWqoGqgqbIGYpRXMcAUvO-6Y7SSKKvtMLvXGZjlC_IA0TMvF2r8JQbfluFk2XzKs7sqIu6OCxWT4Xxn8U2NWFtKXK4RkfXP9zOMP4FtTfz-X3kgwwgWuUnFvbufk9xRF8nNwqsxgwedNtnw0ouzarOI3zUFRg0dBKJse1z-_rGkF4QvTWwzGG17LPs`;
    this.base_url = `https://tourism.opendatahub.bz.it/api/Weather`;
    this.is_loading = true;
    this.current_slide = 0;
    // binded actions
    this.basic_weather_request = basic_weather_request.bind(this);
    this.render__mountain_slide = render__mountain_slide.bind(this);
  }
  static get properties() {
    return {
      is_loading: { type: Boolean },
      language_translation: { type: String },
      weather_data: { type: Object },
      current_slide: { type: Number }
    };
  }

  async firstUpdated() {
    moment.locale(this.language_translation);

    let weather_data = await this.basic_weather_request();
    const { Mountain } = weather_data;

    let mountain_today = null;
    let mountain_tomorrow = null;
    if (Mountain) {
      mountain_today = Mountain[0];
      if (Mountain[1]) {
        mountain_tomorrow = Mountain[1];
      } else {
        this.shadowRoot.getElementById('glide__bullets').style.display = 'none';
        this.shadowRoot.getElementById('glide__arrows').style.display = 'none';
      }
    }

    this.today_slide = mountain_today
      ? html`
          ${this.render__mountain_slide(mountain_today, 0)}
        `
      : '';
    this.tomorrow_slide = mountain_tomorrow
      ? html`
          ${this.render__mountain_slide(mountain_tomorrow, 1)}
        `
      : '';

    this.requestUpdate();

    if (this.shadowRoot.getElementById('main_slider') && mountain_tomorrow) {
      this.slider = new Glide(this.shadowRoot.getElementById('main_slider'), {}).mount();
    }

    this.is_loading = false;
  }

  render() {
    return html`
      <style>
        ${style_glide_core}
        ${style_glide_theme}
        ${style__placeholder_loading}
        ${main}
        ${style__typography}
      </style>
      <div class="meteo_mountain_widget">
        <div class="meteo_mountain_widget__container">
          <h1>${p.mountain_weather[this.language_translation]}</h1>
          <div style="">
            <div class="loader__placeholder content"><div class="line"></div></div>
          </div>
          <div id="main_slider" class="glide">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                <li class="glide__slide">${this.today_slide}</li>
                <li class="glide__slide">${this.tomorrow_slide}</li>
              </ul>
            </div>
            <div id="glide__arrows" class="glide__arrows" data-glide-el="controls">
              <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 501.5 501.5">
                  <g>
                    <path
                      fill="#2E435A"
                      d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"
                    />
                  </g>
                </svg>
              </button>
              <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 501.5 501.5">
                  <g>
                    <path
                      fill="#2E435A"
                      d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div id="glide__bullets" class="glide__bullets" data-glide-el="controls[nav]">
              <button class="glide__bullet" data-glide-dir="=0"></button>
              <button class="glide__bullet" data-glide-dir="=1"></button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

if (!window.customElements.get('meteo-mountain-widget')) {
  window.customElements.define('meteo-mountain-widget', MeteoMountain);
}
