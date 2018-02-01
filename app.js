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


$(document).ready(function() {
function updateCount() {
  var cookieCount = Cookies.get("sugarCookie");

  if (cookieCount === undefined) {
    $("#sugar-count").html("0");
  } else {
    $("#sugar-count").html(cookieCount);
  }
}

$("#sugar-add").on("click", function() {
  var cookieCount = Cookies.get("sugarCookie");

  if (cookieCount === undefined) {
    Cookies.set("sugarCookie", 1);
  } else {
    cookieCount = parseInt(cookieCount) + 1;
    Cookies.set("sugarCookie", cookieCount);
  }

  updateCount();
});

$("#sugar-remove").on("click", function() {
  var cookieCount = Cookies.get("sugarCookie");

  if (cookieCount === undefined) {
    Cookies.set("sugarCookie", -1);
  } else {
    cookieCount = parseInt(cookieCount) - 1;
    Cookies.set("sugarCookie", cookieCount);
  }

  updateCount();
});

$("#sugar-clear").on("click", function() {
  Cookies.set("sugarCookie", 0);
  updateCount();
});

updateCount();

$(document).ready(function() {
function updateCount() {
  var cookieCount = Cookies.get("oatmealCookie");

  if (cookieCount === undefined) {
    $("#oatmeal-count").html("0");
  } else {
    $("#oatmeal-count").html(cookieCount);
  }
}

$("#oatmeal-add").on("click", function() {
  var cookieCount = Cookies.get("oatmealCookie");

  if (cookieCount === undefined) {
    Cookies.set("oatmealCookie", 1);
  } else {
    cookieCount = parseInt(cookieCount) + 1;
    Cookies.set("oatmealCookie", cookieCount);
  }

  updateCount();
});

$("#oatmeal-remove").on("click", function() {
  var cookieCount = Cookies.get("oatmealCookie");

  if (cookieCount === undefined) {
    Cookies.set("oatmealCookie", -1);
  } else {
    cookieCount = parseInt(cookieCount) - 1;
    Cookies.set("oatmealCookie", cookieCount);
  }

  updateCount();
});

$("#oatmeal-clear").on("click", function() {
  Cookies.set("oatmealCookie", 0);
  updateCount();
});

updateCount();
