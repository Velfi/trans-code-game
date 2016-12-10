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

# Proposal 

## Purpose
* On top of a puzzle game, create an environment which allows for free experimentation of appearance, and normalizes it changing on a regular basis in a variety of situations.  This is done by presenting regular opportunities to recreate the appearance of thier avatar at every level, within a range of scenarios.  

## Mechanics
* Bejeweled game clone
* Match clothing 
* Multiple levels
* Avatar customization at each level

## User Stories
* Those who may be questionning
* 
