/* eslint-disable */
(async () => {
  const { version } = require("./package.json");
  const { versions } = await fetch(
    "http://registry.npmjs.org/@onsmart/ui-kit"
  ).then((res) => res.json());
  console.log(version in versions);
})();
