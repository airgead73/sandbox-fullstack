const asyncHandler = require('./../middleware/handleAsync');
const Photo = require('./../../models/Photo');
const { cloudinary } = require('./../../config/cloudinary');

/**
 * @route   POST /
 * @desc    create photo
 * @access  private
 */

exports.create = asyncHandler(async function(req, res, next) {

    const fileStr = req.body.data_url;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      folder: `test/${req.body.image}`,
      eager: [
        { 
          color: "#ffffff", 
          gravity: "south_east",
          overlay: {font_family: "Roboto", font_size: 10, text: "%C2%A9%20Brian%20Moneypenny"}
        }
      ]
    });
    console.log('photo response:', uploadedResponse);
    //res.json({msg: 'fill uploaded'})

    return res
      .status(200)
      .json({
        success: true,
        uploadedPhoto: uploadedResponse
      })

  // const photo = new Photo(res.imageData);

  // await photo.save();

  // return res
  //   .status(200)
  //   .json({
  //     success: true,
  //     msg: 'Photo was added',
  //     photo
  //   });

});

 /**
 * @route   GET /
 * @desc    read all photos
 * @access  private
 */

  exports.read_all = asyncHandler(async function(req, res, next) {

    const { success, count, data } = res.results;
  
    return res
      .status(200)
      .json({ 
        success: success,
        count: count,
        message: count > 0 ? `GET: ${count} found`: 'No photos found.',
        photos: data
      });  
  
  }); 