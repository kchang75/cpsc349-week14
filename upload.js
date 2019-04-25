JSONTest = function() {

    var resultDiv = $("#resultDivContainer");

    $.ajax({
        url: "https://localhost:3000/images",
        type: "POST",
        dataType: "json",
        success: function (result) {
            switch (result) {
                case true:
                    processResponse(result);
                    break;
                default:
                    resultDiv.html(result);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
        }
    });
};

var Fs = require('fs')
var file = '/tmp/40mbfile'
var fileStream = Fs.createReadStream(file)
var fileStat = Fs.stat(file, function(err, stats) {
if (err) {
  return console.log(err)
}
minioClient.putObject('images', '40mbfile', fileStream, stats.size, function(err, etag) {
  return console.log(err, etag) // err should be null
})
})
