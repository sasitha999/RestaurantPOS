var seeder = require('mongoose-seed');
 
seeder.connect('mongodb://localhost:27017/pos', function() {
 
  seeder.loadModels([
    'models/config.js',
    'models/category.js',
    'models/item.js',
  ]);
 
  seeder.clearModels(['config' , 'category', 'item'], function() {
 
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
var data = [
    {
        'model': 'config',
        'documents': [
            {
                'name': 'discount',
                'values': '5'
            },
            {
                'name': 'coupon',
                'values': '50'
            }
        ]
    },
    {
      'model': 'category',
      'documents': [
          {
              'name': 'food',
              'description': 'foold items'
          },
          {
              'name': 'alchole',
              'values': 'alchole bervarages'
          },
          {
            'name': 'cold drinks',
            'values': 'cold bervarages'
          },
          {
            'name': 'hot drinks',
            'values': 'hot bervarages'
        }
      ]
    },
    {
      'model': 'item',
      'documents': [
          {
            'title': 'Chiken',
            'cover': 'image/url',
            'weight': '150G',
            'price': 1500
          },
          {
            'title': 'fish',
            'cover': 'image/url',
            'weight': '150G',
            'price': 1500
          },
          {
            'title': 'Vegitable',
            'cover': 'image/url',
            'weight': '150G',
            'price': 1500
          },
          {
            'title': 'Egg',
            'cover': 'image/url',
            'weight': '150G',
            'price': 1500
          },
      ]
    },
];