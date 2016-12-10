# trans-code-game

# Run the app

# Project Structure

* `.elasticbeanstalk`: Core Elastic Beanstalk configuration

* `.ebextensions`: Optional Elastic Beanstalk configuration

* `node_modules`: Node modules

* `Public`: Content served by the express server
    * `static`
        * Static files
        * `images`
        * `js`
        * `style`
        * `index.html`: Client-side application entrypoint

* `app.js`: Server-side application entrypoint

* `package.json`: Nodejs configuration


# Development

## Application Server

The application uses the Nodejs express module to serve content. The logic is defined in `app.js`, and the overall entrypoint is given in the `scripts.start` entry in the `package.json` file.

## Static assets

### Entrypoint

Put application entrypoint logic inside `public/static/index.html`

### Javascript

Put Javascript inside the `pubic/static/js` directory

### Styling

Put stylesheets and sass inside the `public/static/style` directory

### Images

Put static image assets inside the `public/static/images` directory

