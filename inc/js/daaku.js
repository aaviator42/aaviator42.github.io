//modified from https://sanketmehta7.github.io/DarkMode-JS-BookMark/
//check if user prefers dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {

  //invert colors, skip transparency values
  function invert(str, type) {
    var t1 = str.split("(");
    var t2 = t1[1].split(")");
    var t3 = t2[0].split(",");
    t3.forEach(function(v, i) {
      if (i < 3) {
        if (type == "color")
          t3[i] = (255 - parseInt(v)) < 50 ? 120 : (255 - parseInt(v));
        else
          t3[i] = (255 - parseInt(v));
      }
    })
    t3 = t3.join(",");
    return t1[0] + "(" + t3 + ")";
  }
  //invert color and backgroundcolor of every dom node
  document.querySelectorAll('*:not([invTouch])').forEach(function(node) {
    var style = window.getComputedStyle(node);
    node.style.backgroundColor = invert(style.backgroundColor, "back");
    node.style.color = invert(style.color, "color");
    node.setAttribute("invTouch", "true");
  });
}
