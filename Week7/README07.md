# SKYLAB CODERS BOOTCAMP - SUMMER 2017

#### [SLIDES FOR THE COURSE](https://skylabcoders.github.io/bootcamp-julio2017/)

## WEEK 7

### SESSION 1
* Stateful apps - the app keeps record of data. In backend data is persisted somewhere. In front end state represents more of a problem. Thus libraries like redux help us manage the state of our applications.
* [MongoDB](https://skylabcoders.github.io/bootcamp-julio2017/?full#mongo)
    - It is a NoSQL database. [ref](https://skylabcoders.github.io/bootcamp-julio2017/?full#247) 
        + Relational - integrity vs non relational - speed, scaling, availability
    - Collections are similar to arrays of objects called documents.
    - Similar to json format: bson
        + Documents are like objects. A group of documents form a collection. A group of collections form a DB.
    - To start mongodb we must exectute mongod --dpath ~/data/db this starts the daemon
    - To start the mongo shell with the daemon running we execute the command mongo
        + basic shell commands: 
            - show dbs
            - use db
            - show collections
            - db.collection.find
            - db.collection.insert
            - db.collection.remove
            - db.collection.drop
    - Exercise [slide 267](https://github.com/juanmaguitar/node-exercises/tree/master/03-mongo-exercises)
