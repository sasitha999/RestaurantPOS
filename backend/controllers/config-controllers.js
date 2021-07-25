
const HttpError = require('../models/http-error');
const Config = require('../models/config');

const getConfigs = async (req, res, next) => {

  let configs;
  try {
    configs = await Config.find({});
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a configs.',
      500
    );
    return next(error);
  }

  if (!configs) {
    const error = new HttpError(
      'Could not find configs.',
      404
    );
    return next(error);
  }

  res.status(200).json({ success: true, data: configs })
};


exports.getConfigs = getConfigs;
