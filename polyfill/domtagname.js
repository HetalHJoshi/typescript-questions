if (!document.getElementsByTagName) {
  document.getElementsByTagName = function (tagName) {
    return document.querySelectorAll(tagName);
  };
}
