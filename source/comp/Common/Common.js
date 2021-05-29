/* jshint esversion: 8 */

const output = {};

function useScrollTo (element, offset) {
  const top = element.getBoundingClientRect().top - offset
  window.scrollTo({
    top: top,
    behavior: "smooth"
  });
}

output.makeHash = function(user_text){
  let ret = encodeURIComponent(user_text);
  ret = ret.replace(/%[0-9A-F]{2}/g, "_");
  ret = ret.replace(/_{2,10}/g, "_");
  return ret;
};

output.scrollToHash = function (time, offset) {
  window.setTimeout(()=>{
    const hash = document.location.hash.slice(1);
    if(!hash) {
      return;
    }
    const element = document.getElementById(hash);
    if(!element) {
      return;
    }
    useScrollTo(element, offset);
  }, time);
}

output.copyToClipboard = function (text) {
  const input = document.createElement("input");
  input.style="position:absolute;opacity:0";
  input.value = text;
  document.body.append(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

export default output;
