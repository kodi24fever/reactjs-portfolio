# Hello World with React and Cloud 9

Requirements: Make sure you are using node version 8
* `$ node -v` to check which node version you are using
* `$ nvm use 8` to switch to using version 8
* `$ nvm install 8` to install version 8 if necessary

##### Download the boilerplate using the BreatheCode CLI
```
$ npm i breathecode-cli -g
```

##### Download the boilerplate using the BreatheCode CLI
```
$ bc start:react-project -r
```
##### and install the npm package:
```
$ npm install
```

## Start coding! 

Start the webpack server with live reload:
- `$ npm run c9` for Cloud 9 Users.
- `$ npm run dev-server` for windows, mac or linux.

You can update the `styles/index.scss` or `js/index.js` depending on your needs.
Add more files into your, `./src/js/components` or styles folder as you need them.

## Publish your website! 

This boilerplate is 100% compatible with the free github pages hosting.
To publish your website you need to `push your code to your github repository` and run the following command after:
```sh
$ npm run deploy
```

## Other features

- Automatic Code Formatting: Use of [Prettier](https://prettier.io/) for automatic code identation and formating.
- Error reporting: Use of [esling](https://eslint.org/) for better error reporting.
- Hot Deploy: Use of [Webpack Development Server](https://webpack.js.org/configuration/dev-server/) for hot deploy and live reload.
- One-click publish of the code to github pages.
- Babel 7 (really fast).