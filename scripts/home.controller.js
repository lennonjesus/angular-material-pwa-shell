(function () {

  'use strict';

  angular.module('pwashell').controller('HomeController', homeController);

  function homeController($mdSidenav) {

    /*jshint validthis:true */
    var vm = this;

    vm.init = init;
    vm.toggleMenu = toggleMenu;

    vm.init();

    function init() {
      vm.appTitle = "Progressive Web App Shell";
    }

    function toggleMenu() {
      $mdSidenav('left').toggle();
    }
  }
})();
