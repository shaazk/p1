import { Joi } from 'celebrate'

const signupUser = Joi.object().keys({
    name: Joi.string().max().min().trim().required(),
    age: Joi.number().max().min().trim().required(),
    country: Joi.string().max().min().trim().required()
    
})

export {
    signupUser
}