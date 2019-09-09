import express from 'express'
import bodyParser from 'body-parser'
import { errors } from 'celebrate'
import routes from './src/routes/index'
const app = express()

// extracting body
app.use(bodyParser.json())


app.use(bodyParser.urlencoded({ extended: false}))

//accept static files like images
app.use(express.static(`${__dirname}/`))
app.use("/api/v1", routes)

// return celebrate errors
app.use(errors())

// format the response
app.use((res, next) => {
    res.status(400).json({
        status: 400,
        error
    })
    next();
})
export default app;