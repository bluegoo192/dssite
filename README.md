# dssite

(This readme is for contributors right now)

## Getting Started

You'll need to install *node*, *npm*, and *git*(I strongly recommend using the command line, not a GUI client).  And, of course, a good text editor.  For modern computers, I recommend Atom or Visual Studio Code(especially good on Windows); if those don't run well, use Sublime.

Once those are installed, simply clone the repo, open it up, then cd into the folder in terminal.  Next, you'll need to run some npm commands(you might have to use sudo for these):
* `npm install`: installs all dependencies
* `npm install -g stylus`: installs the stylus compiler globally

### Running the project:
* `npm start`: Launches the server.  Check it out at localhost:3000
* `npm run-script watchcss`: Run this in a separate terminal(also in the project top-level directory) if you plan on doing CSS work.  This command watches for changes in the stylus files and automatically recompiles them to CSS

### Putting in work
: Do not edit CSS files directly, only the .styl files in /stylesrc.  Otherwise, your changes will be overwritten and lost next time Stylus compiles
Folder structure explanation(no need to touch anything outside these):
* routes: (backend) routing.  index.js is the file you want to change
* views: (frontend) the actual webpages
* public: (frontend) appropriately named folders for client-side javascript, images, and raw CSS(don't touch!)
: Do not put backend scripts in public/javascript.  If you're unsure if your script is backend or frontend, ask me
* database: (backend) coming soon
No need to touch anything else in 99% of cases.  See the gitcheetsheet file for workflow instructions

: Seeing your changes: in general, _frontend_ changes(anything in /public or /views) take effect immediately, so you can just reload the page to see them.  Backend changes(like /routes/index.js) require a server restart to take effect

## Tech Stack (open to suggestions)

Backend:
* NodeJS: scalable, asynchronous Javascript runtime
* ExpressJS: lightweight server framework
* MongoDB: NoSQL database

Frontend:
* Pug: templating language
* Stylus: CSS language with indented syntax
* VueJS: lightweight Javascript framework with components
