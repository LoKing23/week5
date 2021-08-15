"use strict";

$(function () {
  console.log('Hello Bootstrap5');
}); //inline editor

InlineEditor.create(document.querySelector('#editor'))["catch"](function (error) {
  console.error(error);
});
//# sourceMappingURL=all.js.map
