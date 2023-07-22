const express = require("express");
const httpValidator = require("../../shared/http-validator");
const addUser = require("./add-user");
const loginUser = require("./login-user");
const showUser = require("./show-user");
const editUser = require("./edit-user");
const removeUser=require("./remove-user")
const {
  postRegisterUserSchema,
  postUserLoginSchema,
  showUserSchema,
  patchMeSchema,
} = require("./_schemas");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {} next
 */
const postRegister = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postRegisterUserSchema);

    const result = await addUser(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {} next
 */
const postLoginUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postUserLoginSchema);

    const result = await loginUser(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {} next
 */
const getMe = async (req, res, next) => {
  try {
    const result = await showUser({ id: req.user.id });

    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {} next
 */
const patchMe = async (req, res, next) => {
  try {
    httpValidator({body:req.body},patchMeSchema);

    const result = await editUser({ id: req.user.id, ...req.body });

    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {} next
 */
const deleteMe = async (req, res, next) => {
  try {
    const result = await removeUser({ id: req.user.id });

    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  postRegister,
  postLoginUser,
  getMe,
  patchMe,
  deleteMe
};
