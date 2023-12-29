import {Request,Response} from 'express'


export class CreateAccount{
  async handle(req:Request,res:Response){
    const {name,email,password} = req.body;
    
    const user = {
      name,
      email,
      password
    } 

    const userType = Object.values(user).every(value => typeof value === 'string')

    if(!userType){
      res.status(405).send({message: "Tipo Inválido"})
    }

    res.json(user)
  }
}