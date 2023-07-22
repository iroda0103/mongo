const Todo = require("./Todo");

const userTodos = async ({
    q,
  user,
  page = { limit: 2, offset: 0 },
  sort = { by: "updated_at", order: "asc" },
}) => {
  // sort = ["+id"]

  const filter = {};
  const sortObj = {};
  //   sort.forEach((elem) => {
  //     sortObj[`${elem.slice(1)}`] = elem[0] == "+" ? 1 : -1;
  //   });
  
 

  if (q) {
    filter.name = { $regex: new RegExp(q, "i") };
  }

//   if(!sort.by){
//     sort.by='updated_at'
//   } 

//   if(!sort.order){
//     sort.order="asc"
//   } 

//   if(!page.offset){
//     page.offset=0
//   }

//   if(!page.limit){
//     page.limit=10
//   }

  sortObj[`${sort.by}`] = sort.order == "asc" ? 1 : -1;

console.log(sort,page);
  const result = await Todo.find({ user, ...filter })
    .sort(sortObj)
    .populate([
      {
        path: "user",
        select: "username",
      },
    ])
    .populate([
      {
        path: "list",
        select: "name",
      },
    ])
    .skip(page.offset)
    .limit(page.limit);

  const totalPage = result.length / page.limit;

  return ({
    list: result,
    pageInfo: {
      ...page,
      totatPage: totalPage % 1 == 0 ? totalPage : (totalPage-totalPage%1) + 1,
    },
  });
};

module.exports = userTodos;
