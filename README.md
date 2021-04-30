# Weather Mountain Web Component

[![REUSE status](https://api.reuse.software/badge/github.com/noi-techpark/webcomp-weather-mountain)](https://api.reuse.software/info/github.com/noi-techpark/webcomp-weather-mountain)

Weather in the mountains of South Tyrol in various languages.

Do you want to see it in action? Go to our [web component store](https://webcomponents.opendatahub.bz.it/webcomponent/fa42e0f0-149a-418c-8edf-f4c99b6eea4f)!

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
- Yarn (global)

### Installing

A step by step series of examples that tell you how to get a development env running

Install yarn project's dependencies

```
yarn
```

## Usage

Build all widget using Rollup:

```
yarn build
```

Watch component using Rollup with dev purpose:

```
yarn start
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
  meteo-mountain-widget.en_widget {
    --webcomp-weather-mountain-font-family: Metal Mania;
  }
</style>
<meteo-mountain-widget class="en_widget" language_translation="en"></meteo-mountain-widget>
```

### Dist folder in packages

## Built With

- [Node]()
- [Polymer]() - The web framework used

## Information

### Support

For support, please contact [help@opendatahub.bz.it](mailto:help@opendatahub.bz.it).

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
