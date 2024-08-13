import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './temporaryupload')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname+".jpg")
    }
  })
  
  const multerUpload = multer({ storage: storage })

  export {
    multerUpload
  }