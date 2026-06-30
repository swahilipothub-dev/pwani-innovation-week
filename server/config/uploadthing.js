import { createUploadthing } from "uploadthing/express";

const f = createUploadthing();

export const uploadRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .onUploadComplete(({ file }) => {
      console.log("File uploaded:", file.url);
      return { url: file.url, key: file.key }; // returned to frontend
    }),
};
