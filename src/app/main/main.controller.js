(function() {
  'use strict';

  angular
    .module('shiftGui')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $routeParams, $timeout,  Shapeshift, Utils) {
    var vm      = this;
    vm.address  = null;
    vm.status   = null;
    vm.hasResult= false;
    vm.loading  = false;

    $scope.searchTransaction = function(){
     if( vm.address !== null && vm.address !== ""){
        getTxStat( vm.address );
      }else{
        vm.hasResult= false;
        vm.data = null;
      }
    };

    if ( $routeParams.address !== undefined ){
      getTxStat( $routeParams.address );
    }

    function getTxStat( address ){
      vm.loading = true;
      Shapeshift.txStat( address )
      .then(function ( data ) {
        
        vm.address      = data.address;
        vm.data         = data;
        vm.data.status  = Shapeshift.getStatus( vm.data.status );
        vm.data.incomingImg  =  Shapeshift.getImage( data.incomingType );
        vm.data.outgoingImg  =  Shapeshift.getImage( data.outgoingType );

        vm.hasResult= true;
      })
      .catch(function (error) {

        /**
        If shapeshift does not find the deposit address it
        throws a 404 http error
        */
        vm.address = "Address not found :(";
        vm.status  = "The address cannot not be found on the shapeshift API :(";

        vm.hasResult= true;
      })
      .finally( function(){
        vm.loading = false;
      });
    }

  }
})();
