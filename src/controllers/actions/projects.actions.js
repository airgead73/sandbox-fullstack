const asyncHandler = require('./../middleware/handleAsync');
const createError = require('http-errors');
const Project = require('./../../models/Project');

/**
 * @route   POST /api/projects
 * @desc    create 
 * @access  private
 */

 exports.create = asyncHandler(async function(req, res, next) {
  const project = new Project(req.body);
  await project.save();

  return res
    .status(200)
    .json({
      success: true,
      message: 'Project has been added.',
      results: project
    });
});

/**
 * @route   GET /api/projects
 * @desc    read 
 * @access  private
 */

exports.read = asyncHandler(async function(req, res, next) {
  const projects = await Project.find();
  return res
    .status(200)
    .json({
      success: true,
      message: 'Projects found.',
      count: projects.length,
      results: projects
    });  
});

/**
 * @route   GET /api/projects/:projectID
 * @desc    read one 
 * @access  private
 */

exports.read_one = asyncHandler(async function(req, res, next) {
  const project = await Project.findById(req.params.projectID);

  console.log(project);

  if(project) {
    return res
    .status(200)
    .json({
      success: true,
      message: 'Projects found.',
      results: project
    });    
  } 

});

/**
 * @route   PUT /api/projects/:projectID
 * @desc    update project 
 * @access  private
 */

exports.update = asyncHandler(async function(req, res, next) {
  // find project
  let project = await Project.findById(req.params.projectID);

  if(!project) return next(createError(404, 'project not found.'));
  

  // build fields
  const {
    title,
    code,
    client,
    edition,
    author,
    notes
  } = req.body;

  const projectFields = {};

  if(title) projectFields.title = title;
  if(code) projectFields.code = code;
  if(client) projectFields.client = client;
  if(edition) projectFields.edition = edition;
  if(author) projectFields.author = author;
  if(notes) projectFields.notes = notes;
  

  // update project
  project = await Project.findByIdAndUpdate(req.params.projectID, { $set: projectFields }, { new: true });

  return res
    .status(200)
    .json({ 
      success: true, 
      msg: 'PUT: project updated',
      project
    });  
});

/**
 * @route   DELETE /
 * @desc    delete project 
 * @access  private
 */

exports.delete_one = asyncHandler(async function(req, res, next) {
  
  // find project
  let project = await Project.findById(req.params.projectID);

  if(!project) return next(createError(404, 'Project not found'));

  //delete project
  await project.remove();

  return res
    .status(200)
    .json({
      success: true,
      message: `${project.code} has been deleted`
    });


});

/**
 * @route   DELETE /
 * @desc    delete all projects 
 * @access  private
 */

exports.delete_all = asyncHandler(async function(req, res, next) {

  Project.collection.drop();

  return res
    .status(200)
    .json({
      success: true,
      message: 'Project collection deleted.'
    })

});