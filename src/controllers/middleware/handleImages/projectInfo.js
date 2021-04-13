const Project = require('./../../../models/Project');

const projectInfo = async function(req, res, next) {

  try {

    const { project } = req.body;
    res.project = await Project.findById(project);
    return next();    

  } catch(err) {
    console.log(err)
  }
}

module.exports = projectInfo;