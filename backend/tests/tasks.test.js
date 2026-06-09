const request = require("supertest");
const { server, app } = require("../index");
const moongose = require('mongoose')

describe('GET api/tasks', ()=>{

    it('it should return 200 ok',async()=>{
        const res = await request(app).get('/api/tasks')
        expect(res.statusCode).toBe(200)
    })
    
    it('it should return array ',async()=>{
        const res = await request(app).get('/api/tasks')
        expect(typeof res.body).toBe("object")
        console.log(res.body.tasks)
    })


})


afterAll(async()=>{
    await moongose.connection.close()
    await server.close()
})