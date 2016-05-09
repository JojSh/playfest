Playfest


To set up:
1. fork the repo
2. npm install
3. (if you don't already have these packages installed globally)
  npm install -g .. blah blah..
4. cd frontend
5. npm install && bower install (required for Ionic dependencies)

To run tests:
1. mocha test/backend
2. karma start test/karma.conf.js
protractor:
1. webdriver-manager update
2. webdriver-manager start
3. (in a different console tab) node backend/server.js
4. (in a different console tab)
  cd frontend
  ionic serve
  protractor test/protractor.conf.js

To view simulator:
1. cd frontend
$ ionic platform add ios
$ ionic build ios
$ ionic emulate ios

To run backend:
1. export to $CLIENT_SECRET the key from spotify
2. run $ node server/server.js
3. host will be running on $PORT or 5000 (default)
