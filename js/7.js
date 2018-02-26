var fromValue;
var toValue;
$("#select-choice-from").on("change", function() {
  fromValue = $(this).val();
  console.log("from value " + fromValue);
});
$("#select-choice-to").on("change", function() {
  toValue = $(this).val();
});
$("#loadBTN").click(function() {
  //page 7
  if (fromValue == "7" && toValue == "8") {
    $.mobile.changePage("#h01", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "9") {
    $.mobile.changePage("#h02", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "10") {
    $.mobile.changePage("#h03", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "11") {
    $.mobile.changePage("#h04", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "12") {
    $.mobile.changePage("#h05", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "13") {
    $.mobile.changePage("#h06", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "14") {
    $.mobile.changePage("#h07", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "15") {
    $.mobile.changePage("#h08", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "16") {
    $.mobile.changePage("#h09", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "17") {
    $.mobile.changePage("#h10", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "18") {
    $.mobile.changePage("#h11", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "19") {
    $.mobile.changePage("#h12", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "20") {
    $.mobile.changePage("#h13", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "21") {
    $.mobile.changePage("#h14", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "22") {
    $.mobile.changePage("#h15", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "23") {
    $.mobile.changePage("#h16", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "24") {
    $.mobile.changePage("#h17", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "25") {
    $.mobile.changePage("#h18", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "26") {
    $.mobile.changePage("#h19", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "27") {
    $.mobile.changePage("#h20", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "28") {
    $.mobile.changePage("#h21", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "29") {
    $.mobile.changePage("#h22", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "30") {
    $.mobile.changePage("#h23", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "31") {
    $.mobile.changePage("#h24", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "32") {
    $.mobile.changePage("#h25", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "33") {
    $.mobile.changePage("#h26", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "34") {
    $.mobile.changePage("#h27", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "35") {
    $.mobile.changePage("#h28", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "1") {
    $.mobile.changePage("#h29", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "2") {
    $.mobile.changePage("#h30", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "3") {
    $.mobile.changePage("#h31", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "4") {
    $.mobile.changePage("#h32", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "5") {
    $.mobile.changePage("#h33", { transition: "slideup" });
  } else if (fromValue == "7" && toValue == "6") {
    $.mobile.changePage("#h34", { transition: "slideup" });
  }
});
