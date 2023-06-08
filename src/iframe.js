
export function redirectToViteBlitz() {
    // Get the current URL
    var contentUrl = window.location.pathname + window.location.search + window.location.hash;
    
    // Create the new URL with the old URL as a hash
    var viteblitzUrl = "/__viteblitz#" + contentUrl;        

    // Check if the window is not within an iframe
    if (window.self === window.top) {
        // check if the current window location is a viteblitz URL
        if (window.location.pathname.startsWith("/__viteblitz")) {
            //console.log("redirectToViteBlitz/self", contentUrl);
        } else {
            //console.log("redirectToViteBlitz/redirect", contentUrl, viteblitzUrl);
            // redirect the current window to the viteblitz URL
            window.location.href = viteblitzUrl;
        } 
    } else {
        // Check if the contentURL is a viteblitz URL
        if (contentUrl.startsWith("/__viteblitz")) {
            //console.log("redirectToViteBlitz/redirectParent", contentUrl);
            // redirect the parent window to the viteblitz URL
            window.top.location.assign(contentUrl);
        } else {
            //console.log("redirectToViteBlitz/ignore", contentUrl);
        }
    }
}
