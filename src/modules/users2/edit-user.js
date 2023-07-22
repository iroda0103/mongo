const { NotFoundError } = require("../../shared/errors");
const User = require("./User");

exports.editUser = async ({ id, ...changes }) => {
  console.log(id,changes);
  const existing = await User.findById(id);

  if (!existing) {
    throw new NotFoundError("Foydalanuvchi topilmadi.");
  }

  const result = await User.findByIdAndUpdate(id, changes);
  return result;
};
