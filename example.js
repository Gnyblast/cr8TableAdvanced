var tableConfig =  {
    headers:  ["ID",  "Username",  "Name",  "Phone",  "Email",  "Active",  "Accountant",  "Admin",  "Date"],
    assocNames:["id",  "username",  "name",  "phone",  "email",  "isactive",  "isaccountant",  "isadmin",  "date"],
    isAngularAppExist:  false,
    angularAppName:  "cr8App",
    newAngularContollerName:  "cr8Control",
    data:  "myData",
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
