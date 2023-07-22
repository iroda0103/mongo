const Joi=require('joi')

exports.postListSchema={
    body:Joi.object({
        name:Joi.string().required()
    })
}

exports.getUserListSchema={
    param:Joi.object({
        id:Joi.string().required()
    })
}

// ?q=a&page[offset]=0&page[limit]=10
exports.getListsSchema = {
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

exports.patchListSchema={
    param:Joi.object({
        id:Joi.string().required()
    }),
    body:Joi.object({
        name:Joi.string().required()
    })
}

exports.deleteListSchema={
    param:Joi.object({
        id:Joi.string().required()
    })
}