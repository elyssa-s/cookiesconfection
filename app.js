$(document).ready(function() {

  function updateCount() {
    var cookieCount = Cookies.get("chocolateCookie");

    if (cookieCount === undefined) {
      $("#chocolate-count").html("0");
    } else {
      $("#chocolate-count").html(cookieCount);
    }
  }

  $("#chocolate-add").on("click", function() {
    var cookieCount = Cookies.get("chocolateCookie");

    if (cookieCount === undefined) {
      Cookies.set("chocolateCookie", 1);
    } else {
      cookieCount = parseInt(cookieCount) + 1;
      Cookies.set("chocolateCookie", cookieCount);
    }

    updateCount();
  });

  $("#chocolate-remove").on("click", function() {
    var cookieCount = Cookies.get("chocolateCookie");

    if (cookieCount === undefined) {
      Cookies.set("chocolateCookie", -1);
    } else {
      cookieCount = parseInt(cookieCount) - 1;
      Cookies.set("chocolateCookie", cookieCount);
    }

    updateCount();
  });

  $("#chocolate-clear").on("click", function() {
    Cookies.set("chocolateCookie", 0);
    updateCount();
  });

  updateCount();

});
