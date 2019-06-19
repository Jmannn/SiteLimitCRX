//everything works but storage
$(function(){
    $('#addsite').click(function(){
	//code to do stuff goes here
	alert();
	//document.body.innerHTML = '';//this is for testing
	chrome.storage.sync.get(['links', 'limits'],function(blockedSites){
	    var links = new Array(1);
	    var timeLimits = new Array(1);
	    //I think this block of text is the problem
	    if (blockedSites.links){
		links = links.concat(blockedSites.links);
		timeLimits = timeLimits.concat(blockedSites.limits);
	    }

            links.push($('#site').val());

	    chrome.storage.sync.set({'links': links}, function(){
		document.write("set workds");

	    });
	    chrome.storage.sync.set({'limits': timeLimits}, function(){
		//document.write("set workds");

	    });

	});

    })
});
