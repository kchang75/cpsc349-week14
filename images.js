$docBody = $(document.body);

var testVar;

$docBody.ready(function(){
    console.log("Loaded page");
    
    getImages(function (results){
        console.log(results);
        
        var obj = results;
        var testVar = results;
//        var obj = JSON.parse(results);
        
        obj.forEach(insertImg);
        
    })
    
});

function getImages(callback) {
    console.log("Requesting Posts");

    var params = {
        url: "http://localhost:3000/images",
        method: "GET",
        //        data: params,
        dataType: "json"
    };

    $.ajax(params).done(function (results) {
        if (callback) {
            //console.log(results);
            callback.call(this, results);
        }
    });

}

function insertImg(item)
{
    console.log(item.id + item.caption + item.src);
    var htmlTemplate = $("#templateImg").html();
    
    $("#orderedList").append(htmlTemplate);
    $("#orderedList").last("img").attr("id", item.id);
    $("#orderedList").find(item.id).text(item.caption);
    $("#orderedList").find(item.id).attr("src", item.src);
    
    
}