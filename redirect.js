// Try redirect...
const currentUrl = window.location.href;

// old html remove
const removeHtml = currentUrl.replace(".html", "");

// new redirect
const urlObj = new URL(currentUrl);
const domain = urlObj.origin;
const path = urlObj.pathname.split('/');

if (path.length > 1) {
    const lastUrl = path[path.length - 1]
    window.location.replace(`${domain}/${lastUrl}`)
}