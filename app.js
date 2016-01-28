(function(){ // <--- this is a closure
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2,
      description: 'Very shiny.',
      canPurchase: true,
      soldOut: true,
      images:[
        {
          full: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Pentakisdodecahedron.jpg/280px-Pentakisdodecahedron.jpg',
          thumb: 'http://farm8.static.flickr.com/7503/15729507095_a90d3b495c_t.jpg'
        }
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Origin unknown.',
      canPurchase: true,
      soldOut: false,
      images:[
        {
          full: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQPMmKKOEkhyRWU60w_sn3ZwzM7qtTSrCPQoEEW0F7bKnUeRiBx',
          thumb: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTRxxZdxwGbnHFRqeUHaMqrkVwdKP7qNxo6BWypyJiWtErvNGTW5w'
        }
      ]
    }
  ];
})();
