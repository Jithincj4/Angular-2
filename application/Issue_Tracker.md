Q1:  'Promise' only refers to a type, but is being used as a value here.
Ans: I also found another solution using NPM modules, the following seems to work.

npm i -D @types/core-js
npm i -D core-js
This works fine for TS code that is compiled to ES5 or earlier. As soon as you compile to ES6 or newer, you will see build errors like below about duplicate types.

I really think the TS compiler should be smart enough to figure out what "basic" types to include based off the field target from the TS configuration files, tsconfig.json

{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es6",
  }
}

Q2:directives does not exist in type component
Ans: add the component in declarations: [] inside module.ts

