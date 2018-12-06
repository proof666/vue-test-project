# Vue-test-project

This is a test project - Single Page Application based on [Node.js](https://nodejs.org/en/) / [Express.js](https://expressjs.com) with [Vue](https://vuejs.org/) and [Redis](https://redis.io/).

The web application contains the sidebar area and the content area.
In the sidebar there are three buttons (links). Each of them translates to the appropriate route:
* `/#/addData` - shows in the content area a form with input, textarea and submit. After filling forms and click on submit data are saved in Redis DB, also in the log the corresponding dataAdded event with datetime are recorded.
* `/#/data` - shows a table with logs from Redis DB in the content area.
* `/#/logs` - shows a table with the entered data from Redis DB in the content area.

By default, the `/#/addData` page opens, where the user can enter
random data using the form.
As soon as the user opens the page, we write the data about this event in
Redis DB log.

You can test it in live [here](https://vueproject.z6.web.core.windows.net) or follow the steps below to run the project locally.

## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
To run the application locally you will need to install [nodejs](https://nodejs.org/en/) >= 8.1.0 with npm. Also, some npm scripts use [yarn](https://yarnpkg.com/en/) under the hood to run scripts in child directories. Use this [link](https://yarnpkg.com/en/docs/install) to install it too.

Application store data in [redisdb](https://redis.io/) so this is required.
See this post with installation steps for [Windows](https://redislabs.com/blog/redis-on-windows-10/) or this one for [MacOS](https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298).

### Installing

> !!! The project was developed on MacOS and normal operation on other platforms is not guaranteed. Feel free to ping me if you need any help with this project.

```javascript
git clone 'https://github.com/proof666/vue-test-project'
```

```javascript
cd vue-test-project
```

```javascript
npm install
```

Dont forgot `npm start-redis` for MacOS or `sudo service redis-server stop` for Windows and Linux.

Now you can run `npm run start-client` and `npm run start-server` in separate terminals for your comfort. After this step client will be available at http://localhost:8080 and server on http://localhost:8081.

All available scripts in root directory:
```javascript
"scripts": {
    "start-client": "yarn --cwd ./client/ run dev",
    "start-server": "yarn --cwd ./server/ run dev",
    "start-redis": "redis-server /usr/local/etc/redis.conf",
    "test-client": "yarn --cwd ./client/ run unit",
    "test-server": "yarn --cwd ./server/ run test",
    "e2e": "yarn --cwd ./client/ run e2e",
    "install": "cd client && npm i && cd ../server && npm i && cd .."
  }
```
### Running the tests

#### Client Testing
Use `npm run test-client` to run client unit tests with [Vue Test Util](https://vue-test-utils.vuejs.org) and [Jest](https://jestjs.io/).

#### Testing the server side
Use `npm run test-server` to run server api unit tests with [Jest](https://jestjs.io/) an [Supertest](https://github.com/visionmedia/supertest).

#### End-to-end testing
Use `npm run e2e` to run ent-to-end test with [Jest](https://jestjs.io/) and [Nightwatch.js](http://nightwatchjs.org/) that run against a Selenium/WebDriver server.

### License
This project is licensed under the MIT License - see the LICENSE.md file for details