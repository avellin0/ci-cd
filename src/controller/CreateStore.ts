import {Request,Response} from 'express'


export class CreateStore{
  async handle(req:Request,res:Response){
    const {owner,products,price,amount} = req.body;
    
    const user = {
      owner,
      products,
      price,
      amount
    } 

    if(!user){
      res.status(405).send({message: "ERROR ao criar a loja. Verifique os dados."})
    }

    res.json(user)
    
  }
}