import {Request,Response} from 'express'
import {test,expect} from 'vitest'
import {CreateStore} from '../controller/CreateStore'

let sentData: any; 

let res = {
  send: (data: string) => { sentData = data},
  json: (data: string) => { sentData = data},
} as any | Response


test('CreateStore', async()=>{

  let req = {
    body: {
      owner: 'test',
      products: 'test',
      price: 1,
      amount: 10
    }, 
  } as any as Request

  const store = new CreateStore()
  await store.handle(req,res)

  expect(sentData).toEqual({
    owner: 'test',
    products: 'test',
    price: 1,
    amount: 10
  })
})
