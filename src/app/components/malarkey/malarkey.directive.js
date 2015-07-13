(function() {
  'use strict';

  angular
    .module('shiftGui')
    .directive('acmeMalarkey', acmeMalarkey);

  /** @ngInject */
  function acmeMalarkey(malarkey) {
      var linkFn = function(scope,element,attrs) {
      element.bind("keypress", function(event) {

        if(event.which === 13) {
          scope.$apply(attrs.acmeMalarkey);
          event.preventDefault();
        }
      });
    };

    return {
      link:linkFn
    };

  }

})();
