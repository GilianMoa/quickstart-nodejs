import Express from 'express'
import BodyParser from 'body-parser'

const app = Express()
app.use(BodyParser.json())

app.listen(5000, () => {
  console.log('Hello ever running Node.js project.')
})
