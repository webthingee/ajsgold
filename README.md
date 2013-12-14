ajsgold
=======

AngularJS + Foundation Zurb via Yeoman, Grunt, and Bower

## About
I needed a simple quick way to spin up AngularJS with Foundation Zurb.  This is what I landed on…
___

## Prerequisites
After downloading ajsgold, you need to make sure you have the appropriate Ruby gems. To do this, we use bundler.

```shell
$ sudo gem install bundler
$ bundle
```

Next you will install Grunt (preferred method). To install to install Grunt you will first need [Node](http://nodejs.org/download/) installed.

Once you have what you need...
___

## Installation

```shell
$ npm install --save-dev
```

This will download all of the appropriate javascript packages needing to create the server. Once this is complete you can run "grunt server" and Protobots will spin up a grunt server and open up the start page for you.


```shell
$ bower update
```

This will use bower to update all your dependancies.
___


## Running
Once everything is built and loaded you will use grunt to run the site.

```shell
$ grunt server
```
