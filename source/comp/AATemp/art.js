const fs = require('fs');

fs.readFile('articles.js', 'utf8', (err, contents) => {
  // console.log(contents);
  parseFile(contents);
});

function parseFile(contents){
  let type = typeof contents;
  let array = JSON.parse(contents);
  loopData(array);
}

function loopData(array){
  for(let i = 0; i < array.length; i++ ){
    delete array[i]['date'];
    delete array[i]['saved'];
    // console.log(array[i]['domain']);
  }
  outputData(array)
}

function outputData(array){
  const string = JSON.stringify(array, null, 2);
  console.log(string)
}
// const array = JSON.parse(json_string);
// export default arrary;2

