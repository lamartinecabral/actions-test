const ghPages = require('gh-pages');

ghPages.publish('docs', {}, (err) => {
  if (err) console.error(err);
  else console.log('Published to GitHub pages!');
});
