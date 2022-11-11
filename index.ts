import { PathLike } from "fs";
import { readdir, rename } from "fs/promises";
import { join } from "path";

const directoryPath = "My Books";
const fileExtension = "pdf";
const commonFileName = "My Book: Volume ";

readdir(directoryPath).then((files) => {
  files.forEach((fileName, index) => {
    rename(
      join(directoryPath, fileName),
      (() => {
        // To add 0 before every chapter less than 10
        if (index < 9)
          return join(
            directoryPath,
            `${commonFileName} 0${++index}.${fileExtension}`
          ) as PathLike;
        return join(
          directoryPath,
          `${commonFileName} ${++index}.${fileExtension}`
        ) as PathLike;
      })()
    );
  });
});
