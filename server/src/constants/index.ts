import { config } from "dotenv";

config();

export default {
    PORT: <string>process.env.PORT,
    SERVER_URL: <string>process.env.SERVER_URL,
    CLIENT_URL: <string>process.env.CLIENT_URL,
    SECRET: <string>process.env.SECRET,
}