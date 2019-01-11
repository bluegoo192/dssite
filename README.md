# dssite

(This readme is for contributors right now)

## Getting Started

You'll need to install *node*, *npm*, and *git*(I strongly recommend using the command line, not a GUI client).  And, of course, a good text editor.  For modern computers, I recommend Atom or Visual Studio Code(especially good on Windows); if those don't run well, use Sublime.

Once those are installed, simply clone the repo, open it up, then cd into the folder in terminal.  Next, you'll need to run some npm commands(you might have to use sudo for these):
* `npm install`: installs all dependencies
* `npm install -g stylus`: installs the stylus compiler globally

### Running the project:
* `npm start`: Launches the server.  Check it out at localhost:3000
* `npm run-script compile-css`: compile stylus into css files
* `npm run-script watchcss`: Run this in a separate terminal(also in the project top-level directory) if you plan on doing CSS work.  This command watches for changes in the stylus files and automatically recompiles them to CSS

### Putting in work
> Do not edit CSS files directly, only the .styl files in /stylesrc.  Otherwise, your changes will be overwritten and lost next time Stylus compiles
Folder structure explanation(no need to touch anything outside these):
* routes: (backend) routing.  index.js is the file you want to change
* views: (frontend) the actual webpages
* public: (frontend) appropriately named folders for client-side javascript, images, and raw CSS(don't touch!)
> Do not put backend scripts in public/javascript.  If you're unsure if your script is backend or frontend, ask me
* database: (backend) coming soon
No need to touch anything else in 99% of cases.  See the gitcheetsheet file for workflow instructions

> Seeing your changes: in general, _frontend_ changes(anything in /public or /views) take effect immediately, so you can just reload the page to see them.  Backend changes(like /routes/index.js) require a server restart to take effect

## Random Tips

### SVG files
We often want to apply a color filter to an SVG image.  This can be pretty annoying in plain HTML since you need to embed the svg directly, rather than linking it through an `img` tag.  Pug, however, makes it easy!  Just use `include <relative/path/to/image>` (no quotes around the path), and you can apply CSS styles to the `svg` and `path` elements without cluttering the markup.  See index.jade for examples

### Dealing with the nav bar
When creating a new view, you can put `extends layout` at the top to automatically get a nav bar and other goodies.  However, it comes with some annoying caveats I haven't gotten around to fixing.
* Restyling the nav bar: you can restyle the nav bar with CSS, even though it isn't directly visible in your view.jade file.  You can also _accidentally_ restyle the nav bar.  Watch out for this
* Vue file:  **You must have an associated vue app with `show.mobilenav` in its data section**.

## Tech Stack (open to suggestions)

Hosting:
* Site is hosted on AWS Lightsail
* Postgres database is on Heroku
* Redis cache is on Redis Labs

Backend:
* NodeJS: scalable, asynchronous Javascript runtime
* ExpressJS: lightweight server framework
* MongoDB: NoSQL database

Frontend:
* Pug: templating language
* Stylus: CSS language with indented syntax
* VueJS: lightweight Javascript framework with components

# Maintenance

There are lots of little things to keep in mind while maintaining the server.  I'll add them here as I come across them.

## HTTPS Certificate Setup and Renewal

I think that our certificate should auto-renew.  If it doesn't, ssh into the server and run `sudo certbot certonly` and follow the instructions.  The URLs are 'datascienceucsb.org' and 'www.datascienceucsb.org'.  When it asks for a directory, provide the relative path to 'dssite/public'.
