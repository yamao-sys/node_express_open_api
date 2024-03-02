import express from "express"
import path from "path"
import cors from "cors"
import bodyParser from "body-parser"

const app = express()

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.json())

const corsOptions = {
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions))

export default app
