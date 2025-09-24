import express from "express";
import morgan from "morgan";

const host = "localhost";
const port = 8000;

const app = express();

if (app.get("env") === "development")
  app.use(morgan("dev"));

app.use(express.static("static"));
app.set("view engine", "ejs");

app.get(["/", "/index.html"], async function (request, response, next) {
  response.sendFile("index.html", { root: "./" });
});

app.get("/random/:nb", async function (request, response, next) {
  const length = Number(request.params.nb);
  const numbers = Array.from({ length }, () => Math.floor(100 * Math.random()));
  const welcome = `${length} nombres aléatoires :`;
  return response.render("random", { numbers, welcome });
});

const server = app.listen(port, host);

server.on("listening", () =>
  console.info(
    `HTTP listening on http://${server.address().address}:${server.address().port} with mode '${process.env.NODE_ENV}'`,
  ),
);

console.info(`File ${import.meta.url} executed.`);
