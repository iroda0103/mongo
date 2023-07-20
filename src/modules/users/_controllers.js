const express = require("express");
const addUser = require("./add-user");
const listUser = require("./list-users");
const getUser = require("./show-user");
const { editUser } = require("./edit-user");
const {removeUser}=require('./remove-user')
const httpValidator = require("../../shared/http-validator");
const {
  postUserSChema,
  showUserSchema,
  patchUserSchema,
  deleteUserSchma,
} = require("./_schemas");

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postUser = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postUserSChema);

    const result = await addUser(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const result = await listUser();

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const showUser = async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, showUserSchema);

    const result = await getUser(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    httpValidator(
      {
        body: req.body,
        params: req.params,
      },
      patchUserSchema
    );

    const result = await editUser({ id: req.params.id, ...req.body });

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const  deleteUser= async (req, res, next) => {
  try {
    httpValidator({ params: req.params }, deleteUserSchma);

    const result = await removeUser(req.params);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postUser,
  getUsers,
  showUser,
  updateUser,
  deleteUser
};
