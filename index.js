import app from "./app.js";
import "dotenv/config";

const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`listening to port: ${port}`);
});
