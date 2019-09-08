import express from 'express'
import bodyParser from 'body-parser'
import routes from './src/routes/index'
const app = express()

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

//accept static files like images
app.use(express.static(`${__dirname}/`))
app.use("/api/v1", routes)
export default app;