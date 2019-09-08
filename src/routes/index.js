import express from 'express';
import user from './api/v1/user'

const routes = express.Router()

routes.use('/user', user);

