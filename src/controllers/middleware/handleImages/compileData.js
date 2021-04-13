const compileData = async function(req, res, next) {

  const { 
    alt,
    caption,
    project, 
    title
  } = req.body;

  const { 
    bytes,
    eager,
    format, 
    height, 
    public_id, 
    secure_url: url,
    width, 
  } = res.cloudData;

  const url_copyright = eager[0].secure_url;

  res.imageData = {
    alt,
    bytes,
    caption,
    format,
    height,
    project,
    public_id,
    title,
    url,
    url_copyright,
    width,
  }

  next();

}

module.exports = compileData;