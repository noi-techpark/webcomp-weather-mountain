// const BASE_PATH_WEATHER = 'https://tourism.opendatahub.bz.it/api/Weather';
import { html } from 'lit-element';
import Glide from '@glidejs/glide';

export async function basic_weather_request() {
  let language =
    this.language_translation === 'en' || this.language_translation === 'it' || this.language_translation === 'de'
      ? this.language_translation
      : 'en';
  let request = await fetch(this.base_url + `?language=${language}`, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`
    })
  });

  const response = await request.json();
  // const { Mountain } = response;

  return response;
}
