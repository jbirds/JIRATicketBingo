/**
 * Created by Liferay on 8/17/2015.
 */

var ctrl = angular.module('test', []);

ctrl.controller('JIRA', function($scope) {

    $scope.ticketsArray = [];
    $scope.ticketAssignmentArray = [];
    $scope.assignments = [];
    $scope.userArray = [];
    $scope.userAssignmentArray = [];

    $scope.submitTicket = function() {
        $scope.ticketsArray.push($scope.ticketnumber);
        $scope.ticketAssignmentArray.push($scope.ticketnumber);
        $scope.ticketnumber = null;
    }

    $scope.submitUser = function() {
        $scope.userArray.push($scope.membername);
        $scope.userAssignmentArray.push($scope.membername);
        $scope.membername = null;
    }

    $scope.assignTickets = function() {
        for (var ticket in $scope.ticketAssignmentArray) {
            console.log("This is the ticket: " + ticket);
            var assignedUser = $scope.userAssignmentArray[Math.floor(Math.random()*$scope.userAssignmentArray.length)];
            $scope.assignments.push({"ticket" : $scope.ticketAssignmentArray[ticket], "member" : assignedUser});
            $scope.userAssignmentArray.splice($scope.userAssignmentArray.indexOf(assignedUser), 1);
        }
    }

});