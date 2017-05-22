Development Setup

This section will deal with the setup required to write Angular 2 apps in TypeScript. In the process to do so, we will be building a simplest form of Angular 2 app and also have a look at a skeleton folder structure for Angular 2 apps.
In short this section will setup our base to eventually build better and larger apps with Angular 2.

Note: This article is written for Angular 2.0 beta. The Angular 2 repo is subjected to change, if you find any discrepancies please write to us about it and if possible suggest the fixes

Install Node
npm will be used as our package manager and our app will run on node. If you have node installed awesome; if not, then head over to the official node website and download the appropriate version.

Setup a Skeleton App
Now lets get a skeleton app structure from an app that I have already created. I will explain the contents later, for now follow along.
Clone the repository.

git clone https://github.com/rahil471/Angular2-quicksetup.git

Alternatively you can download and extract the code form here.

App structure
Once you have completed the above step successfully, you should be able to see the following project structure.

enter image description here

APP
Angular apps are built out of several linked or nested components, our app folder here contains a components directory, which will hold the apps different components.

Also See: Create a commenting Application using Angular 2
ASSETS
Assets is a directory which will contain non angular data required by our app, for example style-sheets.

PACKAGE.JSON
Package.json holds information that allows npm to identify the project dependencies and help install them with a single command.
Below is our package.json file, which is similar to the one provide by the Angular 2 team for the quick-start application. It contains a starter-set of dependencies required by Angular 2 project identified by the Angular 2 team.

package.json

{
  "name": "angular2-setup",
  "version": "1.0.0",
  "scripts": {
    "start": "concurrent \"npm run tsc:w\" \"npm run lite\" ",<br />
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "lite": "lite-server",
    "typings": "typings",
    "postinstall": "typings install"
  },
  "license": "ISC",
  "dependencies": {
    "angular2": "2.0.0-beta.7",
    "systemjs": "0.19.22",
    "es6-promise": "^3.0.2",
    "es6-shim": "^0.33.3",
    "reflect-metadata": "0.1.2",
    "rxjs": "5.0.0-beta.2",
    "zone.js": "0.5.15"
  },
  "devDependencies": {
    "concurrently": "^2.0.0",
    "lite-server": "^2.1.0",
    "typescript": "^1.7.5",
    "typings":"^0.6.8"
  }
}
While running the application I encountered a type-error in the chrome browser, to fix this I upgraded the es6-shim version from 0.33.3 (which is recommended by Angular 2 team) to 0.34.4. Details can be found here.
The scripts defined in the file run few commands for example npm start will run the typescript compiler (tsc) and then run lite-server. Commands defined in post install run after npm has finished installing other dependencies.

tsconfig.json
tsconfig.json

{
  "compilerOptions": {
    "target": "es5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  },
  "exclude": [
    "node_modules",
    "typings/main",
    "typings/main.d.ts"
  ]
}
tsconfig.json is the configuration file for TypeScript projects. It holds configurations such as compiler options, files to be included excluded, etc. The compilerOptions instructs TypeScript compiler, how to compile typescript files.
The exclude block instructs typescript compiler to exclude folders and files.

TYPINGS.JSON
typings.json

{
  "ambientDependencies": {
    "es6-shim": "github:DefinitelyTyped/DefinitelyTyped/es6-shim/es6-shim.d.ts#6697d6f7dadbf5773cb40ecda35a76027e0783b2"
  }
}
Some libraries/ framework extend JavaScript environment with features that type script compiler does not support. To make the typescript compiler understand these enhancements we add respective d.ts files in typings.json

First Component
/app/components/welcome/welcome.component.ts

import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    templateUrl: '../app/components/welcome/welcome.template.html'
})
export class WelcomeComponent {
    constructor() {
        var self = this;
        self.displayName = '';
    }
    setDisplayName(value){
        var self = this;
        self.displayName = value;
    }
}
This is the complete welcome.ts file. Parts of code are explained below.

import {Component} (welcome.component.ts)

import {Component} from 'angular2/core';
To create a component we will need the component class which is shipped with ‘angular2/core’ module. import statement tells TypeScript to import some exported entity from a module.

Decorator (welcome.component.ts)

@Component({
    selector: 'my-app',
    templateUrl: '../app/components/welcome/welcome.template.html'
})
The @component decorator/metadata describes a component and also tells Angular the the following class has to be treated as an Angular Component. The selector property describes the element name for our Component. So where ever we will use the element <my-app></my-app>, Angular will render our component.

Class (welcome.component.ts)

export class WelcomeComponent {
    constructor() {
        var self = this;
        self.displayName = '';
    }
    setDisplayName(value){
        var self = this;
        self.displayName = value;
    }
}
A class contains logic that would display, modify properties to be displayed to the user in the UI. We are exporting the class, so that we can import it some where else.
Our WelcomeComponent contains a constructor() function and a setDisplayName() method. A constructor is defined with the constructor key word in TypeScript or in ES6.
In Angular 1 we would do using a controller what a component class does in Angular 2.

/app/components/welcome/welcome.template.html

<h1 class="displayHead" *ngIf="!!displayName">Welcome to the world of Angular 2</h1>

<h2 class="userName" [hidden]="!displayName">{{displayName}}</h2>

<div *ngIf="!displayName">
    <label>Enter Your Name</label>
    <input [(ngModel)]="name"/>
    <button (click)="setDisplayName(name)">Enter</button>
</div
We won’t be going into details on events and property bindings in this tutorial, but here is some explanation to above template.

[hidden]: Property binding
(click): Event Binding. We are invoking setDisplayName method on click event.
[(ngModel)]: This is how you do, two-way data-binding in Angular 2
index.html
index.html

<html>
  <head>
    <title>Angular 2 QuickSetup</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"><br />
    <link rel="stylesheet" type="text/css" href="assets/styles/style.css">
    <!-- 1. Load libraries -->
    <!-- IE required polyfills, in this exact order -->
    <script src="node_modules/es6-shim/es6-shim.min.js"></script>
    <script src="node_modules/systemjs/dist/system-polyfills.js"></script>
    <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <script src="node_modules/rxjs/bundles/Rx.js"></script>
    <script src="node_modules/angular2/bundles/angular2.dev.js"></script>
    <!-- 2. Configure SystemJS -->
    <script>
      System.config({
        packages: {
          app: {
            format: 'register',
            defaultExtension: 'js'
          }
        }
      });
      System.import('app/main')
            .then(null, console.error.bind(console));
    </script>
  </head>
  <!-- 3. Display the application -->
  <body>
    <my-app>Loading...</my-app>
  </body>
</html>
In index.html we are loading our required libraries and configuring systemJS.
Systemjs is our module loader. By defining packages in System.config we are setting systemjs setting for files loaded from ‘app/’ folder. We are setting the defaultExtension to js since we will be loading files transpiled into .jsfrom .ts. Systems.import('app/main') loads the main.ts file where we are bootstraping the application, we will have a look at main.ts below. Systemjs configurations may deffer depending on the project folder structure. You can lean more about Systemjs configurations here.

Finally we are loading our welcome component by placing the my-app selector. If you remember we named our component element as my-app

Bootstrapping app with main.ts
main.ts

import {bootstrap} from 'angular2/platform/browser'
import {WelcomeComponent} from './components/welcome/welcome.component'
bootstrap(WelcomeComponent);
Here we tell angular to load our WelcomeComponent i.e the root component.

Run the app
Before running the app we need to do one more thing that is left out. Install all the required npm packages. Fire up your terminal and navigate to the working directory and run the following command.

 npm install
This may take a while, during the installation you may see some warnings but that is fine.
Next, to run our first Angular 2 app execute the below command.

npm start
This would fire up the lite server and run our app in the browser.