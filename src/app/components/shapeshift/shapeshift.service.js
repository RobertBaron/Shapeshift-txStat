(function() {
  'use strict';

  angular
  .module('shiftGui')
  .factory('Shapeshift', shapeshift);

  /** @ngInject */
  function shapeshift($log, $http) {
    var apiHost     = 'https://shapeshift.io/';
    var coinsImages = {
      BTC: 'https://shapeshift.io/images/coins/bitcoin.png'
      , BLK: "https://shapeshift.io/images/coins/blackcoin.png"
      , BITUSD:  "https://shapeshift.io/images/coins/bitusd.png"
      , BTS: "https://shapeshift.io/images/coins/bitshares.png"
      , BTCD:  "https://shapeshift.io/images/coins/bitcoindark.png"
      , CLAM:  "https://shapeshift.io/images/coins/clams.png"
      , XCP:  "https://shapeshift.io/images/coins/counterparty.png"
      , DASH: "https://shapeshift.io/images/coins/dash.png"
      , DGB:  "https://shapeshift.io/images/coins/digibyte.png"
      , DOGE: "https://shapeshift.io/images/coins/dogecoin.png"
      , FTC: "https://shapeshift.io/images/coins/feathercoin.png"
      , GEMZ:  "https://shapeshift.io/images/coins/gemz.png"
      , LTC:  "https://shapeshift.io/images/coins/litecoin.png"
      , MSC:  "https://shapeshift.io/images/coins/mastercoin.png"
      , MINT:  "https://shapeshift.io/images/coins/mintcoin.png"
      , MAID:  "https://shapeshift.io/images/coins/maidsafe.png"
      , XMR: "https://shapeshift.io/images/coins/monero.png"
      , NMC: "https://shapeshift.io/images/coins/namecoin.png"
      , NBT: "https://shapeshift.io/images/coins/nubits.png"
      , NXT:  "https://shapeshift.io/images/coins/nxt.png"
      , NVC: "https://shapeshift.io/images/coins/novacoin.png"
      , POT:  "https://shapeshift.io/images/coins/potcoin.png"
      , PPC: "https://shapeshift.io/images/coins/peercoin.png"
      , QRK:  "https://shapeshift.io/images/coins/quark.png"
      , RDD:  "https://shapeshift.io/images/coins/reddcoin.png"
      , XRP: "https://shapeshift.io/images/coins/ripple.png"
      , SDC: "https://shapeshift.io/images/coins/shadowcash.png"
      , START:  "https://shapeshift.io/images/coins/startcoin.png"
      , SJCX: "https://shapeshift.io/images/coins/storjcoinx.png"
      , SWARM: "https://shapeshift.io/images/coins/swarm.png"
      , USDT: "https://shapeshift.io/images/coins/tether.png"
      , UNO: "https://shapeshift.io/images/coins/unobtanium.png"
      , VRC: "https://shapeshift.io/images/coins/vericoin.png"
      , VTC: "https://shapeshift.io/images/coins/vertcoin.png"
      , MONA: "https://shapeshift.io/images/coins/monacoin.png"
      , IFC: "https://shapeshift.io/images/coins/infinitecoin.png"
      , STR: "https://shapeshift.io/images/coins/stellar.png"
      , FLO: "https://shapeshift.io/images/coins/florincoin.png"
      , IOC: "https://shapeshift.io/images/coins/iocoin.png"
      , NEOS: "https://shapeshift.io/images/coins/neoscoin.png"
      , IXC: "https://shapeshift.io/images/coins/ixcoin.png"
      , OPAL: "https://shapeshift.io/images/coins/opal.png"
      , TRON: "https://shapeshift.io/images/coins/positron.png"
      , ARCH:  "https://shapeshift.io/images/coins/arch.png"

    };

    var status = {
      complete: 'Transaction complete'
      , no_deposits: 'No deposits has been received on the deposit address'
      , received: 'Deposit has been received, processing. . .'

    }

    var service = {
      apiHost: apiHost,
      txStat: txStat,
      getImage: getImage,
      getStatus: getStatus
    };

    return service;

    function getStatus( data_status ){
      if ( typeof status[data_status] !== 'undefined' ){
        return status[data_status];
      }else{
        return data_status;
      }
    }

    function getImage( coin ){
      return coinsImages[ coin ];
    }

    function txStat(address) {

      return $http.get(apiHost + 'txStat/' + address)
      .then(txStatComplete);

      function txStatComplete(response) {
        return response.data;
      }

    }
  }
})();
