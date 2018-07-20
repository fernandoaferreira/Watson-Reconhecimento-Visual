var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  api_key: 'Digite sua API KEY disponivel no painel de controle do IBM Watson'
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