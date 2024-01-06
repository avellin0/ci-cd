import { Router } from "express";
const routes = Router()

import {CreateAccount} from '../controller/CreateAccount'
import {CreateStore} from '../controller/CreateStore'

const user = new CreateAccount()
const store = new CreateStore()

routes.post('/create_account', user.handle)
routes.post('/create_store', store.handle)

export {routes}