# SKYLAB CODERS BOOTCAMP - SUMMER 2017

### SLIDES FOR THE COURSE
[slides](https://skylabcoders.github.io/bootcamp-julio2017/)

## WEEK 5
* [NodeJS](https://skylabcoders.github.io/bootcamp-julio2017/?full#207)
  - In client global object is Window. In server we have a global object called Global
* NPM - Node package manager:
  - We manage modules with module.exports / require 
    + NPM install 'module' => installs module locally
    + NPM install 'module' -g => installs globally
    + npm init -y - creates empty package.json file ready
    + NPM install 'module' --save => keeps a record of all dependencies inside 'package.json' file inside our project
    + NPM install => installs all dependencies stored in package.json file
  - There are certain node modules that are native but we have to use require nontheless [reference](https://github.com/juanmaguitar/apuntes-nodejs/blob/master/modulos/modulos-node-required.md): http, url, path, fs...
  - Other native methods can be used without require : [process](https://github.com/juanmaguitar/apuntes-nodejs/blob/master/modulos/modulos-node-notRequired.md)
    + [Node Exercises](https://github.com/juanmaguitar/js-server-exercises/tree/master/node-exercises)
    - process.env - shows us the environment variables available in node as object Ex. process.env.$PATH is the node way to access $PATH. We can store environment variables in terminal. Ex. URL = 'www.skylabcoders.com'
    and then access it as process.env.URL
