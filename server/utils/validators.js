/** @format */

const { getPrivilegeLevel } = require("./misc");

module.exports.validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword,
  roleKey,
  role
) => {
  const errors = {};

  const privilegeLevel = getPrivilegeLevel(roleKey);

  switch (true) {
    case username.trim() === "":
      errors.username = "Username must not be empty!";

    case email.trim() === "":
      errors.email = "E-mail must not be empty!";

    /**
     * A regular expression that checks that a string is a valid email address.
     * @type {RegExp}
     */
    case !email.match(
      /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i
    ):
      errors.email = "Email must be a valid email address.";

    case password === "":
      errors.password = "Password must not be empty or contain spaces!";
    case role !== "STUDENT" && privilegeKey === "":
      errors.password = "Privilege Key must not be empty or contain spaces!";

    /**
     * A regular expression that checks that a password meets the following requirements:
     * - At least 8 characters long
     * - Contains at least one uppercase letter
     * - Contains at least one lowercase letter
     * - Contains at least one number
     * - Contains at least one symbol
     * @type {RegExp}
     */

    case !password.match(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    ):
      errors.password =
        "Password must contain at least one uppercase case, one lowercase letter, one number and one symbol.";

    case password !== confirmPassword:
      errors.confirmPassword = "Passwords must match!";

    case privilegeLevel === "INVALID":
      errors.privilegeLevel = "Privilege Key is invalid!";

    case privilegeLevel !== role:
      errors.privilegeLevel = `Privilege Key for is incorrect for the role you selected!`;
  }
  return { errors, valid: Object.keys(errors).length < 1 };
};

module.exports.validateLoginInput = (logIn, password) => {
  const errors = {};
  if (!logIn || logIn.trim() === "") {
    errors.field = "Username or email must not be empty!";
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty!";
  }
  return { errors, valid: Object.keys(errors).length < 1 };
};
