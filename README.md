# promisy-variables

<a href="http://twitter.com/share?text=Hey! I found this!&url=https://github.com/epranka/promisy-variables">
  <img src="https://img.shields.io/twitter/url/http/github.com/epranka/promisy-variables.svg?style=social"
       alt="tweet" />
</a>
<a href="https://twitter.com/intent/follow?screen_name=epranka">
<img src="https://img.shields.io/twitter/follow/epranka.svg?style=social&logo=twitter"
alt="follow on Twitter"></a>
<a href="https://www.npmjs.com/package/promisy-variables">
<img src="https://img.shields.io/npm/dt/promisy-variables.svg?style=flat" />
</a>
<a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/npm/dependency-version/promisy-variables/dev/typescript.svg" /></a>

Module lets to wait for expected variable value with promise

![example-of-promisy-variables](https://raw.githubusercontent.com/epranka/promisy-variables/master/resources/promisy-variables.gif)

## Install

```
npm install --save promisy-variables
```

or

```
yarn install promisy-variables
```

## Import module

```js
const {
	PromisyVariable,
	PromisyObject,
	PVar,
	PObj
} = require("promisy-variables");
```

or

```js
import { PromisyVariable, PromisyObject, PVar, PObj } from "promisy-variables";
```

## Short hands

**PVar** is same as **PromisyVariable**

**PObj** is same as **PromisyObject**

## Usage

```js
/* Promisy Object initialization */
const pobj = new PObj({
	foo: "bar",
	baz: "zoo"
});

/* Promisy Variable initialization */
const pvar = new PVar("bar");

/* Set and get variables in Promisy Object */
pobj.set("foo", "qux");
pobj.get("foo"); // qux

pboj.set("baz", "zot");
pobj.get("baz"); // zot

/* Set and get variable value in Promisy Variable */
pvar.set("zoo");
pvar.get(); // zoo

/* Wait for variable value in Promisy Object */
async () => {
	// expecting foo = bar
	await pobj.waitFor("foo", "bar");
	// expecting baz = zoo
	await pobj.waitFor("baz", "zoo");
	// this line reaches only if foo and bar will be set to expecting values
};

/* Wait for variable value in Promisy Variable */
async () => {
	// expecting that pvar equals to bar
	await pvar.waitFor("bar");
	// this line reaches only if pvar will bet set to bar
};
```

## Example

```js
const pvar = new PVar("foo");

const waitForVariable = async () => {
	console.log("pvar value is", pvar.get());
	await pvar.waitFor("bar");
	console.log("pvar value is", pvar.get());
};

waitForVariable();

setTimeout(() => {
	pvar.set("bar");
}, 2000);

/* CONSOLE OUTPUT */
// > pvar value is foo
// after 2s
// > pvar value is bar
```

## Author

Edvinas pranka

[@epranka](https://twitter.com/epranka)

https://www.kodmina.lt

# License

The MIT License (MIT)

Copyright (c) 2019 Edvinas Pranka

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
