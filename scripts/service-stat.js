function stat(doc, cls, path, auth) {
    let len = services_class.length;
    let indicator;
    var request;

    // Set XMLHttpRequest
    if(window.XMLHttpRequest)
        request = new XMLHttpRequest();
    else
        request = new ActiveXObject("Microsoft.XMLHTTP");
    
    // Check if dst is reachable
    request.open('GET', "/", false);
    request.send();
    if (request.status != 200)
        return false;
    
    // Send request to sub-dirs
    for (var i = 0; i < len; i++){
        indicator = doc.querySelector("span." + cls[i]);
        link = doc.querySelector("a." + cls[i]);
        request.open('GET', path[i], false);
        request.setRequestHeader("Authorization", "Basic " + auth[i]);
        request.send();
        if (request.status == 200) {
	    // Change to color and set href of the url
            indicator.style.color = "lime";
            link.href = services_path[i];
            link.target = "_blank";
        }
    }
}

