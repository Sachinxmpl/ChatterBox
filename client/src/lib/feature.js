const fileFormat = (url) => {
  const fileExtension = url.split(".").pop();
  if (
    fileExtension === "mp4" ||
    fileExtension === "webm" ||
    fileExtension === "ogg"
  ) {
    return "video";
  } else if (fileExtension === "mp3" || fileExtension === "wav") {
    return "audio";
  } else if (
    fileExtension === "png" ||
    fileExtension === "jpg" ||
    fileExtension === "jpeg" ||
    fileExtension === "gif" ||
    fileExtension === "webp"
  ) {   
    return "image";
  }
  // else if(fileExtension ==="pdf"){
  //     return "pdf"
  // }
  // else if(fileExtension ==="doc" || fileExtension ==="docx"){
  //     return "doc"
  // }
  // else if(fileExtension ==="xls" || fileExtension ==="xlsx"){
  //     return "xls"
  // }
  else {
    return "file";
  }
};

const transfromImage = (url = "", width = 200) => {
  return url;
};

export { fileFormat, transfromImage };
