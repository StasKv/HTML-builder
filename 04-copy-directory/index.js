const fs = require("fs");
const path = require("path");

fs.rm(path.join(__dirname, "files-copy"), { recursive: true }, (err) => {
  if (err) console.log("dir not created");
  fs.mkdir(path.join(__dirname, "files-copy"), { recursive: true }, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("dir created");
      fs.readdir(
        path.join(__dirname, "files"),
        { withFileTypes: true },
        (err, files) => {
          if (err) console.log(err);
          for (const file of files) {
            fs.copyFile(
              path.join(__dirname, "files", file.name),
              path.join(__dirname, "files-copy", file.name),
              (err) => {
                if (err) console.log(err);
                console.log("file copied");
              }
            );
          }
        }
      );
    }
  });
});

/*
fs.promises.readdir(path.join(__dirname, "files"), {withFileTypes: true})
  .then ((err,files)=>{
    fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('dir created')
      }
      })
  })
  .then( (files) => {
    console.log(files)
    for (const file of files) {
      fs.copyFile(path.join(__dirname, 'files', file.name ), path.join(__dirname, 'files-copy', file.name), err=>{
        if (err) {
          console.log(err)
        } else {
          console.log('file copied')
        }
      });
    }
  })
*/
