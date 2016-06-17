// BACK END LOGIC
function Pizza (delivery, pizzaSize, protein, veggie){
  this.delivery = delivery;
  this.pizzaSize = pizzaSize;
  this.protein = protein;
  this.veggie = veggie,
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

Pizza.prototype.addDeliverytoTotal = function() {
  if (this.delivery === "delivery"){
    this.total += 5;
  }
};

Pizza.prototype.addProtein = function() {
  for (var j=0 ; j < this.protein.length ; j++ ){
    if (this.protein.length )
    this.total += 2;
  }
};

Pizza.prototype.addVeggie = function() {
  for (var j=0 ; j < this.veggie.length ; j++ ){
    if (this.veggie.length )
    this.total += 1;
  }
};


// FRONT END LOGIC

$(document).ready(function(){

  $("#orderForm").submit(function(event){
    event.preventDefault();

// GATHER DETAILS OF PIZZA ORDER
    var delivery = $("#transportMethod").val();
    var firstName = $("#firstName").val();

    if (firstName === "" || firstName === null ){
        $("#myModal").modal("show");
      // alert("Oops! Looks like you forgot to enter your name");
    } else {
    var lastName = $("#lastName").val();
    var orderedPizzaSize = $("#pizzaSize").val();
    var protein = [];
    $.each($("input[name='protein']:checked"), function() {
      protein.push($(this).val());
    });

    var veggie = [];
    $.each($("input[name='veggie']:checked"), function() {
      veggie.push($(this).val());
    });

// CREATE NEW OBJECT, AND RUN PROTOTYPES TO CALCULATE PIZZA COST
    var newPizza = new Pizza (delivery, orderedPizzaSize, protein, veggie);
    newPizza.addSizetoTotal();
    newPizza.addDeliverytoTotal();
    newPizza.addProtein();
    newPizza.addVeggie();


// ORDER SUMMARY INFO
    $(".col-sm-4").show();
    $("#totalPrice").append(newPizza.total);
    $("#summarySize").append(newPizza.pizzaSize);
    $("#customerName").append(firstName);
    $("#summaryToppings").append(protein.join(", "));
    $("#summaryToppings").append(", "+ veggie.join(", "));

    if (delivery === "delivery"){
      $("#summaryMessage").append("Confirm your order, and your pizza will be <strong><em>delivered</em></strong> to your door in 30 min or less.")
    } else {
      $("#summaryMessage").append("Confirm your order, and your pizza will be ready for <strong><em>pickup</em></strong> in 20 minutes.")
    }
  }
  })
});
