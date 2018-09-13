var showHideDemo = angular.module('showHideDemo',[]);
showHideDemo.controller('showHideController', function($scope){
	$scope.libs = [
		{name: 'AngularJS', checked: false},
		{name: 'Backnone', checked: true},
		{name: 'Knockout', checked: false},
		{name: 'Jquery', checked: false},
		{name: 'MooTools', checked: false},
		{name: 'YUI Library', checked: false},
		{name: 'Ember', checked: true}
	];
});