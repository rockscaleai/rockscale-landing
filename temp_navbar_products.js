const fs = require('fs');
const path = require('path');

const navDataPath = path.join(__dirname, 'src/data/navbar-data.ts');
let navDataContent = fs.readFileSync(navDataPath, 'utf8');

navDataContent = navDataContent.replace(
  /{\s*id:\s*'products-overview',\s*label:\s*'Products Overview',\s*href:\s*'\/products'\s*},\s*/,
  ''
);

navDataContent = navDataContent.replace(
  /,\s*{\s*id:\s*'enterprise-solutions',\s*label:\s*'Enterprise Solutions',\s*href:\s*'\/services'\s*}/,
  ''
);

fs.writeFileSync(navDataPath, navDataContent);
console.log('Mobile menu data updated.');
