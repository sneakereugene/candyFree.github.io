var myApp = angular.module('myApp', ['ngMessages']);
// prompt('Рад приветствовать! Как вас зовут?');

myApp.controller('mainController', function($scope, $timeout, $filter){

  $scope.userName = prompt('Рад приветствовать! Как вас зовут?', 'Дарья');

  $scope.chocolates = [
    {candy: 'Snikers'},
    {candy: 'Шоколапки'},
    {candy: 'Candy Nut'},
    {candy: 'Мак'},
    {candy: 'Коровка'},
    {candy: 'De Luxe'}
  ];

  $scope.fruits = [
    {candy: 'Chupa-Chups'},
    {candy: 'Crazy Bee'},
    {candy: 'Frutini'},
    {candy: 'Тутти-Фрутти'},
    {candy: 'Harribo'},
    {candy: 'Jelly sweet'}
  ];

  $scope.gums = [
    {candy: 'Dirol'},
    {candy: 'Love is...'},
    {candy: 'Turbo'},
    {candy: 'Huba-Buba'},
    {candy: 'Orbit'},
    {candy: 'Eclipse'}
  ];


  $scope.handle ='';
  $scope.upperCaseHandle =function(){
    return $filter('uppercase')($scope.handle);
  };
});




























// var Person = function(firstName, lastName){
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
//
// var logPerson = function(person){
//
//   console.log(person);
// }
//
// var p = new Person('John', 'Smith');
//
// logPerson(p);
