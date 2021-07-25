const uuid = require('uuid/v4');
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const Category = require('../models/category');

const getCategories = async (req, res, next) => {

  let categories;
  try {
    categories = await Category.find({});
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a category.',
      500
    );
    return next(error);
  }

  if (!categories) {
    const error = new HttpError(
      'Could not find categories.',
      404
    );
    return next(error);
  }

  res.status(200).json({ success: true, data: categories })
};


exports.getCategories = getCategories;

