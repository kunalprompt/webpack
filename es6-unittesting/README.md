# Reading:


The major change here in this small project wrt https://github.com/kunalprompt/webpack/tree/master/es6Transpiler is just TDD/BDD integration which is done with leading Javascript Framework **Mocha**.


The importanct things which matter here are as follows:


1. .babelrc file


The usage of Babel is very well defined in https://kleopetrov.me/2016/03/18/everything-about-babel/. Thanks to writer to such an awesome description.


The configuration of babel is very simple in .babelrc file.


For babel/TDD to work, we need some Node Modules to be installed.


`npm install --save-dev babel-register babel-preset-env mocha`


2. Unit Tests


Now https://mochajs.org/ can be used for learning writing unit testing in Mocha.


Please note I have made some changes in source/index.js for making learning TDD simple.
