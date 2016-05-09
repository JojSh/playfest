var request = require('request');
var ocrKey = process.env.OCR_KEY;

var requestForm = {
  url: 'https://api.ocr.space/parse/image',
  form: {
    apikey: ocrKey
  }
};

var stubForm = {
  url: 'http://test:3000',
  form: {
    apikey: ocrKey
  }
};

exports.sendUrlToOcr = function(url,callback){
  requestForm.form.url = url;
  request.post(requestForm,function(err,data){
    callback(data.body,err);
  });
};
