//modified from https://gist.github.com/lweiss01/7a6c60843b64236b018e7398fb0d5f40
//check if user prefers dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  (d => {
    var css = `:root{background-color:#f1f1f1;filter:invert(1) hue-rotate(180deg)}img:not([src*=".svg"]),picture,video{filter: invert(1) hue-rotate(180deg)}`,
      style, id = "dark-mode",
      ee = d.getElementById(id);
    if (null != ee) ee.parentNode.removeChild(ee);
    else {
      style = d.createElement('style');
      style.type = "text/css";
      style.id = id;
      if (style.styleSheet) style.styleSheet.cssText = css;
      else style.appendChild(d.createTextNode(css));
      (d.head || d.querySelector('head')).appendChild(style)
    }
  })(document)
}
