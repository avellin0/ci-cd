import { Router } from "express";
const routes = Router()

import {CreateAccount} from '../controller/CreateAccount'
const user = new CreateAccount()

routes.post('/create_account', user.handle)


export {routes}