import express from "express"
import cors from 'cors'

const PORT = 80;
const app = express()

app.use(express.json())
app.use(cors())

app.get("/api/home", (req, res) => {
  res.json({ message: "Hello world!" });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
