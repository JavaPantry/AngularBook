# Notes on Angular2 development with typescript book

[project GitHub](https://github.com/Farata/angular2typescript)


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

### Running Sample Applications
The code that comes with each chapter has several sample applications.
To run a particular application you’ll need to make a one-line change in
the configuration file of SystemJS to specify the name of the main script
that you want to run. To run this application using the code that comes
with the book, make sure that the main script points at the file
main-param.ts in systemjs.config.js, for example:

    packages: {
        'app': {
            defaultExtension: 'ts',
            "main": "main_lazy.ts"
            //"main": "main_aux.ts"
            //"main": "main_child_route.ts"
            //"main": "main_param.ts"
            //main: 'main.ts'
        },
    }



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
- before anything we need to download packages mentioned in _package.json_ `npm install`
- use `npm start` in auction to start project in `live-server`
- `npm  start` will look in _config.js_ which module to use as main
- to start project from within __WebStorm IDE__ edit config.js

    `baseURL: "/auction/",//to start in webStorm need to include app name in base url
    //baseURL: "/",// to start with 'npm start' in live-server base url just root`

- At the time of writing, the Angular team is developing Material Design components for Angular (see https://material.angular.io), 
which you may want to use instead of Twitter Bootstrap when it’s ready.

## 3.1 Routing Basics   
### 3.1.1 Location Strategies

Angular offers two location strategies for implementing client-side navigation:

- HashLocationStrategy - a hash sign (#) is added to the URL, and the URL fragment
after the hash uniquely identifies the route to a Web page fragment. This strategy works
with all browsers even with the old ones.
- PathLocationStrategy - a History API based strategy that is supported only in the
browsers that support HTML5. This is a default location strategy in Angular.

# 8. Interacting with Servers Using HTTP and Websockets

- errors to run server
- errors to run compiler `npm tsc`
- install compiler
 
### B.3.1 Installing and Using TypeScript Compiler

- npm install -g typescript
- tsc --version
- start server from cmd line `npm start`

`
    C:\WebStormWS\angular2typescript-master\chapter8\auction>tsc --v
    Version 1.8.10
    C:\WebStormWS\angular2typescript-master\chapter8\auction>tsc -w
    server/model.ts(41,19): error TS2339: Property 'find' does not exist on type '{ "id": number; "title": string; "price": number; "r
    ating": number; "description": string; "categ...'.
    server/auction.ts(1,26): error TS2307: Cannot find module 'express'.
    server/auction.ts(2,23): error TS2307: Cannot find module 'path'.
    server/auction.ts(3,36): error TS2307: Cannot find module 'http'.
    server/auction.ts(4,34): error TS2307: Cannot find module 'ws'.
    server/auction.ts(11,51): error TS2304: Cannot find name '__dirname'.
    server/auction.ts(12,51): error TS2304: Cannot find name '__dirname'.
    server/auction.ts(50,27): error TS2304: Cannot find name 'Map'.
    server/auction.ts(59,25): error TS2304: Cannot find name 'Map'.
    10:14:30 AM - Compilation complete. Watching for file changes.
    ^CTerminate batch job (Y/N)? y
    C:\WebStormWS\angular2typescript-master\chapter8\auction>npm start
    > auction_ch8@ start C:\WebStormWS\angular2typescript-master\chapter8\auction
    > node build/auction.js
    Listening on 127.0.0.1 8000
`


- goto http://localhost:8000/#/products/3