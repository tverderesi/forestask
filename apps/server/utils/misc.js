const bcrypt = require('bcryptjs');


module.exports.ageCalc = birthday => {
  let ageDifMs = Date.now() - Date(birthday);
  let ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

module.exports.getPrivilegeLevel = (roleKey) => {
    if (!roleKey) return 'STUDENT';
    if (bcrypt.compareSync(roleKey, process.env.TEACHER_KEY)) return 'TEACHER';
    if (bcrypt.compareSync(roleKey, process.env.ADMIN_KEY)) return 'ADMIN';
  }


module.exports.isEmail = logIn => {
  return /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i.test(
    logIn
  );
};
