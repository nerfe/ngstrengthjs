'use strict';

var init_module = [
    'ngStrengthjs'
];

var app = angular.module('app', init_module)
    .controller('mainCtrl',function($scope){
        console.log('Your in the main Controller');
        $scope.strengthjsOptions = {
                strengthClass: 'strength',
                strengthMeterClass: 'strength_meter',
                strengthButtonClass: 'button_strength',
                strengthButtonText: 'Show Password',
                strengthButtonTextToggle: 'Hide Password'
            };
    });
