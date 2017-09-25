# SASS in React

## What is SASS?

SASS is a language that compiles down into CSS. The problem that we have is that the web browser does not understand SASS files as it throws many syntax errors. It looks very similar to CSS but it lets you do a few things that makes writing CSS much easier; thinks like nesting and variables.

There are two ways to write SASS, SCSS and Sass. The only difference is that Sass does not use brackets and relies on you tabbing your code perfectly instead of using brackets to keep things organized. For the sake of this example we will be using SCSS, as it is easier to pick up.

## Installing SASS

Run the command below in the root of your react-app.

`npm install sass-loader node-sass`

This will install all the needed loaders to get SASS working in your project. A loader is process or task that will run when webpack starts that can do many things to your code files. In this example it will convert all your SCSS files into CSS files. In our version we will be using our loader to merge all our CSS files into one.

## Configuring the Loaders

We need to make a change to 