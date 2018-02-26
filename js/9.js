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
  //page 9
  if (fromValue == "9" && toValue == "10") {
    $.mobile.changePage("#hm01", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "11") {
    $.mobile.changePage("#hm02", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "12") {
    $.mobile.changePage("#hm03", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "13") {
    $.mobile.changePage("#hm04", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "14") {
    $.mobile.changePage("#hm05", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "15") {
    $.mobile.changePage("#hm06", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "16") {
    $.mobile.changePage("#hm07", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "17") {
    $.mobile.changePage("#hm08", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "18") {
    $.mobile.changePage("#hm09", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "19") {
    $.mobile.changePage("#hm10", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "20") {
    $.mobile.changePage("#hm11", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "21") {
    $.mobile.changePage("#hm12", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "22") {
    $.mobile.changePage("#hm13", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "23") {
    $.mobile.changePage("#hm14", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "24") {
    $.mobile.changePage("#hm15", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "25") {
    $.mobile.changePage("#hm16", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "26") {
    $.mobile.changePage("#hm17", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "27") {
    $.mobile.changePage("#hm18", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "28") {
    $.mobile.changePage("#hm19", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "29") {
    $.mobile.changePage("#hm20", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "30") {
    $.mobile.changePage("#hm21", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "31") {
    $.mobile.changePage("#hm22", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "32") {
    $.mobile.changePage("#hm23", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "33") {
    $.mobile.changePage("#hm24", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "34") {
    $.mobile.changePage("#hm25", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "35") {
    $.mobile.changePage("#hm26", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "1") {
    $.mobile.changePage("#hm27", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "2") {
    $.mobile.changePage("#hm28", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "3") {
    $.mobile.changePage("#hm29", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "4") {
    $.mobile.changePage("#hm30", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "5") {
    $.mobile.changePage("#hm31", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "6") {
    $.mobile.changePage("#hm32", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "7") {
    $.mobile.changePage("#hm33", { transition: "slideup" });
  } else if (fromValue == "9" && toValue == "8") {
    $.mobile.changePage("#hm34", { transition: "slideup" });
  }
});
