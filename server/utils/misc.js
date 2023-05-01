const bcrypt = require('bcryptjs');

module.exports.ageCalc = birthday => {
  let ageDifMs = Date.now() - Date(birthday);
  let ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

module.exports.getPrivilegeLevel = privilegePassword => {
  switch (true) {
    case bcrypt.compareSync(privilegePassword, process.env.TEACHER_KEY):
      return 'TEACHER';

    case bcrypt.compareSync(privilegePassword, process.env.ADMIN_KEY):
      return 'ADMIN';
    default:
      return 'STUDENT';
  }
};

module.exports.isEmail = logIn => {
  return /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(
    logIn
  );
};
