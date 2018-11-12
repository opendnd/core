const fs = require('fs');
const path = require('path');
const typesDir = path.join(__dirname, '..', 'src', 'types');
const dirs = fs.readdirSync(typesDir);
const exclude = ['.DS_Store', 'schema.json', 'form-data.json', 'ui-schema.json', 'core'];

// list all the schemas
const listAll = () => {
  dirs.forEach((resources) => {
    if (!exclude.includes(resources)) {
      const resourceDir = path.join(typesDir, resources);
      const files = fs.readdirSync(resourceDir);
  
      // go through the files in the resource dir
      files.forEach((file) => {
        if (!exclude.includes(file)) {
          const resource = file.replace('.ts', '');
  
          console.log(`Resource: ${resources} / ${resource}...`);
        }
      });
    }
  });
}

listAll();
