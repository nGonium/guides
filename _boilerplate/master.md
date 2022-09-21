# Master workflow

The following workflow is recommended for most larger projects

## All-in-one

```bash
# Initiation
npm init -y
npm i -D webpack webpack cli
npm i -D webpack-dev-server
# Lint
npm i -D eslint
./node_modules/.bin/eslint --init

# Babel loader
npm i -D babel-loader @babel/core @babel/preset-env webpack
```

## Webpack
```bash
npm init -y
npm i -D webpack webpack cli
```
### Loaders

Install SCSS loaders with
```bash
npm i -D style-loader css-loader sass-loader
```
Match `.scss` files to loaders
```javascript
module: {
  rules: [
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
    },
  ],
},
```

### Plugins

```bash
npm i -D webpack-bundle-analyzer
```
```javascript
// Import
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// Add to module.exports
plugins: [
  new BundleAnalyzerPlugin()
]
```

### Dev server

```bash
npm i -D webpack-dev-server
```
```javascript
devServer: {
  contentBase: path.join(__dirname, 'public'),
  port: 9000,
}
```

## Lint
Install lint and init config
```bash
npm i -D eslint
./node_modules/.bin/eslint --
```

## Babel
[reference](https://github.com/babel/babel-loader)

Install loader
```
npm i -D babel-loader @babel/core @babel/preset-env webpack
```
Add babel-loader to webpack.config.js
```javascript
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    }
  ]
}
```


