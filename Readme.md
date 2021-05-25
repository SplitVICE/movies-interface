[![N|Solid](https://dl.dropboxusercontent.com/s/oy06v7r8d871cr8/splitvice-banner.png?dl=0)](http://split-vice.com)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
# Description
Movies Interface is a tiny software for web server which allows you to stream videos stored on your computer on the local network.
[Oficial website](http://split-vice.com/technology/web-software/movies-interface/)

![Movies Interface demo](https://dl.dropboxusercontent.com/s/gbdnxcu8zzwnf2s/movies-interface-demo.png?dl=0)
# Technical specs
Movies Interface is codded in PHP. Therefore an Apache2 instance must be installed to run the software.
# Web Server setup
## XAMPP
- Go to XAMPP oficial website and download XAMPP at <https://www.apachefriends.org/>
- Select at least Apache service to be installed.
- Go to the folder where XAMPP was installed and locate "htdocs" folder.
- Delete all contents inside this page and place Movies Interface files inside (not the folder called Movies Interface with the files. Copy the Movies Interface folder's files inside "htdocs").
- Open XAMPP and start Apache service by pressing the "Start" button.
- If everything was ok, you should now see Movies Interface's user interface by typing "localhost" on your web browser.
## Docker setup
This option is for experimented Docker users.

[Docker official website](https://www.docker.com/)

Run this command to create a new php:7.2-apache container that runs Movies Interface:
```
docker run -d -p 80:80 --name Movies-Interface -v "<Path to Movies Interface Folder>:/var/www/html" php:7.2-apache
```
Working command line example:
```
docker run -d -p 80:80 --name Movies-Interface -v "E:\My Documents\movies-interface:/var/www/html" php:7.2-apache
```
# Movies Interface setup
To configure Movies Interface open the file "config.ini" file.

![alt text](https://dl.dropboxusercontent.com/s/yi01tmnnk7cmkjf/movies-interface-001.png?dl=0)

You will find the following code lines that you can edit:
```
[ENVIROMENT]
MOVIES_FOLDER = './movies' // Route to videos folder.
INDEX_TITLE = 'Movies interface' // Title that will be shown at the main page.
BUTTON_TO_RELOAD_MOVIES_LIST_TEXT = 'Back to movies list.' // Clickable label to go back to videos list.
```
If you want to set a different location for the movies folder, it must be reached by navigating from the project root path.
Example of MOVIES_FOLDER route:
```
MOVIES_FOLDER = '../../Documents/Movies/'
```
# Adding movies to Movies Interface
To add more vide to the software just drag them to the folder indicated in the ```config.ini``` file.

By default, this folder is the folder called ```movies``` inside Movies Interface folder. You will find a demo video called ```Demo.mp4``` for testing purposes.

Have fun!