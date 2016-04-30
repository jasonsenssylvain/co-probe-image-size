var probe = require('probe-image-size');

exports.getSize = function(fileName) {
  return new Promise(function(resolve, reject){
    var input = require('fs').createReadStream(fileName);
    probe(input, function(error, dimensions){
      input.destroy();
      if(error) reject(error);
      resolve(dimensions);
    }); 
  }); 
}