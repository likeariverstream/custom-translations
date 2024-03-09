import { Router } from 'express'
import { createUserController } from './controllers/index.js'

const usersRouter = Router()

usersRouter.post('/users', createUserController.run)

export { usersRouter }
