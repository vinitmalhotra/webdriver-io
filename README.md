# Install node
version  v12.13.1

# To setup node module 
- "npm install"

# To run the test case
-  $ ./node_modules/.bin/wdio wdio.conf.js

# To view  the reports
- ./node_modules/.bin/allure generate allure-results/ --clean  && node_modules/.bin/allure open

