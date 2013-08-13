ajsgold
=======

AngularJS + Foundation Zurb via Yeoman, Grunt, and Bower

## About


## Installation
After downloading ajsgold, you need to make sure you have the appropriate Ruby gems. To do this, we use bundler.

```shell
$ sudo gem install bundler
$ bundle
```

Next you will install Grunt (preferred method). To install to install Grunt you will first need [Node](http://nodejs.org/download/) installed. Then:

```shell
$ sudo npm install
```

This will download all of the appropriate javascript packages needing to create the server. Once this is complete you can run "grunt server" and Protobots will spin up a grunt server and open up the start page for you.


Finally you'll need to have bower get all your dependancies.

```shell
$ bower update
```

## Running
Once everything is built and loaded you will use grunt to run the site.

```shell
$ grunt server
```
