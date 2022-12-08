import express from 'express'
import routes from './module/routes.js';
import errorhandler from './middleware/errorhandler.js'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const corsOption = {
  origin: '*',
  optionsSuccessStatus: 200
};

const app = express();

const PORT = process.env.PORT || 9000;

app.use(cors(corsOption));
app.use(express.json())
app.use(routes)
app.use(errorhandler)

app.get('/*', (_, res)=>{
  res.sendStatus(404).json("page not found")
});

app.get('/', (_, res)=>{
  res.send("home page")
});

app.listen(PORT, console.log(PORT))