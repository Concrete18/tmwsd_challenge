const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const messagesRoute = require("./routes/messages");
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// routers
app.use("/", messagesRoute);

app.listen(port, () => {
  console.log(`TMWSD is listening at http://localhost:${port}`);
});
