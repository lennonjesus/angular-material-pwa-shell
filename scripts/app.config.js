(function () {

  'use strict';

  angular.module('pwashell').config(function($mdAriaProvider, $mdThemingProvider) {
    // Globally disables all ARIA warnings.
    $mdAriaProvider.disableWarnings();

    // Globally set default theme colors
    // https://material.google.com/style/color.html#color-color-palette
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('orange');
  });

})();
