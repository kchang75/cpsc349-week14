$docBody = $(document.body);


$docBody.ready(function(){
    console.log("Loaded page");
    
    getImages(function (results){
        console.log(JSON.parse(results));
        
        var obj = JSON.parse(results);
        
        obj.images.forEach(insertImg(item, index));
        
    })
    
});

function getImages(callback) {
    console.log("Requesting Posts");

    var params = {
        url: "http://localhost:3000/images",
        method: "GET",
        //        data: params,
//        dataType: "json"
    };

    $.ajax(params).done(function (results) {
        if (callback) {
            //console.log(results);
            callback.call(this, results);
        }
    });

}

function insertImg(item, index)
{
    
}