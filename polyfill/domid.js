if (!document.getElementById) {
  document.getElementById = function (id) {
    return document.querySelector(`#${id}`);
  };
}
