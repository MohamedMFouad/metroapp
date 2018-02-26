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
  //page 6
  if (fromValue == "6" && toValue == "7") {
    $.mobile.changePage("#z01", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "8") {
    $.mobile.changePage("#z02", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "9") {
    $.mobile.changePage("#z03", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "10") {
    $.mobile.changePage("#z04", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "11") {
    $.mobile.changePage("#z05", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "12") {
    $.mobile.changePage("#z06", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "13") {
    $.mobile.changePage("#z07", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "14") {
    $.mobile.changePage("#z08", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "15") {
    $.mobile.changePage("#z09", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "16") {
    $.mobile.changePage("#z10", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "17") {
    $.mobile.changePage("#z11", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "18") {
    $.mobile.changePage("#z12", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "19") {
    $.mobile.changePage("#z13", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "20") {
    $.mobile.changePage("#z14", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "21") {
    $.mobile.changePage("#z15", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "22") {
    $.mobile.changePage("#z16", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "23") {
    $.mobile.changePage("#z17", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "24") {
    $.mobile.changePage("#z18", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "25") {
    $.mobile.changePage("#z19", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "26") {
    $.mobile.changePage("#z20", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "27") {
    $.mobile.changePage("#z21", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "28") {
    $.mobile.changePage("#z22", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "29") {
    $.mobile.changePage("#z23", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "30") {
    $.mobile.changePage("#z24", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "31") {
    $.mobile.changePage("#z25", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "32") {
    $.mobile.changePage("#z26", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "33") {
    $.mobile.changePage("#z27", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "34") {
    $.mobile.changePage("#z28", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "35") {
    $.mobile.changePage("#z29", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "1") {
    $.mobile.changePage("#z30", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "2") {
    $.mobile.changePage("#z31", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "3") {
    $.mobile.changePage("#z32", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "4") {
    $.mobile.changePage("#z33", { transition: "slideup" });
  } else if (fromValue == "6" && toValue == "5") {
    $.mobile.changePage("#z34", { transition: "slideup" });
  }
});
