import express from 'express';
import user from './api/v1/user'

const app = express()

app.use('/users', user);

export default app;