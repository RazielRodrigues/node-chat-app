import { io } from "socket.io-client";
import * as dotenv from 'dotenv';
dotenv.config();

const URL = process.env.SOCKET_URL || "http://localhost:3000";
const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;
