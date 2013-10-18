# Grunt Boilerplate + Sassdown

> Grunt project boilerplate with `sassdown`, `grunt-clean` and `grunt-compass` included and ready to go.

Default task runs both `grunt clean` and `grunt compass`, compiling any SASS in compressed mode and cleaning up cache folders after itself, before running `grunt sassdown` to build a styleguide from your SASS comments.

Type `npm install` in the root directory. Then type `grunt` to get started.

## What is Sassdown?

[Sassdown](https://bitbucket.org/jesperhills/sassdown) is a Grunt plugin that automatically generates a living styleguide from your SASS directory. It uses Markdown and Handlebars.

# Getting started with Grunt #

See the [Getting Started](http://gruntjs.com/getting-started "Getting started") instructions on gruntjs.com.

Grunt is dependent on [Node.js](http://nodejs.org/ "Node.js") and uses the [Node Package Manager](https://npmjs.org/ "Node Package Manager") so download and install Node.js if you don't already have it.

Checkout the Bitbucket repo, open a Command Line window and navigate to the project root folder. You can now install all the required plugins for this project by running `npm install`. This reads all the package dependencies in the package.json file and installs them all. You should now have a node_modules folder containing all the Grunt plugin packages required.

## The Gruntfile ##

The `Gruntfile.js` is a valid JavaScript file that lives in the root folder of your project, next to the package.json file, and should be committed to Git along with your project source. 

The Gruntfile comprises the following sections:

- The "wrapper" function
- Project and task configuration (the largest section of the file)
- Loading grunt plugins and tasks
- Defining default and custom tasks

See each plugin's NPM page for configuration options and usage examples.

*The package.json file should be committed to Git along with the project source.*