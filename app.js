var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  api_key: '9d8c81ba63f842b9917223c00790a739af389617'
});

var images_file = fs.createReadStream('./imgs/foto2.jpg')

var params = {
  images_file: images_file
};

visualRecognition.detectFaces(params, function(err, response) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(response, null, 2))
});