<!--
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: CC0-1.0
-->

# Weather Mountain Web Component

[![REUSE Compliance](https://github.com/noi-techpark/webcomp-weather-mountain/actions/workflows/reuse.yml/badge.svg)](https://github.com/noi-techpark/odh-docs/wiki/REUSE#badges)
[![REUSE status](https://api.reuse.software/badge/github.com/noi-techpark/webcomp-weather-mountain)](https://api.reuse.software/info/github.com/noi-techpark/webcomp-weather-mountain)
[![CI](https://github.com/noi-techpark/webcomp-weather-mountain/actions/workflows/ci.yml/badge.svg)](https://github.com/noi-techpark/webcomp-weather-mountain/actions/workflows/ci.yml)

Weather in the mountains of South Tyrol in various languages.

Do you want to see it in action? Go to our [web component store](https://webcomponents.opendatahub.com/webcomponent/fa42e0f0-149a-418c-8edf-f4c99b6eea4f)!

- [Weather Mountain Web Component](#weather-mountain-web-component)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
  - [Usage](#usage)
  - [Customizations](#customizations)
    - [Use a custom font](#use-a-custom-font)
    - [Dist folder in packages](#dist-folder-in-packages)
  - [Built With](#built-with)
  - [Information](#information)
    - [Support](#support)
    - [Contributing](#contributing)
    - [Documentation](#documentation)
    - [Boilerplate](#boilerplate)
    - [License](#license)

## Getting Started

Follow the instruction here below for the development instructions.

### Prerequisites

What things you need to install the software and how to install them

- Node (global)
- NPM (global)

### Installing

A step by step series of examples that tell you how to get a development env running

Install npm project's dependencies

```
npm install
```

## Usage

Build all widget using Rollup:

```
npm run build
```

Watch component using Rollup with dev purpose:

```
npm run start
```

To view the component changes (example with python3):

```
cd ./work
python3 -m http.server
```

You will see the components in action at [http://0.0.0.0:8000/](http://0.0.0.0:8000/) url.

## Customizations

### Use a custom font

Using the `--webcomp-weather-mountain-font-family` css variable you can set a custom `font-family`.
[link to MDN doc](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

```html
<style>
  odh-weather-mountain.en_widget {
    --webcomp-weather-mountain-font-family: Metal Mania;
  }
</style>
<odh-weather-mountain class="en_widget" language_translation="en"></odh-weather-mountain>
```

### Dist folder in packages

## Built With

- [Node]()
- [Polymer]() - The web framework used

## Information

### Support

For support, please contact [help@opendatahub.com](mailto:help@opendatahub.com).

### Contributing

If you'd like to contribute, please follow the following instructions:

- Fork the repository.

- Checkout a topic branch from the `development` branch.

- Make sure the tests are passing.

- Create a pull request against the `development` branch.

A more detailed description can be found here: [https://github.com/noi-techpark/documentation/blob/master/contributors.md](https://github.com/noi-techpark/documentation/blob/master/contributors.md).

### Documentation

More documentation can be found at [https://opendatahub.readthedocs.io/en/latest/index.html](https://opendatahub.readthedocs.io/en/latest/index.html).

### Boilerplate

The project uses this boilerplate: [https://github.com/noi-techpark/webcomp-boilerplate](https://github.com/noi-techpark/webcomp-boilerplate).

### License

The code in this project is licensed under the GNU AFFERO GENERAL PUBLIC LICENSE Version 3 license. See the [LICENSE.md](LICENSE.md) file for more information.

### REUSE

This project is [REUSE](https://reuse.software) compliant, more information about the usage of REUSE in NOI Techpark repositories can be found [here](https://github.com/noi-techpark/odh-docs/wiki/Guidelines-for-developers-and-licenses#guidelines-for-contributors-and-new-developers).

Since the CI for this project checks for REUSE compliance you might find it useful to use a pre-commit hook checking for REUSE compliance locally. The [pre-commit-config](.pre-commit-config.yaml) file in the repository root is already configured to check for REUSE compliance with help of the [pre-commit](https://pre-commit.com) tool.

Install the tool by running:
```bash
pip install pre-commit
```
Then install the pre-commit hook via the config file by running:
```bash
pre-commit install
```
