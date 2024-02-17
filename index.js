var fs = require("fs");
const dayjs = require("dayjs");

var innerHTML = `
<html>
  <head></head>
  <body>
    <h1>Hello World</h1>
    <p>page created at</p>
    <p>${dayjs().format("dddd, MMMM DD, YYYY hh:mm A")}</p>
  </body>
</html>
`.trim();

async function main() {
  await fs.promises.mkdir("docs", { recursive: true });
  await fs.promises.writeFile("docs/index.html", innerHTML);
  console.log("the file was saved;");
}

main().catch(console.error);
