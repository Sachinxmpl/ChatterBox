import multer from "multer";
// import { storage } from "../cloudinaryconfig.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './temporaryupload')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname+Math.random().toString()+ ".jpg")
    }
  })
  
  const multerUpload = multer({ storage })

  export {
    multerUpload
  }