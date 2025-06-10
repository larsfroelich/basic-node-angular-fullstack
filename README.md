# Basic node.js + angular.js_v1.6 Fullstack Template
A basic template for an express-server running with an empty angular-project for the frontend.
The server listens on the port specified by the `PORT` environment variable and falls back to `8080` if it is not set.

> ⚠️ **Warning**: This project is deprecated and no longer maintained. It is recommended to use more modern frameworks and libraries for new projects.

## Requirements
Node.js 20 or newer is recommended. An `.nvmrc` file is included for convenience.

## Installation
Install all dependencies using `npm`:

```bash
npm install
```

## Building assets
`grunt` copies vendor libraries into `public/libs` and compiles the Stylus files located in the `stylus/` directory into `public/css/app.css`:
```bash
grunt
```

## Starting the server
Run the server with the provided start script:
```bash
npm start
```

## Running tests
Run the Node.js test runner with:
```bash
npm test
```

To check code style using ESLint:
```bash
npm run lint
```

## Folder structure
- `server/` – Express route files and supporting utilities.
- `public/` – Static assets and the AngularJS frontend code.
- `stylus/` – Stylus sources compiled to CSS by Grunt.
- `views/` – Pug templates used for server-side rendering.
- `test/` – Unit tests for server components.

## Security Audit
After running `npm audit fix --force`, one high severity vulnerability remains. It is linked to the deprecated `angular` package (AngularJS). Upgrading beyond v1.x is required to fully resolve it.
