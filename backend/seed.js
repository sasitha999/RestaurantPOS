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
              '_id': '60fd0ca1de281cccfd695205',
              'name': 'Food',
              'description': 'foold items'
          },
          {
              '_id' : '60fd0ca1de281cccfd695204',
              'name': 'Alchole',
              'values': 'alchole bervarages'
          },
          {
            '_id' : '60fd0ca1de281cccfd695203',
            'name': 'Cold drinks',
            'values': 'cold bervarages'
          },
          {
            '_id' : '60fd0ca1de281cccfd695206',
            'name': 'Hot Drinks',
            'values': 'hot bervarages'
        }
      ]
    },
    {
      'model': 'item',
      'documents': [
          {
            'title': 'Chiken',
            'cover': 'https://img.freepik.com/free-photo/grilled-chicken-breast-with-vegetables-plate-wooden-table-top-view-copy-space_123827-275.jpg?size=338&ext=jpg',
            'weight': '150g',
            'price': 25.50,
            'category': '60fd0ca1de281cccfd695205',
          },
          {
            'title': 'Fish',
            'cover': 'https://image.freepik.com/free-photo/grilled-whole-fish-with-cauliflower-carrot-salad_114579-2201.jpg',
            'weight': '250g',
            'price': 10,
            'category': '60fd0ca1de281cccfd695205',
          },
          {
            'title': 'Vegitable',
            'cover': 'https://image.freepik.com/free-photo/chopped-minced-chicken-mushroom-salad-with-colorful-bell-peppers-fresh-parsley_114579-1873.jpg',
            'weight': '50g',
            'price': 32,
            'category': '60fd0ca1de281cccfd695205',
          },
          {
            'title': 'Egg',
            'cover': 'https://image.freepik.com/free-photo/tasty-toast-with-fried-egg_116380-29.jpg',
            'weight': '170g',
            'price': 15.50,
            'category': '60fd0ca1de281cccfd695205',
          },
          {
            'title': 'Vodka',
            'cover': 'https://image.freepik.com/free-photo/tequila-gold-mexican-alcohol-shot-glasses-lime-salt-toned-image-selective-focus_124865-8383.jpg',
            'weight': '250ml',
            'price': 10,
            'category': '60fd0ca1de281cccfd695204',
          },
          {
            'title': 'Rum',
            'cover': 'https://img.freepik.com/free-photo/image-with-lemonade_199223-4.jpg?size=338&ext=jpg',
            'weight': '50ml',
            'price': 32,
            'category': '60fd0ca1de281cccfd695204',
          },
          {
            'title': 'Whiskey',
            'cover': 'https://as1.ftcdn.net/v2/jpg/03/17/70/92/1000_F_317709244_ykH6Hf9alOmGn3LGukZHSvQUNxAkuDLi.jpg',
            'weight': '170ml',
            'price': 64,
            'category': '60fd0ca1de281cccfd695204',
          },
          {
            'title': 'Tea',
            'cover': 'https://as2.ftcdn.net/v2/jpg/03/01/86/39/1000_F_301863928_BYIJDLsBaOJ2RT1OgRmAbz5xMmUhfKvh.jpg',
            'weight': '50ml',
            'price': 32,
            'category': '60fd0ca1de281cccfd695206',
          },
          {
            'title': 'Coffe',
            'cover': 'https://t4.ftcdn.net/jpg/01/62/74/67/240_F_162746788_uxm2CkE5xQq2fy7DVJASe40lMcvSQ52A.jpg',
            'weight': '170ml',
            'price': 12,
            'category': '60fd0ca1de281cccfd695206',
          },
          {
            'title': 'Milk Tea',
            'cover': 'https://image.freepik.com/free-photo/front-view-milk-tea-concept-with-cinnamon_23-2148555194.jpg',
            'weight': '170ml',
            'price': 25,
            'category': '60fd0ca1de281cccfd695206',
          },
          {
            'title': 'Milo',
            'cover': 'https://t3.ftcdn.net/jpg/02/30/62/62/240_F_230626287_j3LJu7ls9JMBlLnO34qhhdmZxeAsZMp8.jpg',
            'weight': '50ml',
            'price': 32,
            'category': '60fd0ca1de281cccfd695203',
          },
          {
            'title': 'Ice Coffie',
            'cover': 'https://t3.ftcdn.net/jpg/04/37/38/24/240_F_437382413_FV1UlXngjGGRp71PhG5JgGHDjWaooldt.jpg',
            'weight': '170ml',
            'price': 12,
            'category': '60fd0ca1de281cccfd695203',
          },
          {
            'title': 'Milk Shake',
            'cover': 'https://image.freepik.com/free-photo/image-with-breakfast_199223-212.jpg',
            'weight': '170ml',
            'price': 12,
            'category': '60fd0ca1de281cccfd695203',
          },
      ]
    },
];