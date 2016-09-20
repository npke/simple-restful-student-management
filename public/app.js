var app = angular.module('studentManagementApp', []);

app.controller('studentController', function ($scope, $http) {

    $scope.student =  {};
    $scope.students = [];
    $scope.isEdittingStudent = false;

    $scope.getStudentList = function () {
        $scope.students.push( {
            studentID: 1312241,
            fullName: "Anh Huy Nguyen",
            GPA: 9.0
        });

        $scope.students.push( {
            studentID: 1312276,
            fullName: "Ke Nguyen Phu",
            GPA: 9.5
        });

        $scope.students.push( {
            studentID: 1312666,
            fullName: "Tuan Nguyen Van",
            GPA: 9.8
        });


        $scope.students.push( {
            studentID: 1312265,
            fullName: "Hung Minh Diep",
            GPA: 9.0
        });


        $scope.students.push( {
            studentID: 1312265,
            fullName: "Hung Pham",
            GPA: 8.0
        });

        $scope.students.push( {
            studentID: 1312214,
            fullName: "Duy Hoang Nguyen",
            GPA: 9.0
        });
    };

    $scope.addStudent = function () {
        $scope.students.push(angular.copy($scope.student));
        $scope.student = {};
    };

    $scope.editStudent = function (student, index) {
        $scope.student = angular.copy(student);
        $scope.student.index = index;
        $scope.isEdittingStudent = true;
        console.log($scope.student);
    };

    $scope.saveStudent = function (index) {
        $scope.students[index] = angular.copy($scope.student);
        $scope.student = {};
        $scope.isEdittingStudent = false;
    };

    $scope.cancelEdit = function () {
        $scope.isEdittingStudent = false;
        $scope.student = {};
    };
    
    $scope.deleteStudent = function (index) {
        $scope.students.splice(index, 1);
    }

    $scope.getStudentList();
});