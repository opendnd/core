const fs = require('fs');
const path = require('path');
const rootDir = path.join(__dirname, '..');
const typesDir = path.join(rootDir, 'src', 'types');
const dirs = fs.readdirSync(typesDir);
const exclude = ['.DS_Store', 'schema.json', 'form-data.json', 'ui-schema.json', 'core'];

// copy all the schemas
const copyAll = () => {
  dirs.forEach((resources) => {
    if (!exclude.includes(resources)) {
      const resourceDir = path.join(typesDir, resources);
      const schemaPath = path.join(resourceDir, 'schema.json');
      const copyPath = schemaPath.replace('src', 'dist');
          
      fs.createReadStream(schemaPath).pipe(fs.createWriteStream(copyPath));
    }
  });
}

copyAll();