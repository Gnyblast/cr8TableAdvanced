
# Cr8Table - Advanced Table Plugin
Simple ready to use powerful angularJS plug and play table.

Working Example without style
https://cr8tableadvanced.stackblitz.io/

## Configurations Explained
##### headers:
		the headers of the table. The number of elements and their order should be same with assocNames config.
#### assocNames:
		the key names of your JSON data. The number of elements and their order should be same with headers config.
#### isAngularAppExist
		true of false depending if your web page already using AngularJS.
#### angularAppName:
		if AngularJS exist the existing ng-app name else give a random name.
#### newAngularContollerName:
		Give a name to your new Controller (Shouldn't be same if you have one already.
#### data:
		the variable name of your JSON data. could be direct js variable or $scope variable. If $scope variable do not mention $scope prefix, mention the var name only.
#### isDataFromParentAngular:
		true if the data is being fetched by another parent angular.
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

 1. Download and `cr8table.js`.
 2. Define your `configurations` before calling the `Cr8TableBuilder` Class.
 3. Source the `cr8table.js` as a Module named `Cr8TableBuilder`.
 4. Initialize the `Cr8TableBuilder` with your `configurations` as parameter.
 5. Run the `Cr8TableBuilder run()` method to generate your table and store it into a `var`.
 6. `Append` it where ever you want it in your web page.
 7. Start the app by using `angularStart()` method.

### Without AngularJS Used WebApp

 1. Download latest AngularJS library and source it to your page's head tag.
 2. Define your `configurations` before calling the `Cr8TableBuilder` Class.
 3. Source the `cr8table.js` as a Module named `Cr8TableBuilder`..
 4. Initialize the `Cr8TableBuilder` with your `configurations` as parameter.
 5. Run the `Cr8TableBuilder run()` method to generate your table and store it into a `var`.
 6. `Append` it where ever you want it in your web page.
 7. Start the app by using `angularStart()` method.

 ## EXAMPLE
#### Head Tag

    <head>
	<script type="module">
		import { Cr8TableBuilder } from '/js/cr8table.js';
		var tableConfig =  {
		    headers:  ["ID",  "Username",  "Name",  "Phone",  "Email",  "Active",  "Accountant",  "Admin",  "Date"],
		    assocNames:["id",  "username",  "name",  "phone",  "email",  "isactive",  "isaccountant",  "isadmin",  "date"],
		    isAngularAppExist:  false,
		    angularAppName:  "cr8App",
		    newAngularContollerName:  "cr8Control",
		    data:  "myData",
		    isDataFromParentAngular:false,
		    searchModule:  true,
		    advancedSearch:  true,
		    pageLimiter:  true,
		    pageLimitOptions:  [2,5,10,20,50,100],
		    pageLimitDefault:  2,
		    classes:  {
			    tableClasses:  "my-table center-table",
			    theadClasses:  "my-thead center-thead",
			    theadTrClasses:  "my-thead-tr text-center",
			    theadThClasses:  "my-th center-text",
			    theadTdClasses:  "my-td-th same-width",
			    searchInputClasses:  "padding-class text-bold",
			    searchComboBoxClasses:  "my-select text-bold",
			    pageLimitClasses:  "my-select text-bold",
			    tbodyClasses:  "my-tbody center-tbody",
			    tbodyTrClasses:  "my-tr center-text",
			    tbodyTdClasses:  "bold-text center-text",
			    pageNumbersClasses:  "my-page-numbers",
			    paginateArrowClasses:  "paginate-class",
			    activePageNumberClass:"active-page-num"
		    }
		}

		var tableBuilder =  new  Cr8TableBuilder(tableConfig);
		var table = tableBuilder.run();
		document.getElementById('app').appendChild(table);
		tableBuilder.angularStart();
	</script>
	<script src='https://rawgit.com/angular/bower-angular/master/angular.min.js'></script>
    </head>
