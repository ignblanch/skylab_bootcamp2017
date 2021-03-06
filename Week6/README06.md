# SKYLAB CODERS BOOTCAMP - SUMMER 2017

#### [SLIDES FOR THE COURSE](https://skylabcoders.github.io/bootcamp-julio2017/)

## WEEK 6

### SESSION 1
* [EXPRESS](https://skylabcoders.github.io/bootcamp-julio2017/?full#express)
    - an npm module to build backend servers: web servers: (html, css, js...) 
    - RESTFUL api(json) - GET, POST, DELETE, PUT
    - npm nodemon - we use this module to watch express files for changes. It restarts the server every time we save with changes while developing.
    - Serving static docs: 
        + ```app.use('/route', express.static('public'))```
    - Routing:
        ```javascript
        app.get('/', function (req, res) {
                logic for get
            res.send('GET: Hello World!')
            })
        ```
        + We can capture values passed from the uri with req.params
        + Routehandler functions: We can concatenate several functions
        ```javascript
        app.get('/example/b', function (req, res, next) {
          console.log('the response will be sent by the next function ...')
          next()
        }, function (req, res) {
                res.send('Hello from B!')
        })
        ```
    - Middlewares - functions that have access to request, response, next and we can execute logic within the process from the request to the response.
        + REQ --------> MIDDLEWARE... ------> MIDDLEWARE...-------> RESPONSE
    - [Template engines](http://expressjs.com/en/guide/using-template-engines.html) - npm pug (former jade)
        + we can use an online pug/jade to html conversor: http://html2jade.org/

### SESSION 2
* Mini project: Build a todo app using express - [TODOapp](./Todoapp_miniproject)

### SESSION 3
* [Express router](https://www.diigo.com/annotated/495f15003add267cdd7ea347dfa1ad64)
* [Sessions and cookies](https://skylabcoders.github.io/bootcamp-julio2017/?full#227) 
    - [npm express-session](https://github.com/expressjs/session)
    - To persist sessions in our server we must save data somewhere(DB). In our case we will store it in a file using [npm session-file-store](https://www.npmjs.com/package/session-file-store)

### SESSION 4
* [npm cookie session](https://www.npmjs.com/package/cookie-session)
* Login app mini-project using express and cookie sessions

### SESSION 5
* Mini-project: Todo app now adds login capabilities and task lists per user [TODOapp-login](./Todoapp_login-miniproject)
