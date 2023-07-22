const express = require("express");
const httpValidator = require("../../shared/http-validator");
const {
  postTodoSchema,
  getUserTodoSchema,
  getTodosSchema,
  patchTodoSchema,
  deleteListSchema,
} = require("./_schema");
const addTodo = require("./add-todo");
const showTodo = require("./show-todo");
const userTodos = require("./user-todo");
const editTodo = require("./edit-todo");
const removeTodo = require("./remove-todo");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postTodo = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postTodoSchema);

    const result = await addTodo({ user: req.user.id, list:req.body.list_id,name:req.body.name });

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
 * @param {express.NextFunction} next
 */
const getTodos = async (req, res, next) => {
  try {

    console.log(req.query);
    httpValidator({ query: req.query }, getTodosSchema);
    const {limit,offset,by,order}=req.query

    const result = await userTodos({ user: req.user.id });

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
 * @param {express.NextFunction} next
 */
const getTodo = async (req, res, next) => {
  try {
    httpValidator({ param: req.params }, getUserTodoSchema);
    const result = await showTodo({ user: req.user.id, ...req.params });

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
 * @param {express.NextFunction} next
 */
const patchTodo = async (req, res, next) => {
  try {
    httpValidator({ param: req.params, body: req.body }, patchTodoSchema);

    const result = await editUser({
      id: req.params.id,
      user: req.user.id,
      ...req.body,
    });

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
 * @param {express.NextFunction} next
 */
const deleteTodo = async (req, res, next) => {
  try {
    console.log("aaa");
    httpValidator({ param: req.params }, deleteListSchema);

    const result = await removeTodo({
      id: req.params.id,
      user: req.user.id,
    });

    res.status(200).json({
   data: result
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  postTodo,
  getTodos,
  getTodo,
  patchTodo,
  deleteTodo,
};
