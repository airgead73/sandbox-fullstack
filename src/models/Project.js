const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');

const ProjectSchema = new Schema({
  title: { type: String, required: [true, 'Title is required.'] },
  category: { type: String, required: [true, 'A category is required.'] },
  mode: { type: String, required: [true, 'A mode is required.'] },    
  material: { type: String, required: false },
  description: { type: String, required: false },
  notes: { type: String, required: false },
  slug: { type: String},
  createdAt: { type: Date, default: Date.now }
});

ProjectSchema.pre('save', async function(next) {

  this.slug = slugify(this.title, {
    replacement: '-',
    remove: /[&]/,
    lower: true,
    strict: true
  });

  next();

});

module.exports = mongoose.model('Project', ProjectSchema);