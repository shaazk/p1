import express from 'express'
import { celebrate } from 'celebrate'
import User from '../../../controllers/user.controller'
import { signupUser } from '../../validations/user.validation'


const router = express.Router();

router.post('/', celebrate({body: signupUser}), User.getUser)


export default router