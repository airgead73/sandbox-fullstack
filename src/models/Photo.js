const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  title: { type: String, required: [true, 'Title is required.'] },
  caption: { type: String, required: [true, 'A caption is required.'] },
  alt: { type: String, required: [true, 'Alt text is required.'] },    
  project: { type: mongoose.Schema.ObjectId, ref: 'Project' },
  public_id: { type: String, trim: true },
  format: { type: String, trim: true }, 
  bytes: { type: String, trim: true }, 
  url: { type: String, trim: true },
  url_copyright: { type: String, trim: true },
  width: { type: Number },  
  height: { type: Number },
  orientation: { type: String },
  createdAt: { type: Date, default: Date.now }
});

PhotoSchema.pre('save', function(next) {

  const getOrienation = function(w, h) {

    if(w > h) {
      return  'landscape';
    } else if(w < h) {
      return 'portrait';
    } else {
      return 'square';
    }

  }

  this.orientation = getOrienation(this.width, this.height);

  next();

});

module.exports = mongoose.model('Photo', PhotoSchema);