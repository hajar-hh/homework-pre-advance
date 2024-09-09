function logger(req, res, next) {
  // console.log(req);
  const requestTime = new Date().toLocaleString();
  console.log(`request received at: ${requestTime}`);
  next();
}

module.exports = logger;
