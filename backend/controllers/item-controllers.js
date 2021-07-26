const HttpError = require('../models/http-error');
const Items = require('../models/item');

const getItems = async (req, res, next) => {

  let items;
  try {
    items = await Items.find({}).populate({path: 'category'});
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a items.',
      500
    );
    return next(error);
  }

  if (!items) {
    const error = new HttpError(
      'Could not find items.',
      404
    );
    return next(error);
  }

  res.status(200).json({ success: true, data: items })
};


exports.getItems = getItems;
