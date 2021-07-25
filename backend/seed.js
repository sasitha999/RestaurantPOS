var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost:27017/pos', function() {
 
  // Load Mongoose models
  seeder.loadModels([
    'models/config.js',
  ]);
 
  // Clear specified collections
  seeder.clearModels(['config'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
// Data array containing seed data - documents organized by Model
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
    }
];