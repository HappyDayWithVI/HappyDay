# HappyDay

Getting Started

Installing NodeJS

Step by step tutorial

First, you need to install php.

sudo apt-get install php

sudo apt-get install update
Be sure to have, mbstring and dom extension install.

Then install composer as told here

You now have to install all dependencies.

cd HappyDay && composer install
Final step, running on yout local env.

npm install

npm start or modify port => npm start -- --port=XXXX (ex : npm start -- --port=8080)

php -S localhost:8080 -t public
And OK LET'S GO !
