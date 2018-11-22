const fs = require('fs');
const path = require('path');
const rootDir = path.join(__dirname, '..');
const typesDir = path.join(rootDir, 'src', 'types');
const typesDirs = fs.readdirSync(typesDir);
const srdDir = path.join(rootDir, 'src', 'srd');
const srdDirs = fs.readdirSync(srdDir);

// copy all the schemas
const copySchemas = () => {
  typesDirs.forEach((resources) => {
    if (!['.DS_Store', 'core'].includes(resources)) {
      const resourceDir = path.join(typesDir, resources);
      const schemaPath = path.join(resourceDir, 'schema.json');
      const copyPath = schemaPath.replace('src', 'dist');
          
      if (!fs.existsSync(resourceDir.replace('src', 'dist'))) fs.mkdirSync(resourceDir.replace('src', 'dist'));
      fs.createReadStream(schemaPath).pipe(fs.createWriteStream(copyPath));
    }
  });
}

// copy all the json in srd
const copySRD = () => {
  srdDirs.forEach((resources) => {
    if (!['.DS_Store'].includes(resources)) {
      const resourceDir = path.join(srdDir, resources);

      fs.readdirSync(resourceDir).forEach((filename) => {
        if (filename.includes('.json')) {
          const filePath = path.join(resourceDir, filename);
          const copyPath = filePath.replace('src', 'dist');
          
          if (!fs.existsSync(resourceDir.replace('src', 'dist'))) fs.mkdirSync(resourceDir.replace('src', 'dist'));
          fs.createReadStream(filePath).pipe(fs.createWriteStream(copyPath));
        }
      });
    }
  });
}

copySchemas();
copySRD();
