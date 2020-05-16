export class Cr8TableBuilder{

  constructor(config){
    this.config = config;
  }

  run(){
    var tableHeaders = this.config.headers;
    var isAngularAppExist = this.config.isAngularAppExist;

    var table = this.createTheTable(tableHeaders, isAngularAppExist);
    table = this.checkSearchModule(table);
    table = this.createPagintaion(table);

    return table;
  }

  createTheTable(tableHeaders, isAngularAppExist){
    var angularController = this.createAngularController(isAngularAppExist);

    var table = document.createElement('table');
    table.setAttribute("class", this.config.classes.tableClasses);

    var tableHead = document.createElement('thead');
    tableHead.setAttribute("class", this.config.classes.theadClasses);
    var tableHeadRow = this.createTr();
    tableHeadRow.setAttribute("class", this.config.classes.theadTrClasses);
    tableHeadRow = this.createHeaders(tableHeadRow, tableHeaders);
    tableHead.appendChild(tableHeadRow);

    var tableBody = document.createElement('tbody');
    tableBody.setAttribute("class", this.config.classes.tbodyClasses);
    var tableBodyRow = this.createTr();
    tableBodyRow.setAttribute("class", this.config.classes.tbodyTrClasses);
    tableBodyRow.setAttribute("ng-repeat","cr8 in cr8TableData | filter: cr8FilterFunc(cr8AdvanceFilter, cr8Filter) | orderBy: cr8Order | limitTo: cr8Limit : cr8Start")
    tableBodyRow = this.createBodyRows(tableBodyRow);
    tableBody.appendChild(tableBodyRow);

    table.appendChild(tableHead);
    table.appendChild(tableBody);

    angularController.appendChild(table);

    return angularController;

  }

  createAngularController(shouldCreateApp){
    var angularController = document.createElement('div');
    
    if(!shouldCreateApp){
      var configAppName = this.config.angularAppName;
      var appName = (configAppName != "" && configAppName != undefined) ? configAppName : "cr8AngularApp";
      angularController.setAttribute("ng-app", appName);
      angularController.setAttribute("ng-cloak", true);
    }
    var configControllerName = this.config.newAngularContollerName;
    var controllerName = (configControllerName != "" && configControllerName != undefined) ? configControllerName : "cr8Control";
    angularController.setAttribute("ng-controller",controllerName);

    return angularController;
  }

  createTr(){
    return document.createElement("tr");
  }

  createHeaders(tableHeadRow, tableHeaders){
    for(var x = 0; x < tableHeaders.length; x++){
      var th = document.createElement('th');
      th.textContent = tableHeaders[x];
      th.setAttribute("ng-click","cr8OrderChange('"+this.config.assocNames[x]+"')");
      th.setAttribute("class", this.config.classes.theadThClasses);
      tableHeadRow.appendChild(th);
    }

    return tableHeadRow;
  }

  createBodyRows(tableBodyRow){
    for(var x = 0; x < this.config.assocNames.length; x++){
      var td = document.createElement('td');
      td.setAttribute("class", this.config.classes.tbodyTdClasses);
      td.textContent = "{{cr8." + this.config.assocNames[x] + "}}";
      tableBodyRow.appendChild(td);
    }

    return tableBodyRow;
  }

  checkSearchModule(table){
    if(this.config.searchModule === true){
      var tableSearchRow = this.createTr();
      tableSearchRow = this.createSearchModule(tableSearchRow, this.config.advancedSearch);
      table.getElementsByTagName('thead')[0].prepend(tableSearchRow);
    }

    return table;
  }

  createSearchModule(tableSearchRow, isAdvanced){
    var tdCounter = 0;
    if(isAdvanced){

      var td = document.createElement('td');
      td.setAttribute("class", this.config.classes.theadTdClasses)
      tdCounter++;
      var select = document.createElement('select');
      select.setAttribute("ng-model", "cr8AdvanceFilterValue");
      select.setAttribute("ng-change", "cr8FilterKeyUpdate()");
      select.setAttribute("class", this.config.classes.searchComboBoxClasses);
      var option = document.createElement('option');
      option.setAttribute("value", "");
      option.textContent = "Tümü";
      select.appendChild(option);

      for(var x = 0; x < this.config.headers.length; x++){
        var option = document.createElement('option');
        option.setAttribute("value", this.config.assocNames[x]);
        option.textContent = this.config.headers[x];
        select.appendChild(option);
      }
      td.appendChild(select);
      tableSearchRow.appendChild(td);
    }

    var td = document.createElement('td');
    td.setAttribute("class", this.config.classes.theadTdClasses)
    tdCounter++
    var searchInput = document.createElement('input');
    searchInput.setAttribute("ng-model", "cr8Filter");
    searchInput.setAttribute("Placeholder", "Ara...");
    searchInput.setAttribute("class", this.config.classes.searchInputClasses);
    td.appendChild(searchInput);
    tableSearchRow.appendChild(td);

    tableSearchRow = this.createRemainingTds(tableSearchRow, tdCounter);
    tableSearchRow = (this.config.pageLimiter) ? this.createPageLimiter(tableSearchRow) : tableSearchRow;

    return tableSearchRow;
  }

  createRemainingTds(tableSearchRow, counter){
    while(counter < this.config.headers.length){
      var td = document.createElement('td');
      td.setAttribute("class", this.config.classes.theadTdClasses)
      tableSearchRow.appendChild(td);
      counter++;
    }

    return tableSearchRow;
  }

  createPageLimiter(tableSearchRow){
    var select = document.createElement('select');
    select.setAttribute("ng-model", "cr8Limit");
    select.setAttribute("ng-change", "detectNumOfPage()")
    select.setAttribute("class", this.config.classes.pageLimitClasses);
    var option = document.createElement('option');
      option.setAttribute("value", "");
      option.textContent = "Tümü";
      select.append(option);
    for(var x = 0; x < this.config.pageLimitOptions.length; x++){
      var option = document.createElement('option');
      option.setAttribute("value", this.config.pageLimitOptions[x]);
      option.textContent = this.config.pageLimitOptions[x];
      select.append(option);
    }

    var tds = tableSearchRow.getElementsByTagName('td');
    tds[tds.length-1].appendChild(select);
    
    return tableSearchRow;

  }

  createPagintaion(table){
    
    var container = document.createElement('div');

    var spanFirst = document.createElement('span');
    spanFirst.setAttribute('ng-click',"changePage('first')");
    spanFirst.setAttribute('ng-if',"numOfPage > 1 && currentPage > 1");
    spanFirst.setAttribute("class", this.config.classes.paginateArrowClasses+" cr8PageSpans");
    spanFirst.textContent = "<<"
    container.appendChild(spanFirst);

    var spanPrev = document.createElement('span');
    spanPrev.setAttribute('ng-click',"changePage('previous')");
    spanPrev.setAttribute('ng-if',"numOfPage >= 1 && currentPage > 0");
    spanPrev.setAttribute("class", this.config.classes.paginateArrowClasses+" cr8PageSpans");
    spanPrev.textContent = "<"
    container.appendChild(spanPrev);

    var span = document.createElement('span');
    span.setAttribute('ng-repeat',"x in [].constructor(numOfPage+1) track by $index");
    span.setAttribute('ng-if',"$index+1 >= currentPage-5 && $index < currentPage+9 && $index < (cr8Start+10)");
    span.setAttribute('ng-click',"changePage($index+1)");
    span.setAttribute("data-pagenum","{{$index+1}}");
    span.setAttribute("class", this.config.classes.pageNumbersClasses+" cr8PageSpans {{$index === 0 ? activeClass : '';}}");
    span.textContent = "{{$index+1}}"

    container.appendChild(span);

    var spannext = document.createElement('span');
    spannext.setAttribute('ng-click',"changePage('next')");
    spannext.setAttribute('ng-if',"numOfPage > 0 && currentPage < numOfPage");
    spannext.setAttribute("class", this.config.classes.paginateArrowClasses+" cr8PageSpans");
    spannext.textContent = ">"
    container.appendChild(spannext);

    var spanLast = document.createElement('span');
    spanLast.setAttribute('ng-click',"changePage('last')");
    spanLast.setAttribute('ng-if',"numOfPage > 1 && currentPage < numOfPage-1");
    spanLast.setAttribute("class", this.config.classes.paginateArrowClasses+" cr8PageSpans");
    spanLast.textContent = ">>"
    container.appendChild(spanLast);

    table.appendChild(container);
    
    return table;
  }

  angularStart(){
    var configs = this.config;
    if(configs.isAngularAppExist){
      var cr8AngularApp = angular.module(this.config.angularAppName)
    } else {
      var cr8AngularApp = angular.module(this.config.angularAppName, [])
    }
    cr8AngularApp.controller(this.config.newAngularContollerName, function($scope, $rootScope, $timeout){ 
      
      $scope.activeClass = configs.classes.activePageNumberClass
      $scope.cr8AdvanceFilter = "";
      $scope.cr8Start = 0;
      $scope.cr8Limit = (configs.pageLimiter) ? String(configs.pageLimitDefault) : '';
      $scope.currentPage = 0;

      var evalData = (configs.isDataFromParentAngular) ? '$scope.$parent.'+configs.data : configs.data;

      if(configs.isAngularAppExist){
        $scope.$watch(configs.data, function (ctx) {
          $scope.cr8TableData = Object.keys(eval(evalData)).map(function(key) {
            return eval(evalData)[key];
          });
          $scope.detectNumOfPage();
        }, true);
      }

      $scope.cr8TableData = Object.keys(eval(evalData)).map(function(key) {
        return eval(evalData)[key];
      });
      
      $scope.detectNumOfPage = function(){
        var value = $scope.cr8Limit;
        if( value != undefined && value != ""){
          $scope.numOfPage = Math.floor(($scope.cr8TableData.length-1)/parseInt($scope.cr8Limit));
        } else {
          $scope.numOfPage = 0;
        }
      }
      $scope.detectNumOfPage();

      $scope.cr8FilterKeyUpdate = function(){
        if($scope.cr8AdvanceFilterValue != ""){
          $scope.cr8AdvanceFilter = $scope.cr8AdvanceFilterValue;
        } else {
          $scope.cr8AdvanceFilter = "";
        }
      }

      $scope.cr8FilterFunc = function(key, value){
        var filter = {}
        if($scope.cr8AdvanceFilter != ""){
          filter[key] = value;
        } else {
          filter = value;
        }
        return filter;
      }

      $scope.cr8OrderChange = function(value){
        if($scope.cr8Order === value){
          $scope.cr8Order =  "-"+value;
        } else {
          $scope.cr8Order = value;
        }
      }


      $scope.changePage = function(value){
        switch(value){
          case "next":
            if($scope.currentPage*$scope.cr8Limit < $scope.cr8TableData.length){
              $scope.currentPage++;
              $scope.cr8Start = $scope.currentPage*$scope.cr8Limit;
              $scope.activatePageNum($scope.currentPage+1);
            }
            break;
          case "previous":
            if(($scope.currentPage-1)*$scope.cr8Limit >= 0){
              $scope.currentPage--;
              $scope.activatePageNum($scope.currentPage+1);
              $scope.cr8Start = $scope.currentPage*$scope.cr8Limit;
            }
            break;
          case "first":
            $scope.currentPage = 0;
            $scope.cr8Start = $scope.currentPage*$scope.cr8Limit;
            $scope.activatePageNum($scope.currentPage+1);
            break;
          case "last":
            $scope.currentPage = $scope.numOfPage;
            $scope.cr8Start = $scope.currentPage*$scope.cr8Limit;
            $scope.activatePageNum($scope.currentPage+1);
            break;
          default:
            $scope.currentPage = value-1;
            $scope.cr8Start = $scope.currentPage*$scope.cr8Limit;
            $scope.activatePageNum($scope.currentPage+1);
            break;
        }
      }

      $scope.activatePageNum = function(value){
        var elems = document.querySelectorAll(".cr8PageSpans");

        [].forEach.call(elems, function(el) {
            el.classList.remove(configs.classes.activePageNumberClass);
        });
        var checker = true;
        var counter = 0;
        while(checker){
          try{
            $timeout(function(){
              var element =  document.querySelectorAll("[data-pagenum='"+value+"']");
              element[0].classList.add(configs.classes.activePageNumberClass);
            },500);
            console.log(element)
            break;
          } catch(e){
          }
          if(counter > 9){
            checker = false;
          }
          counter++;
      }
      }

    })
  }
  
}
