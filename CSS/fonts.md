# Fonts

Fonts can be specified with the `font-family` property. Fonts after the first value are considered fallback fonts. You should always have at least one system font as a fallback in case the others fail to load. The following can be used as a list of sans-serif fallback fonts.
```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```

# Custom and online fonts

Fonts can also be imported from online libraries (e.g. Google, Font library, FontAwesome), by using one or more `<link>` elements in your HTML file: 
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```
Or by adding an import statement in your CSS file, which can then be easily applied to all pages using that same file.
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
```
Exact instructions can usually be found on the font provider's page. 

Your site may also serve fonts (if you have the right to) which you can include on the site using `@font-face` with a `src` linking to the place where you stored that font file. Not all font formats are accepted by all browsers.
```css
@font-face {
  font-family: custom-font; /* this can be any name */
  src: url(../fonts/custom-font.woff);
}

h1 {
  font-family: custom-font, sans-serif;
}
```
| Properties |
| --- | 
| `font-style` |
| `letter-spacing` |
| `line-height` | 
| `text-transform` | 
| `text-shadow` | 
| `ellipsis` |