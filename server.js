import app from './app'
import 'dotenv/config'

app.listen(process.env.port || 5000, ()=> {
    console.log("server running:")
})