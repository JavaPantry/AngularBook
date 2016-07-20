# Notes on Angular2 development with typescript book

## Environment initialization 

- install nodejs v6.3.0  from https://nodejs.org/en/
- go to https://www.npmjs.com/  (click on documentation https://docs.npmjs.com/) and select `02 - Installing Node.js and updating npm`
- in terminal window run `npm -v` confirm output 3.10.3
- in terminal window run `npm install npm -g`
- `npm -v` again confirm output 3.10.5 (means npm had been updated)

To run any web application, you’ll need a basic HTTP server, such as http-server or
live-server. The latter performs live reloads of the web page as soon as you modify the
code and save the file of the running application.
To install http-server, use the following npm command:

    c:>npm install http-server -g
    project dir>http-server

If you prefer to see live reloads in the browser, install and start live-server using a similar routine

    c:>npm install live-server -g
    project dir>live-server

will start default browser




### 2.3.3 Getting started with SystemJS

#### A DEMO APPLICATION

#### CONFIGURING SYSTEMJS `System.config({...})` p 45
- baseURL
- defaultJSExtensions
- Map module
- packages
- path
- transpiler
- typescriptOptions

## 2.4 Selecting a package manager
- npm vs. jspm p 49

### 2.4.2 Starting an Angular project with npm p 50
- use `npm start` in auction to start project in `live-server`
- to strt project from within webstorm edit config.js

    `baseURL: "/auction/",//to start in webStorm need to include app name in base url
    //baseURL: "/",// to start with 'npm start' in live-server base url just root`

    At the time of writing, the Angular team is developing Material
    Design components for Angular (see https://material.angular.io),
    which you may want to use instead of Twitter Bootstrap when it’s
    ready.
   
