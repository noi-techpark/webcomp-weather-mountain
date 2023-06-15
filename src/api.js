// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// const BASE_PATH_WEATHER = 'https://tourism.opendatahub.com/api/Weather';
import { html } from 'lit-element';
import Glide from '@glidejs/glide';

const ORIGIN = `origin=webcomp-weather-mountain`;

export async function basic_weather_request() {
  let language =
    this.language_translation === 'en' || this.language_translation === 'it' || this.language_translation === 'de'
      ? this.language_translation
      : 'en';
  let request = await fetch(this.base_url + `?language=${language}&` + ORIGIN, {
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
