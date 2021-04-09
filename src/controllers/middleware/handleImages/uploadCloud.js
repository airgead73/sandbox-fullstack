const { cloudinary } = require('./../../../config/cloudinary');

const uploadCloud = async function(req, res, next) {

  const fileStr = req.body.image;
  const uploadedResponse = await cloudinary.uploader.upload(
    fileStr,
    {
      folder: "test/",
      eager: [
        { 
          color: "#ffffff", 
          gravity: "south_east",
          overlay: {font_family: "Roboto", font_size: 10, text: "%C2%A9%20Brian%20Moneypenny"}
        }
      ]      
    }
  )

  res.cloudData = uploadedResponse;

  next();

}

module.exports = uploadCloud;