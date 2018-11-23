import * as express from 'express'
import { Request, Response } from 'express'
import { createConnection } from 'typeorm'

import { User } from './entity/User'

async function startServer() {
    const connection = await createConnection()

    const app = express()
    app.use(express.json())

    const userRepository = connection.getRepository(User)

    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.get('/users', async (req: Request, res: Response) => {
        res.json(await userRepository.find())
    })

    app.post('/users', async (req: Request, res: Response) => {
        const user = userRepository.create(req.body)

        return userRepository.save(user)
    })
    
    const server = app.listen(8081, () => {
        const host = server.address()['address']
        const port = server.address()['port']
    
        console.log('App listening at http://%s:%s', host, port)
    })
}

startServer()
