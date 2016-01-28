(function(){ // <--- this is a closure
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Very shiny.',
      canPurchase: true,
      soldOut: true
    },
    {
      name: 'Pentagonal Gem',
      description: 'Origin unknown.',
      canPurchase: true,
      soldOut: false
    }
  ];
})();
