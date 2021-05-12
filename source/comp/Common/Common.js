/* jshint esversion: 8 */

const output = {};

output.makeHash = function(user_text){
  let ret = encodeURIComponent(user_text);
  ret = ret.replace(/%[0-9A-F]{2}/g, "_");
  ret = ret.replace(/_{2,10}/g, "_");
  return ret;

};

export default output;
