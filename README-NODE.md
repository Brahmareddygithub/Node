This project is created by using [Node.js](https://nodejs.org/) web app.

## Getting Started
To get you started you can simply clone the repository:

```
git clone https://github.com/nybbleapps/Node
```
and install the dependencies
```
npm install
```

### Prerequisites
You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

A number of node.js tools is necessary to initialize and test the project. You must have node.js and its package manager (npm) installed. You can get them from  [http://nodejs.org/](http://nodejs.org/). The tools/modules used in this project are listed in package.json and include express, mongodb and mongoose.

#### MongoDB
The project uses MongoDB as a database. [Click Here](https://cloud.mongodb.com/v2/637ca722d5e6312ac424febc#metrics/replicaSet/637ca79edbd85959aed1b6c8/explorer/projectdemo/users/find) to setup mongodb cluster in cloud

### To Configure MongoDB In Our Application
First we need to create mongodb cluster in cloud and copy the mongodb connection url and go to `/config` file and replace `url` param with mongo connection url add `username` and `password`.

### Run the Application

The project is preconfigured with express js. The simplest way to start this server is:

    node app

### Project Information

The project have mainly three services and listed below

##### [Signup service](http://localhost:3030/signup) - To used create a user in database.
##### [Login service](http://localhost:3030/login) - To use verify the user in database and login.
##### [Data sevice](http://localhost:3030/data) - To use send the user data.


