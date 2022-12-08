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


app.listen(PORT, console.log(PORT))