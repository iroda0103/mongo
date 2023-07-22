const express = require("express");
const httpValidator = require("../../shared/http-validator");
const {
  postListSchema,
  getUserListSchema,
  patchListSchema,
  deleteListSchema,
  getListsSchema,
} = require("./_schema");
const addList = require("./add-list");
const showList = require("./show-list");
const userLists = require("./user-lists");
const editUser = require("./edit-list");
const removeList = require("./remove-list");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const postList = async (req, res, next) => {
  try {
    httpValidator({ body: req.body }, postListSchema);
    const result = await addList({ user: req.user.id, ...req.body });

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
const getLists = async (req, res, next) => {
  try {

    console.log(req.query);
    httpValidator({ query: req.query }, getListsSchema);
    const {limit,offset,by,order}=req.query

    // const page={}
    // const sort={}
    // if(limit){
    //   page['limit']=limit
    // }
    // if(offset){
    //   page['offset']=offset
    // }
    // if(by){
    //   sort['by']=by
    // } if(offset){
    //   sort['order']=order
    // }
    // const result = await userLists({ user: req.user.id ,page:{limit,offset},sort:{by,order}});
    // const result = await userLists({ user: req.user.id ,page:{limit,offset},sort:{by,order}});
    const result = await userLists({ user: req.user.id ,...req.query});

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
const getList = async (req, res, next) => {
  try {
    httpValidator({ param: req.params }, getUserListSchema);
    const result = await showList({ user: req.user.id, ...req.params });

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
const patchList = async (req, res, next) => {
  try {
    httpValidator({ param: req.params, body: req.body }, patchListSchema);

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
const deleteList = async (req, res, next) => {
  try {
    httpValidator({ param: req.params }, deleteListSchema);

    const result = await removeList({
      id: req.params.id,
      user: req.user.id,
    });

    res.status(200).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  postList,
  getLists,
  getList,
  patchList,
  deleteList,
};
