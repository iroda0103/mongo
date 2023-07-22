const Joi=require('joi');

exports.postRegisterUserSchema={
    body:Joi.object({
        first_name:Joi.string().required(),
        last_name:Joi.string().required(),
        username:Joi.string().required(),
        password:Joi.string().required()

    }),
}

exports.postUserLoginSchema={
    body:Joi.object({
        username:Joi.string().required(),
        password:Joi.string().required()
    })
}

exports.showUserSchema={
    params:Joi.object({
        id:Joi.string()
    })
}

exports.patchMeSchema={
    body:Joi.object({
        first_name:Joi.string(),
        last_name:Joi.string(),
        username:Joi.string()
    })
}