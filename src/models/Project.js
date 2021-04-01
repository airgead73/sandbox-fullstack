const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: { type: String, required: [true, 'Title is required.'] },
  category: { type: String, required: [true, 'A category is required.'] },
  mode: { type: String, required: [true, 'A mode is required.'] },    
  material: { type: String, required: false },
  desc: { type: String, required: false },
  notes: { type: String, required: false }
});

module.exports = mongoose.model('Project', ProjectSchema);