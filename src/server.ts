import express from 'express'
import colors from 'colors'
import router from './router'
import db from './config/db'

/** DataBase Connection */
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.blue.bold('Conexión exitosa a la BD'))
        
    } catch (error) {
        console.log(error)
        console.log(colors.red.bold('Falló la conexión a la BD'))
    }
}
connectDB()

/** Server Configuration */
const server = express()

/** Handle Routes */
server.use('/api/products', router)
export default server