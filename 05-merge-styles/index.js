const fs = require("fs");
const path = require("path");

fs.rm(path.join(__dirname, "project-dist", "bundle.css"),{ force: true }, () => {
    const writeStream = fs.createWriteStream(
      path.join(__dirname, "project-dist", "bundle.css")
    );
    fs.readdir(path.join(__dirname, "styles"), { withFileTypes: true }, (err, files) => {
        if (err) console.log(err);
        for (const file of files) {
          let extName = path.extname(file.name).slice(1);
          if (extName === "css" && file.isFile()) {
            const readableStream = fs.createReadStream(
              path.join(__dirname, "styles", file.name)
            );
            readableStream.on("data", (chunk) => {
              writeStream.write(chunk + "\n\n");
            });
          }
        }
      }
    );
  }
);
