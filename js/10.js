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
  //page 10
  if (fromValue == "10" && toValue == "11") {
    $.mobile.changePage("#ko01", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "12") {
    $.mobile.changePage("#ko02", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "13") {
    $.mobile.changePage("#ko03", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "14") {
    $.mobile.changePage("#ko04", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "15") {
    $.mobile.changePage("#ko05", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "16") {
    $.mobile.changePage("#ko06", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "17") {
    $.mobile.changePage("#ko07", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "18") {
    $.mobile.changePage("#ko08", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "19") {
    $.mobile.changePage("#ko09", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "20") {
    $.mobile.changePage("#ko10", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "21") {
    $.mobile.changePage("#ko11", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "22") {
    $.mobile.changePage("#ko12", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "23") {
    $.mobile.changePage("#ko13", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "24") {
    $.mobile.changePage("#ko14", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "25") {
    $.mobile.changePage("#ko15", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "26") {
    $.mobile.changePage("#ko16", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "27") {
    $.mobile.changePage("#ko17", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "28") {
    $.mobile.changePage("#ko18", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "29") {
    $.mobile.changePage("#ko19", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "30") {
    $.mobile.changePage("#ko20", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "31") {
    $.mobile.changePage("#ko21", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "32") {
    $.mobile.changePage("#ko22", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "33") {
    $.mobile.changePage("#ko23", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "34") {
    $.mobile.changePage("#ko24", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "35") {
    $.mobile.changePage("#ko25", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "1") {
    $.mobile.changePage("#ko26", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "2") {
    $.mobile.changePage("#ko27", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "3") {
    $.mobile.changePage("#ko28", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "4") {
    $.mobile.changePage("#ko29", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "5") {
    $.mobile.changePage("#ko30", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "6") {
    $.mobile.changePage("#ko31", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "7") {
    $.mobile.changePage("#ko32", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "8") {
    $.mobile.changePage("#ko33", { transition: "slideup" });
  } else if (fromValue == "10" && toValue == "9") {
    $.mobile.changePage("#ko34", { transition: "slideup" });
  }
});
