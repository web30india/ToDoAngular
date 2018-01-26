
var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [];
	$scope.removeSelected = function(item) { 
	 const index = $scope.todoList.indexOf(item);
    $scope.todoList.splice(index, 1);
	}
    $scope.todoAdd = function() {
	if($scope.todoInput != ""){
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
		}
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
		$scope.selectedAll=false;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
	
	
		
	$scope.checkAll = function () {
        if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
		 var oldList = $scope.todoList;
       
        angular.forEach($scope.todoList, function(x) {
            x.done= $scope.selectedAll ;
        });
	   
		
		
    };
});