import 'dotenv/config'
import app from './app'

app.listen(process.env.port || 5000, ()=> {
    console.log("server running:", process.env.port)
})