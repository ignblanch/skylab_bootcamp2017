# SKYLAB CODERS BOOTCAMP - SUMMER 2017

## WEEK 1

### SESSION 1
* working tools
* sublime text 3
    - [emmet cheatsheet](https://docs.emmet.io/cheat-sheet/)
* command-line
* [markdown reference] / [Markdown example]
* git
    * some basic git commands(init, add, status, commit -m "meaningful! message", remote add origin, push...)
    * git config --list
    * basic git workFlow:
        - git status > lets you see the state of your files at any given time
        - git pull > gets updates from remote git repo
        - git add filename.txt / git add --all > add files to staging area
        - git commit -m 'message' > add files to local repo
        - git push > pushes to remote repo
    * [git Cheatsheets](http://files.zeroturnaround.com/pdf/zt_git_cheat_sheet.pdf)

### SESSION 2
* JS basics
* JS challenges

### SESSION 3
* JS arrays
* JS arrays challenge
* [JS Objects](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/05-arrays-objects)

### SESSION 4
* JS Objects review and practice. Constructors:
    - Example of Prototyping in constructor:
```javascript
// clean prototyping

function Animal(type, name) {
    this.setType(type);
    this.setName(name);
}
Animal.prototype.setType = function(type) {
    this._type = type;
};
Animal.prototype.getType = function() {
    return this._type;
};
Animal.prototype.setName = function(name) {
    this._name = name;
};
Animal.prototype.getName = function() {
    return this._name;
};
Animal.prototype.heal = function() {
    console.log('healing...');
};
```

    - Prototyping and inheritance:
      
    ```javascript
    // prototyping inheritance

    function Animal(species, name) {
        this.setSpecies(species);
        this.setName(name);
    }
    Animal.prototype.setSpecies = function(species) {
        this._species = species;
    };
    Animal.prototype.getSpecies = function() {
        return this._species;
    };
    Animal.prototype.setName = function(name) {
        this._name = name;
    };
    Animal.prototype.getName = function() {
        return this._name;
    };
    Animal.prototype.heal = function() {
        console.log('healing...');
    };
    Animal.prototype.eat = function () {
        console.log('eating...');
    };
    Animal.prototype.sleep = function() {
        console.log('Zzzz');
    };


    function Tiger(name, speed) {
        Animal.call(this, 'tiger', name);
        this.setSpeed(speed);
    }

    Tiger.prototype = new Animal();
    Tiger.prototype.setSpeed = function(speed) {
        this._speed = speed;
    };
    Tiger.prototype.getSpeed = function() {
        return this._speed;
    };
    ```

* [REGEX](https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/08-regular-expressions)
    - [Examples page](https://lornajane.net/posts/2011/simple-regular-expressions-by-example)
    - To test regex: 
        - [Regex 101](https://regex101.com)
        - [Regexr](http://regexr.com)
* Hoisting
* JS challenges(extra)
* Polyfills - Implement a functionality that is not supported in a previous version or API. 
    - For example we can provide a randomizer to the Array object or to arguments: 
```javascript
// polyfills

Array.prototype.random = function random() {
    return this[Math.floor(Math.random() * this.length)];
}

function randomArg() {
     return Array.prototype.random.call(arguments);
}
```
 
* Review of closures. Example:
```javascript
function SafeBox(thing) {
    var secret = thing;
    return function(password) {
        if (password === '1234') {
            return secret;
        }
        return 'wrong pwd';
    } 
}
// var box = SafeBox('my dirtiest secret');
// box('abcd') // wrong pwd
// box('1234') // 'my dirtiest secret'
```

### SESSION 5
* Unit Testing / TDD
* Behaviour driven developement: We focus on behavior and not implementation
* Jasmine
* KATAS with tests

<!--references -->
[markdown]: https://blog.ghost.org/markdown/
[Markdown example]: https://github.com/tonimg/Course
