const Joi=require('joi')

exports.postTodoSchema={
    body:Joi.object({
        name:Joi.string().required(),
        list_id:Joi.string().required()
    })
}

exports.getUserTodoSchema={
    param:Joi.object({
        id:Joi.string().required()
    })
}

// ?q=a&page[offset]=0&page[limit]=10
exports.getTodosSchema = {
    query: Joi.object({
        q: Joi.string(),
        page: Joi.object({
            offset: Joi.number().integer(),
            limit: Joi.number().integer().when("offset", { is: Joi.exist(), then: Joi.required(), otherwise: Joi.forbidden() }),
        }),
        sort: Joi.object({
            by: Joi.string().valid("updated_at", "created_at"),
            order: Joi.string().valid("asc", "desc"),
        })
    }),
};

exports.patchTodoSchema={
    param:Joi.object({
        id:Joi.string().required()
    }),
    body:Joi.object({
        name:Joi.string().required()
    })
}

exports.deleteTodoSchema={
    param:Joi.object({
        id:Joi.string().required()
    })
}