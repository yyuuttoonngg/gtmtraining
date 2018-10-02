const testRegex = url => {
  const myRegex =/.*\/sign-up.*\/thankyou.*/;
  return myRegex.test(url);
}

module.exports = testRegex;