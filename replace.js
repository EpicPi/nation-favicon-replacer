// find and replace favicon href with default notion href
function changeFaviconHref(){
    $('link[rel="shortcut icon"]').attr('href','/images/favicon.ico');
}

// set favicon after notion has finished dynmaicaaly assigning favicon
setTimeout(changeFaviconHref, 2000);

//continue to change href in case notion tries to change favicon again
setInterval(changeFaviconHref, 10000);

