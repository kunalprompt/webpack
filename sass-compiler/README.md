### Purpose:

To create a small utility to convert scss to css.

### Resources:

1. Webpack

	https://webpack.github.io/

2. SASS Loader

	https://github.com/webpack-contrib/sass-loader

3. Cleaning the build directory on each build

	https://github.com/johnagan/clean-webpack-plugin

### Use:

To use this application, just run `npm run bundle` after `npm install`.
The `npm run bundle` command is defined in `package.json`.

All the source code can be put into different files in `source` directory which
will be compiled into `/dest/bundled.css` directory. The `init.scss` is the entry
to the source code.
