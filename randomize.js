if (location.hash) {
  var parts = location.hash.slice(1).split("&");
  var rand = Math.random() * parts.length >> 0;
  try {
    location = atob(parts[rand]);
  } catch (e) {
    location = location.href.slice(0, location.href.indexOf("#"));
  }
}
