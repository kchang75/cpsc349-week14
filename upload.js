let s3Client = new AWS.S3({
    endpoint: "http://127.0.0.1:9000",
    s3ForcePAthStyle: true,
    signatureVersion: "v4",
    accessKeyId: "KWTCUUF8G2PMKTYITSDN",
    secretAccessKey: "eiCN5aFmDO9giYIqjpdu8+BOMPA17z2J74bSHBmL"
});

let objParam = {
    Bucket: "images",
    Key: file.name,
    Body: file,
    ContentLength: file.size,
    ContentType: file.type
};

s3Client.putObject(objParam, function (err, data) {console.log(err, data); });

function uploadImage(imgData) {

//    var resultDiv = $("#resultDivContainer");

    $.ajax({
        url: "https://localhost:3000/images",
        type: "POST",
        data: imgData,
//        dataType: "json",
        success: function (result) {
            alert(result);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            alert(xhr.status);
            alert(thrownError);
        }
    });
};

//var Fs = require('fs')
//var file = '/tmp/40mbfile'
//var fileStream = Fs.createReadStream(file)
//var fileStat = Fs.stat(file, function (err, stats) {
//            if (err) {
//                return console.log(err)
//            }
            //minioClient.putObject('images', '40mbfile', fileStream, stats.size, function(err, etag) {
            //  return console.log(err, etag) // err should be null
            //})
            //})
