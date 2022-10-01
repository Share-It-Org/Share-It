// need to imort database

const userController = {};

userController.loginUser = (req, res, next) => {
  // get username and password
  const username = req.body.username;
  const password = req.body.password; 

  // need SQL query for this
  const query = '';
  

}




module.exports = userController;