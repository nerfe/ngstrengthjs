angular.module('ngStrengthjs', [])
    .directive('strengthjs', function() {
    return {
        // Restrict it to be an attribute in this case
        restrict: 'A',
        scope: {
            options: '=strengthjs',
        },
        // responsible for registering DOM listeners as well as updating the DOM
        link: function(scope, element, attrs) {
            var options = scope.options;
            if (options.hasOwnProperty('strengthClass') && options.hasOwnProperty('strengthMeterClass') && options.hasOwnProperty('strengthButtonClass') && options.hasOwnProperty('strengthButtonText') && options.hasOwnProperty('strengthButtonTextToggle')) {
                $(element).strength(options);
            }else{
                console.error("Check documentation for options.");
            }
            
        }
    }
});