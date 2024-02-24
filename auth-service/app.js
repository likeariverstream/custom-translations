import express from 'express'
import config from 'config'

const app = express()

app.use(express.json())

const port = config.get('SERVER.PORT')
app.listen(port, () => console.log(`Server started on ${port}`))
