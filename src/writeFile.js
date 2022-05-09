const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        message: 'HTML file has been generated. It can be found in the dist directory.'
      });
    });
  });
};

module.exports = writeFile;