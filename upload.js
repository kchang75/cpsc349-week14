
  var uploadedFile = document.getElementById('fileupload');
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
