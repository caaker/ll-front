/*

encodeURI
  https://www.w3schools.com/tags/ref_urlencode.ASP 
  https://www.w3schools.com/jsref/jsref_encodeuri.asp
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI

encodeURIComponent
  https://www.w3schools.com/jsref/jsref_encodeuricomponent.asp

Regex
  https://www.w3schools.com/jsref/jsref_replace.asp

*/


/* jshint esversion: 8 */

const output = {};

output.makeHash = function(user_text){

  // appears to be a superset of encodeURI
  let ret = encodeURIComponent(user_text);

  // replace all %XX with a _
  ret = ret.replace(/%[0-9A-F]{2}/g, "_");

  // replaced 2 to 10 _ with a single _
  ret = ret.replace(/_{2,10}/g, "_");
  
  return ret;

};

export default output;

/*  broken, completely remove this

    let id = this.props.data.title.replace(/ /g, '_');

    // youtube does not like double underscore in its comments so adjust to use double dash
    id = id.replace(/#/g, '--');

    // this is a special character and if you copy past it into the URL it will be substituted with %FOO
    id = id.replace(/’/g, '_');
*/
