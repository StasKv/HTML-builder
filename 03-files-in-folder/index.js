const path = require("path");
const fs = require("fs");

fs.promises
  .readdir(path.join(__dirname, "secret-folder"), { withFileTypes: true })
  .then((files) => {
    for (const file of files) {
      if (file.isFile()) {
        let fileName = path.parse(file.name).name;
        let extName = path.extname(file.name).slice(1);
        fs.stat(
          path.join(__dirname, "secret-folder", file.name),
          (err, stats) => {
            if (err) console.log(err);
            console.log(`${fileName} - ${extName} - ${stats.size}b`);
          }
        );
      }
    }
  });
