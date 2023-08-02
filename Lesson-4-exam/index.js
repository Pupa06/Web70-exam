import express from "express";
import router from "./src/routers/index.js";

const app = express();
const PORT = 5000;

app.use("/api" , router);
app.use(express.json())

app.listen(PORT, () => {
    console.log("Server listening on port" + PORT);
});
