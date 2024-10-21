import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import route from "./routes/index.js";
import dotenv from "dotenv";
import db from "./database/config.js";
import { app, server } from "./socket/index.js ";
import cookieParser from "cookie-parser";

const port = 5001;

dotenv.config();

export const pool = db.connect().then((pool) => {
  console.log("Connected success to database");
  return pool;
});

app.use(cookieParser());
app.use(bodyParser.json({ limit: "1000mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "1000mb", extended: true }));
app.use(
  cors({
    origin: [
      "http://10.43.162.95:5173",
      "http://localhost:5173",
      "http://10.43.162.95:5172",
      "http://localhost:5172",
    ],
    credentials: true,
  })
);
app.use(morgan("combined"));

route(app);

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
