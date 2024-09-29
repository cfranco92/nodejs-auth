const bcrypt = require('bcrypt');

async function hashPassword() {
  const myPassword = 'admin 123 .202';
  // const hash = await bcrypt.hash(myPassword, 10);
  const hash = '$2b$10$xTIzNlLlGMUseQLqJOtxwuj3HI5ZEiZMSA47W6SYxEPMTC3WwUlfq';
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

hashPassword();
