  // https://stackoverflow.com/questions/4766201/javascript-invert-color-on-all-elements-of-a-page
  // the css we are going to inject
  let css = 'html {-webkit-filter: invert(100%);' +
    '-moz-filter: invert(100%);' +
    '-o-filter: invert(100%);' +
    '-ms-filter: invert(100%); }';

  let head = $('head')[0];
  let invertStyle = $('#invert')[0];

  if (invertStyle) {
    head.removeChild(invertStyle);
  } else {
    let style = document.createElement('style');

    style.type = 'text/css';
    style.id = 'invert';
    if (style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    //injecting the css to the head
    head.appendChild(style);
  }
