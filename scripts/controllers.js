var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {
    	'name': 'Apple iMac',
        'snippet': 'Fast just got faster with iMac.',
        'price': '1300'
    },
    {
    	'name': 'Motorola XOOM™ with Wi-Fi',
        'snippet': 'The Next, Next Generation tablet.',
        'price': '3100'
    },
    {
    	'name': 'MOTOROLA XOOM™',
        'snippet': 'The Next, Next Generation tablet.',
        'price': '20.00'
    }
  ];
});