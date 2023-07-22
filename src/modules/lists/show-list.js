const { NotFoundError } = require("../../shared/errors");
const List = require("./List");

const showList = async ({ user, id }) => {
  const list =await List.findOne({ user, _id: id });
console.log(list);

  if (!list) {
    throw new NotFoundError("List topilmadi");
  }

  return list;
};

module.exports = showList;
