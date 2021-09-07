// find and replace favicon href with default notion href
function changeFaviconHref(){
    $('link[rel="shortcut icon"]').attr('href','/images/favicon.ico');
}

//continue to change href in case notion tries to change favicon again
setInterval(changeFaviconHref, 2000);

