[![N|Solid](https://dl.dropboxusercontent.com/s/4rkbkdirpmjdc81/viceReadmeMDImage.png?dl=0)](https://justvice.github.io)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)
# Description
Movies Interface is a tiny software for web servers which allow you to stream videos stored in your computer on the local network.
[Oficial website](http://just-vice.com/technology/web-software/movies-interface/)
# Technical specs
Movies Interface needs a web server host software to run. It has been developed as running on Apache2. Therefore Apache2 software should be used to ensure correct functionality.
# Setup
### Web Server setup
- Go to XAMPP oficial website and download XAMPP at <https://www.apachefriends.org/>
- Select at least Apache service to be installed.
- Go to the folder where XAMPP was installed and locate "htdocs" folder.
- Delete all contents inside this page and place Movies Interface files inside (not a folder called Movies Interface with the files. Copy the Movies Interface's files themselves inside "htdocs").
- Open XAMPP and start Apache service by pressing the "Start" button.
- If everything was ok, you should now see Movies Interface's user interface by typing "localhost" on your web browser.
### Movies Interface setup
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