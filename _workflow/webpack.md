# Webpack

Webpack allows us to bundle our source code so that we can easily use it in the browser, server or production. 

## Starting

To start, navigate to root folder of our project, initialise npm (`-y` uses the defaults) and install webpack as a dev dependency.
```
npm init -y
npm i --D webpack webpack-cli
```
Other dependencies  
Sass
```
npm i --D sass style-loader css-loader sass-loader
```
HTML
```
npm i -D html-webpack-plugin
```

### Structure

In the root folder, create two folders: /src and /dist. /src should contain the files edited by developers, webpack will bundle these files and send the bundle to /dist. 

### Bundling

Run `npx webpack` to bundle the files. This bundling can be configured by a config file. Create a `webpack.config.js` file in the root folder, this is what `webpack` uses by default. We can specify other configurations by running `npx webpack --config <filename>`. The following is a basic configuration. Webpack starts looking for files from the entry point, then bundles these into a single js output file, here `main.js`. 
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

#### Adding a script

Instead of running `npx webpack`, we can add a script to `package.json`, e.g. `build`. We can then run the same command using `npm run build`.
```json
{   ...
    "scripts": {
        "build": "webpack"
    }
}
```