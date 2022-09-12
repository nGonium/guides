# Node Package Manager

Node Package Manager, or npm, is a package manager originally developed for node.js. It comes pre-installed with Node, but is not reliant on it and can be used with other frameworks. As the name suggests, it allows us to manage our packages. Most common packages (and a whole lot more) are available from npm's repository and can be installed easily with `npm install`. 

## Package.json

Running `npm init` in the project root folder creates `Package.json`. npm will ask a couple of questions to set it up, to select the default (written in parentheses) simply press enter, otherwise type in your desired value before pressing enter to overwrite it. To run `npm init` with all default values quickly, you can run the command with `-y` or `--yes` flags. If you wish to make changes afterward, you can simply edit the resulting file. `Package.json` keeps track of used packages (dependencies), where they're required (development or production code), and which version is used. 

### Configure defaults (`config`)

You can configure the default values for `package.json` properties by using `npm set init-{property name} "{value}"`. For example, if we wanted to set the author to John Doe we use `npm set init-author-name "John Doe"` (note: although `package.json` uses the `author` property, it is accessed through `author-name` instead, unlike other properties). Similarly, we can `get` the default value using `npm get init-{property name}`. We can remove a value from `config`, which resets it to the default value set by `npm`, by using `npm delete init-{property name}`, e.g. `npm delete init-license` resets it to the ISC license.  

### Scripts

`package.json` contains a `scripts` property, we can add named scripts to this that contain commands as values. This command is then run when `npm run <script name>` is run. Sometimes, `run` may be omitted for certain script names. For example
```json
{
    {...},
    "scripts": {
        "start": "node main.js",
        "server": "live-server",
    }
}
```
We can run those scripts with `npm start` and `npm run server` respectively.

### Semantic versioning

npm modules use the semantic version naming scheme. Each version consists of 3 numbers, in order:
- Major version: major changes which may break the API, requires manual edits to upgrade
- Minor version: adds features but should not break API
- Patch: nug fixes  

In `package.json`, you'll see dependencies with version numbers written like `^1.5.4` or `~1.5.4`, meaning Major version 1, minor 5, patch 4. 

- `^` (default) signifies that npm should manage (keep updated) this dependency to use the latest minor version and patch, however it will not update to the latest major version. 
- `~` signifies it should stick to this minor version and only update to the latest patch. 
- If there is no prefix, npm won't update the module and stick to the exact current version. 
- We can use version `*` which will update to the latest major version, but this is discouraged as such updates are likely to break the API.

## Installing packages

### Local install

After initializing npm (see above), we can use it to install packages with `npm install {package name} --save`. Package names can be obtained from the npm website/repository. Packages are installed to the node-modules folder. `npm install` can take multiple packages as arguments, we can also specify a version number for each package using `npm install <package>@<version>`.

We can run the command without the `--save` flag, and this would still install the package, but not update `package.json` to include a dependency. Alternatively, `--save-dev` is used for packages which are only a dependency for development and not production code. Along with the module itself, npm also installs any dependencies of the module (if any), meaning the npm-modules folder can get bloated quickly.

### Installing from existing package.json file

If a `package.json` file is already present, e.g. downloaded from a repository, npm can use it to download the required modules. Simply navigate to the root folder and simply run `npm install`. If only the regular dependencies (not devDependencies) are needed, e.g. on your production server, run it instead with the flag `--production`.

### Global install and `root`

Sometimes it's useful to have a package be globally installed, so that we can use it in many different environments. For example, live-server allows us to run a live server from the command line. We would install it with the `-g` flag, like so: `npm install live-server -g`. This installs it in the root directory for npm, to find this run `npm root -g`.

### Uninstall (`rm`, `remove`)

You can uninstall a module using `npm uninstall {module name}`, if this is a dependency you should run it with `--save`, or `--save-dev` if it is a development dependency. This will remove the files from node-modules and, if run with the flags, from the depency list. `uninstall` also has two aliases, `remove` and `rm` which can be used as an alternative. The `-g` flag indicates that the global package should be removed.

### `Require()`, using our modules

We can use modules in our JS file by using `require()`

# Cheatsheet

| Command/flag | Description |
| --- | ---|
| Initialisation | |
| `npm init` | Creates `package.json` |
| &emsp;`--yes` (`-y`) | With default values (from `config`)|
| `npm set init-<property> "<value>"` | Sets `config` (`init` default) property value (takes string) |
| `npm get init-<property>` | Return `config` property value (takes string) |
| `npm remove init-<property> "<value>"` | Remove `config` property value, `init` will use npm defaults |
| Package installation | |
| `npm install` (`i`)| Installs dependencies according to `package.json` |
| `npm install` (`i`) `<package>` | Installs `<package>` locally to node-modules folder, can take multiple packages |
| &emsp;`--save` (`-S`) | And adds dependency |
| &emsp;`--save-dev` (`-D`) | And adds devDependency |
| &emsp;`-g` | Installs `<package>` globally instead of to local node-modules (see `root`) |
| `npm uninstall` (`r`) `<package>` | Uninstalls `<package>` (alias: `remove` and `rm`) |
| &emsp;`--save` | And removes dependency |
| &emsp;`--save-dev` | And rempoves devDependency |
| &emsp;`-g` | Removes package from global (see `root`) |
| Utilities | |
| `npm root -g` | Returns root folder for global modules |
| `npm list` | Lists dependency tree |
| &emsp;`--depth <number>` | Only lists tree branches up to the specified depth (use 0 to list direct dependencies) |
| `npm run <script>` | Runs the command paired to `<script>` by `package.json` |