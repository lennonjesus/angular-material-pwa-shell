(function () {

  'use strict';

  angular.module('pwashell').controller('HomeController', homeController);

  function homeController() {

    /*jshint validthis:true */
    var vm = this;

    vm.init = init;

    vm.init();

    function init() {
      vm.appTitle = "Progressive Web App Shell";
    }
  }
})();
