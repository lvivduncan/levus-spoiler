// 6-12-2020
"use strict";

function levusSpoiler(selector) {
  var word = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "spoiler";
  document.querySelectorAll(selector).forEach(function (item) {
    item.style.cssText = 'position:relative;overflow:hidden;height:38px';

    var el = document.createElement('div');
    el.style.cssText = 'position:absolute;top:0;left:0;width:100%;padding:10px;text-align:center;background:white;color:red;cursor:pointer;';
    el.innerHTML = "<span class=\"levus-spoiler\">".concat(word, "</span>");
    el.className = 'levus-spoiler';
    item.append(el);

    item.addEventListener('click', function (e) {
      if (e.target.className == 'levus-spoiler') {
        item.style.cssText = '';
        el.style.display = 'none';
      }
    });
  });
}

levusSpoiler('#example p', 'спойлер');