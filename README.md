# MultilangPager

**MultilangPager** is a simple JavaScript library designed to facilitate internationalization for web pages. It combines language detection from both the browser and the user’s geographical location to ensure accurate and personalized translations. With MultilangPager, you can configure texts in multiple languages and let the library automatically adjust the content to the user's preferred language.

## Features

- **Intelligent Language Detection**: Uses both browser language settings and geographic location to detect the user's language.
- **Custom Language Selection**: Prompts the user to choose their preferred language if the detected languages are different, saving this preference for future visits.
- **Comprehensive Support**: Works with any HTML text element, including `<p>`, `<input>`, `<button>`, `<span>`, `<label>`, `<li>`, and more.
- **Preference Storage**: Saves the user’s choice in `localStorage`, allowing the page to load in the selected language on future visits.

## Installation

### Via CDN

To include MultilangPager via CDN, add the following script to your HTML file:

```html
<script src="https://cdn.jsdelivr.net/gh/simplyYan/MultilangPager@refs/heads/main/multilang.js"></script>
```

### Downloading the JS File

You can also download the [JavaScript file](https://raw.githubusercontent.com/simplyYan/MultilangPager/refs/heads/main/multilang.js) directly from the repository:

1. Download `multilangpager.js`.
2. Include the file in your project:

```html
<script src="path/to/multilangpager.js"></script>
```

## License

This project is licensed under the **CC0-1.0** (Public Domain) license. You are free to use, modify, and distribute it.

## Usage

### 1. Initializing MultilangPager

Initialize MultilangPager on page load by calling the `multilang.init()` function in your main JavaScript file. This function checks the user's preferred language and applies the initial configuration.

```javascript
document.addEventListener("DOMContentLoaded", () => {
  multilang.init();
});
```

### 2. Translating Elements

To translate any element's text, use the `multilang.translate(id, lang, newText)` function. This function checks if the user’s preferred language matches the one specified in `lang`. If so, it updates the element’s text to `newText`.

#### Example

```javascript
multilang.translate("myPhrase", "en", "Hello, world!");
multilang.translate("myPhrase", "fr", "Bonjour, le monde!");
multilang.translate("myPhrase", "es", "¡Hola, mundo!");
```

In the example above, the library changes the text of the element with `id="myPhrase"` to match the detected or selected language.

## Full Documentation

### Available Methods

1. **multilang.init()**
   - Initializes MultilangPager, detects the user's language, and prompts for language preference if browser and geo-detected languages differ. Saves the choice in `localStorage` for future visits.

2. **multilang.translate(id, lang, newText)**
   - `id`: *string* - The `id` of the HTML element to translate.
   - `lang`: *string* - The language code (e.g., "en", "fr", "es").
   - `newText`: *string* - The new text to display in the element if the language matches the user’s preference.

### Full Usage Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MultilangPager Example</title>
  <script src="https://cdn.example.com/multilangpager.min.js"></script>
</head>
<body>
  <h1 id="title">Title</h1>
  <p id="myPhrase">Welcome to our site!</p>

  <script>
    document.addEventListener("DOMContentLoaded", () => {
      multilang.init();

      multilang.translate("title", "en", "Welcome to our site!");
      multilang.translate("title", "fr", "Bienvenue sur notre site!");
      multilang.translate("title", "es", "¡Bienvenido a nuestro sitio!");

      multilang.translate("myPhrase", "en", "This is a demo text.");
      multilang.translate("myPhrase", "fr", "Ceci est un texte de démonstration.");
      multilang.translate("myPhrase", "es", "Este es un texto de demostración.");
    });
  </script>
</body>
</html>
```

## Contributing

To contribute, please:

1. Open an "issue" describing the improvement or problem.
2. Wait for initial discussions and guidance.
3. After feedback, you can create a "pull request" for review.

All kinds of contributions are welcome!
