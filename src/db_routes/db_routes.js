import * as express from 'express'

const router = express.Router()

router.get('/item', (req, res) => {
    const id = req.query.id
    const dateStart = req.query.dateStart
    const dateEnd = req.query.dateEnd
})

router.post('/item', (req, res) => {
    const id = req.body.id
    const contents = req.body.contents
})
