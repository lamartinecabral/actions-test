var fs = require('fs');

var innerHTML = `
<html>
  <head></head>
  <body>
    <h1>Hello World</h1>
    <p>page created at</p>
    <p>${new Date().toLocaleString()}</p>
  </body>
</html>
`.trim();

async function main(){
  await fs.promises.mkdir('docs', {recursive: true});
  await fs.promises.writeFile("docs/test.txt", innerHTML);
  console.log("the file was saved;")
}

main().catch(console.error);
