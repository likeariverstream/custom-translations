import express from 'express'
import config from 'config'
import { authRouter } from './components/auth/router.js'

const app = express()

app.use(express.json())

app.use(authRouter)

const port = config.get('SERVER.PORT')
app.listen(port, () => console.log(`Server started on ${port}`))
