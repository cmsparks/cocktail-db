// tried to use a js library to parse but turns out the library is broken for what i want to do lmao 
var parseInfo = require("infobox-parser")
var fs = require('fs');

let cocktail_list = []

let opts = {simplifyDataValues: false}

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + '/' + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}

function convertContent(content) {
  let object = {}
  let lines = content.split("\n|")
  for (let i in lines) {
    if (lines[i].includes("=")) {
      kv = lines[i].split("=");
      object[kv[0].trim()] = kv[1].trim()
    }
  }
  return object
}

function parseCocktail(filename, content) {
  console.log("parsing: " +filename)
  let cocktail_result = convertContent(content);

  if (!("name" in cocktail_result)) {
    cocktail_result.name = filename
  }

  //console.log(cocktail_result)
  cocktail_list.push(cocktail_result)
}

function errorOut(err) {
  console.log("ERROR: " + err)
}

readFiles("./infoboxes", parseCocktail, errorOut);

setTimeout(function() {
const data = JSON.stringify(cocktail_list);
fs.writeFile('./cocktails.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});
}, 1000)
