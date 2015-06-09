# Angular test service for AIPA Summer Trainees

This is an exercise project for AIPA summer trainees. It's basically an instruction set on installing and running a Nodejs + Angular + MongoDB stack on your Windows (ewwww) machine so you can start playing with Angular.

## Deployment instructions

### Node.js

+ Go to [nodejs.org](https://nodejs.org) and get the installer
+ on commandline run `npm install nodemon` (we use nodemon to hotload our server on change)
+ on the project root, run `npm install` . This gets all project dependencies from package.json and installs them under node_modules

### MongoDB

* Go to [Install mongodb for Windows](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/)
* Follow the instructions
* You don't need to care about the unattended installation section
* I installed it under my userspace (eg. /Users/johannes.elmnainen/) so that I don't need to care about admin priviledges
* I also created the data file under my userspace

## Execution instructions

### Start mongodb:

`path/to/mongodb/bin/mongod --dbpath path/to/mongodb/data`

NB: I used git bash for these because I prefer it to Windows cmd

Take a note on the port. The DB port is hardcoded into the Node server, so if you get server connection errors just change the mongodb driver port in server.js

### Start hotloading server:

`nodemon server.js`
