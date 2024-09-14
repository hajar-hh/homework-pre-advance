import express from "express";
import userRouter from "./routes/member.rout.js"; 
import dbConection from "./config/conection.js";
import cors from "cors"

const app = express();


await dbConection();


app.use(express.json(),cors());


app.use("/member", userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

  
