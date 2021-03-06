var tableConfig = {
  headers: ["ID", "Username", "Name", "Phone", "Email", "Active", "Accountant", "Admin", "Date"],
  assocNames:["id", "username", "name", "phone", "email", "isactive", "isaccountant", "isadmin", "date"],
  isAngularAppExist: false,
  angularAppName: "cr8App",
  newAngularContollerName: "cr8Control",
  data: "myData",
  isDataFromParentAngular:false,
  searchModule: true,
  advancedSearch: true,
  pageLimiter: true,
  pageLimitOptions: [2,5,10,20,50,100],
  pageLimitDefault: 2,
  isThereActionButtons:true,
  nameOfActionButton:"Action",
  actionButtonElement:"<span onclick=\"alert('test')\">btn</span>",
  tableTitle: "Products",
  emptyArrayNotice: "No Data!",
  classes: {
    tableClasses: "my-table center-table",
    theadClasses: "my-thead center-thead",
    theadTrClasses: "my-thead-tr text-center",
    theadThClasses: "my-th center-text",
    theadTdClasses: "my-td-th same-width",
    searchInputClasses: "padding-class text-bold",
    searchComboBoxClasses: "my-select text-bold",
    pageLimitClasses: "my-select text-bold",
    tbodyClasses: "my-tbody center-tbody",
    tbodyTrClasses: "my-tr center-text",
    tbodyTdClasses: "bold-text center-text",
    noticeTdClasses: "bold-and-center",
    paginationContainerClasses: "pagination-container",
    pageNumbersClasses: "my-page-numbers",
    paginateArrowClasses: "paginate-class",
    activePageNumberClass:"active-page-num",
    tableRowDarkClass:"darkertr",
    tableRowLightClass:'lightertr'
  }
}
