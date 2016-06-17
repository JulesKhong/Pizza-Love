// BACK END LOGIC
function Pizza (delivery, pizzaSize){
  // this.orderName =
  this.delivery = delivery,
  this.pizzaSize = pizzaSize,
  // this.veg = veg,
  // this.meat = meat,
  // this.extras = [],
  this.total = 10;
}

Pizza.prototype.addSizetoTotal = function(){
  if (this.pizzaSize === "large"){
    this.total += 10;
  } else if (this.pizzaSize === "medium"){
    debugger;
    this.total += 5;
  } else {
    this.total += 0;
  }
};


// FRONT END LOGIC

$(document).ready(function(){

  $("#orderForm").submit(function(event){
    event.preventDefault();

    var delivery = $("#transportMethod").val();
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var orderedPizzaSize = $("#pizzaSize").val();
    var newPizza = new Pizza (delivery, orderedPizzaSize);
    newPizza.addSizetoTotal();
    debugger;
    $(".results").show;
    $("#totalPrice").append(newPizza.total);
    console.log(newPizza.total);
  })

});



// TRYING TO MAKE AN ARRAY WITH OBJECTS IN IT

// Pizza.prototype.calculateTotal = function(){
//   var baseprice = 10;
//
//   for (var i=0; i < pizzaSize.length ; i++ )
//   if (this.pizzaSize === orderedPizzaSize){
//     this.total += (pizzaSize.price);
//   }
  // else if (this.pizzaSize === "large"){
  //   this.total += (baseprice + 10);
  // } else {
  //   this.total += baseprice;
  // }
// };
