const { NotFoundError } = require("../../shared/errors");
const Todo = require("./Todo");

const showTodo = async ({ user, id }) => {
  const todo =await Todo.findOne({ user, _id: id });

  if (!todo) {
    throw new NotFoundError("Todo topilmadi");
  }

  return todo;
};

module.exports = showTodo;
