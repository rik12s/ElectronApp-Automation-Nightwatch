ElectronApp-Automation-Nightwatch
==================================

1. Install Node.js

2. Download/clone this repository and `cd` into it

3. Install all the dependencies    
 ```bash
 npm install
 ```

 This is the reference code, how we can automate Electron App using nightwatch framework.
 
 Go to root directory and write command:-
 node nightwatch.js
 
 It will automatically run your js file which is placed under test directory of the project.
 Also before execution you should have electron app and update nightwatch.json to add the path of your exe.
 
 There are some folders which are empty now, in which we will add more js files as per need.
 
 Inside test/sample.js, you can update it by adding new selectors as per your exe and it will run.
