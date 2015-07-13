(function() {
  'use strict';

  angular
    .module('shiftGui')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
