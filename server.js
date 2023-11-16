import express from "express";
import cors from "cors"
const port = 8000
import data from './data.json'

const app = express()
app.use(cors)

app.get('/flights', (req, res) => {
    res.json(data)
})

app.listen(port, () => console.log('listening on port ' + port))

