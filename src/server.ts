import { AppDataSource } from "./data-source"
import app from "./routes/base.route"
import { createTodoRoutes } from "./routes/todo.route"

createTodoRoutes(app)

app.listen(1234, async function () {
  // データベース接続
  try {
    AppDataSource.initialize()
    console.log("Data Source has been initialized!")
  } catch (err) {
    console.error("Error during Data Source initialization:", err)
    throw err
  }

  console.log("server running")
})
