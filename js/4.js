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
  //page 4
  if (fromValue == "4" && toValue == "5") {
    $.mobile.changePage("#sh01", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "6") {
    $.mobile.changePage("#sh02", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "7") {
    $.mobile.changePage("#sh03", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "8") {
    $.mobile.changePage("#sh04", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "9") {
    $.mobile.changePage("#sh05", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "10") {
    $.mobile.changePage("#sh06", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "11") {
    $.mobile.changePage("#sh07", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "12") {
    $.mobile.changePage("#sh08", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "13") {
    $.mobile.changePage("#sh09", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "14") {
    $.mobile.changePage("#sh10", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "15") {
    $.mobile.changePage("#sh11", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "16") {
    $.mobile.changePage("#sh12", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "17") {
    $.mobile.changePage("#sh13", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "18") {
    $.mobile.changePage("#sh14", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "19") {
    $.mobile.changePage("#sh15", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "20") {
    $.mobile.changePage("#sh16", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "21") {
    $.mobile.changePage("#sh17", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "22") {
    $.mobile.changePage("#sh18", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "23") {
    $.mobile.changePage("#sh19", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "24") {
    $.mobile.changePage("#sh20", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "25") {
    $.mobile.changePage("#sh21", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "26") {
    $.mobile.changePage("#sh22", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "27") {
    $.mobile.changePage("#sh23", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "28") {
    $.mobile.changePage("#sh24", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "29") {
    $.mobile.changePage("#sh25", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "30") {
    $.mobile.changePage("#sh26", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "31") {
    $.mobile.changePage("#sh27", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "32") {
    $.mobile.changePage("#sh28", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "33") {
    $.mobile.changePage("#sh29", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "34") {
    $.mobile.changePage("#sh30", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "35") {
    $.mobile.changePage("#sh31", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "1") {
    $.mobile.changePage("#sh34", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "2") {
    $.mobile.changePage("#sh33", { transition: "slideup" });
  } else if (fromValue == "4" && toValue == "3") {
    $.mobile.changePage("#sh32", { transition: "slideup" });
  }
});
