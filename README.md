# Cr8Table - Advanced Table Plugin
Simple ready to use powerful angularJS plug and play table.

## Configurations Explained
##### headers:
		the headers of the table.
#### assocNames:
		the key names of your JSON data.
#### isAngularAppExist
		true of false depending if your web page already using AngularJS.
#### angularAppName:
		if AngularJS exist the existing ng-app name else give a random name.
#### newAngularContollerName:
		Give a name to your new Controller (Shouldn't be same if you have one already.
#### data:
		the variable name of your JSON data. could be direct js variable or $scope variable. if $scope variable mention it's full name like; ($scope.data)
#### searchModule:
		true or false depending if you want Search Module.
#### advancedSearch:
		true or false depending if you want Advance Search Module.
#### pageLimiter:
		true or false depending if you want to limit Number of the elements shown in the table.
#### pageLimitOptions:
		Pass your number of elements shown limit options as an array. 
#### pageLimitDefault:
		Default number of elements shown on opening.
#### classes:
		Define your classes for styling the table.

## Usage
### With AngularJS Used WebApp

 1. Download and source the `cr8table.js` file **before** you load angularJS if exist.
 2. Define your `configurations` before calling the `Cr8TableBuilder` Class.
 3. Initialize the `Cr8TableBuilder` with your `configurations` as parameter.
 4. Run the `Cr8TableBuilder run()` method to generate your table and store it into a `var`.
 5. `Append` it where ever you want it in your web page.
 6. Start the app by using `angularStart()` method.
