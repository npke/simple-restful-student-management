var app = angular.module('studentManagementApp', []);

app.controller('studentController', function ($scope, $http) {

    $scope.student =  {};
    $scope.students = [];
    $scope.isEdittingStudent = false;

    $scope.getStudentList = function () {
        $http.get('/api/students').then(function (res) {
           $scope.students = res.data;
        }, function (err) {
            $scope.message = err.message;
        });
    };

    $scope.addStudent = function () {
        $http.post('/api/students', $scope.student).then(function(res) {
            $scope.students.push(angular.copy($scope.student));
            $scope.student = {};
        }, function (err) {
            $scope.student = {};
            console.log(err);
            $scope.message = err.message;
        })
    };

    $scope.editStudent = function (student, index) {
        $scope.student = angular.copy(student);
        $scope.student.index = index;
        $scope.isEdittingStudent = true;
        console.log($scope.student);
    };

    $scope.saveStudent = function (index) {
        $http.put('/api/student/' + index, $scope.student).then(function (data) {
            $scope.students[index] = angular.copy($scope.student);
            $scope.student = {};
            $scope.isEdittingStudent = false;
        }, function (err) {
            console.log(err);
            $scope.student = {};
            $scope.isEdittingStudent = false;
            $scope.message = err.message;
        });
    };

    $scope.cancelEdit = function () {
        $scope.isEdittingStudent = false;
        $scope.student = {};
    };
    
    $scope.deleteStudent = function (index) {
        $http.delete('/api/student/' + index).then(function (data) {
            $scope.students.splice(index, 1);
        }, function (err) {
            console.log(err);
            $scope.message = err.message;
        });
    }

    $scope.getStudentList();
});