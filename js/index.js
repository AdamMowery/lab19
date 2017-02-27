var fruit = new Array();
var price = new Array();
var total =0;

function display() {
   for (var i = 0; i < fruit.length; i++) {
     document.write(fruit[i] + "<br>");
     total = total + price[i];
   }
  

  document.write("<br>Your total is: $"+total);
}