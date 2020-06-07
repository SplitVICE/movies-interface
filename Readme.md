[![N|Solid](https://dl.dropboxusercontent.com/s/4rkbkdirpmjdc81/viceReadmeMDImage.png?dl=0)](https://justvice.github.io)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
# Description
Movies interface is a tiny web server piece of software which will allow you to stream a videos stored in your computer on local network.
# Technical specs
Movies interface is written in PHP and has a Apache web server dependecy to work. You must install this software by your own by installing Apache2 software or XAMPP.
# Setup
To configure Movies Interface open the file "config.ini".
![alt text](https://dl.dropboxusercontent.com/s/yi01tmnnk7cmkjf/movies-interface-001.png?dl=0)
You will find the following code lines to edit:
```
[ENVIROMENT]
MOVIES_FOLDER = '../../routeToYourMoviesFolder' // Route to your videos folder.
INDEX_TITLE = 'Movies interface' // Title that will be shown at the main page.
BUTTON_TO_RELOAD_MOVIES_LIST_TEXT = 'Back to movies list.' // Button text to go back to videos list.
```
Videos folder must be reached by navigating from the project root path.
Example of MOVIES_FOLDER route:
```
MOVIES_FOLDER = '../../Documents/Movies/'
```
Have fun!