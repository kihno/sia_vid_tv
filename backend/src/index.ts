require('dotenv').config()
import cors from 'cors'
import express from 'express'
import fileUpload from 'express-fileupload'
import { StatusCodes } from 'http-status-codes'
import HttpException from './utils/HttpExceptions'

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(fileUpload())

app.get('/', async (req, res, next) => {
  try {
    return res.status(StatusCodes.OK).json({ message: 'Welcome' })
  } catch (error: any) {
    next(new HttpException(StatusCodes.BAD_REQUEST, error.message))
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
