import { Pool } from "pg";
import dotenv from "dotenv";
import { UserAPI } from "./userAPI";
import { UserService } from "../services/user.service";

dotenv.config();

const port = parseInt(process.env.DB_PORT || "5432");

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port,
});


export const user: UserAPI = new UserService(pool);
