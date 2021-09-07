import express from "express"
import bodyParser from "body-parser";
import cors from "cors";
import { config } from "./config";
import { router as AccountRoutes } from "./routes/account.routes";


const app = express();

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/v1/accounts', AccountRoutes);

app.listen(config.port)
console.log(`Listening on port: ${config.port}`)


