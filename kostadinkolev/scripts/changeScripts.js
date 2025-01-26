var head = document.getElementsByTagName('head')[0];
var scrollScript = document.createElement('script');
var typeoutScript = document.createElement('script');
var desktopScript = document.createElement('script');

var mobileScript = document.createElement('script');

if (window.screen.width > 500) {
        scrollScript.type = 'text/javascript';
        scrollScript.src = '/scripts/scroll.js';
        head.appendChild(scrollScript);

        desktopScript.type = 'text/javascript';
        desktopScript.src = '/scripts/desktop.js';
        head.appendChild(desktopScript);

        // typeoutScript.type = 'text/javascript';
        // typeoutScript.src = '/scripts/typeout.js';
        // head.appendChild(typeoutScript);
}