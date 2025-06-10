# basic-node-angular-fullstack
A basic program to have an express-server running with an empty angular-project for the frontend.
The server listens on the port specified by the `PORT` environment variable and falls back to `8080` if it is not set.


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

## Folder structure

- `server/` – Express route files and supporting utilities.
- `public/` – Static assets and the AngularJS frontend code.
- `stylus/` – Stylus sources compiled to CSS by Grunt.
- `views/` – Pug templates used for server-side rendering.
- `test/` – Unit tests for server components.

## Security Audit
After running `npm audit fix --force`, one high severity vulnerability remains. It is linked to the deprecated `angular` package (AngularJS). Upgrading beyond v1.x is required to fully resolve it.
